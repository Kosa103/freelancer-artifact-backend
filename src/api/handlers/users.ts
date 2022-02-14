import { body, validationResult } from 'express-validator';
import { app, JWT_SECRET } from '../../app';
import {
    insertUserFull,
    selectUserByHash,
    selectUserById,
    selectUserByName,
} from '../../database-operations/users';
import { User } from '../../models/user.model';
import { authenticate as auth } from '../../middleware/auth';
import { ADMIN_API_PATH } from '../../constants';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


export const createUser = () => {
    app.post(
        `${ADMIN_API_PATH}/users`,
        auth,
        body('name').isLength({ min: 3, max: 64 }),
        body('password').isLength({ min: 8, max: 64 }),
        body('passwordConfirmation').custom((value, { req }) => {
          if (value !== req.body.password) {
            throw new Error('Password confirmation does not match password');
          }
          return true;
        }),
        body('isAdmin').isBoolean(),
        async (req, res, next) => {
            const validationErrors = validationResult(req);
            if (!validationErrors.isEmpty()) {
                return res.status(400).json({ errors: validationErrors.array() });
            }

            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(req.body.password, salt);
            
            const user = new User({
                name: req.body.name,
                hash: hash,
                isAdmin: req.body.isAdmin,
            });
            try {
                let existingUser = await selectUserByName(user.name);
                if (existingUser) {
                    return res.status(400).json({ errors: [
                        {
                            "location": "body",
                            "msg": "User name already in use",
                            "param": "name"
                        }
                    ] });
                }

                existingUser = await selectUserByHash(user.hash);
                if (existingUser) {
                    return res.status(400).json({ errors: [
                        {
                            "location": "body",
                            "msg": "Choose a different password",
                            "param": "name"
                        }
                    ] });
                }

                const createdUser = await insertUserFull({
                    name: user.name,
                    hash: user.hash,
                    isAdmin: user.isAdmin,
                    token: user.token,
                })
                res.send(JSON.stringify(createdUser));
            } catch (err) {
                next(err);
            }
    });
};

export const loginUser = () => {
    app.post(
        `${ADMIN_API_PATH}/login`,
        body('name').isLength({ min: 3, max: 64 }),
        body('password').isLength({ min: 8, max: 64}),
        async (req, res, next) => {
            const validationErrors = validationResult(req);
            if (!validationErrors.isEmpty()) {
                return res.status(400).json({ errors: validationErrors.array() });
            }

            try {
                const user = await selectUserByName(req.body.name);
                user.hash = null;
                if (!user) {
                    return res.status(401).json({ errors: [
                        {
                            "location": "body",
                            "msg": "User does not exist",
                            "param": "name"
                        }
                    ] });
                }

                const isPasswordValid = await bcrypt.compare(req.body.password, user.hash);
                if (!isPasswordValid) {
                    return res.status(400).json({ errors: [
                        {
                            "location": "body",
                            "msg": "Invalid password",
                            "param": "name"
                        }
                    ] });
                } else {
                    const token = jwt.sign(
                        { userName: user.name },
                        JWT_SECRET,
                        {
                            expiresIn: "90d",
                        }
                    );
                    user.token = token;
                    res.send(JSON.stringify(user));
                }
            } catch (err) {
                next(err);
            }
        }
    );
};
