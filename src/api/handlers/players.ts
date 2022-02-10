import { body, validationResult } from 'express-validator';
import { app, currentPlayers } from '../../app';
import {
    insertPlayerFull,
    selectAllPlayers,
    selectPlayerById,
    selectPlayerByName,
} from '../../database-operations/players';
import { selectShipById } from '../../database-operations/ships';
import { selectAffiliationById } from '../../database-operations/affiliations';
import { selectIdentifierById } from '../../database-operations/identifiers';
import { selectScannerById } from '../../database-operations/scanners';
import { selectArmorById } from '../../database-operations/armors';
import { selectCloakById } from '../../database-operations/cloaks';
import { Player } from '../../models/player.model';


export const getOnlinePlayers = () => {
    app.get('/players-online', (req, res) => {
        if (currentPlayers.error) {
            throw new Error(currentPlayers.error);
        } else {
            res.send(JSON.stringify(currentPlayers));
        }
    });
};

export const getPlayers = () => {
    app.get('/players', async (req, res, next) => {
        try {
            const players: Player[] = await selectAllPlayers();
            res.send(JSON.stringify(players));
        } catch (err) {
            next(err);
        }
    });
};

export const getPlayer = () => {
    app.get('/players/:id', async (req, res, next) => {
        try {
            const player: Player = await selectPlayerById(req.params.id);
            res.send(player);
        } catch (err) {
            next(err);
        }
    })
};

export const postPlayer = () => {
    app.post(
        '/players',
        body('name').isLength({ min: 1, max: 64 }),
        body('level').isInt().optional({ nullable: true }),
        body('description').isLength({ max: 5000 }).optional({ nullable: true }),
        body('shipId').isInt().optional({ nullable: true }),
        body('affiliationId').isInt().optional({ nullable: true }),
        body('identifierId').isInt().optional({ nullable: true }),
        body('scannerId').isInt().optional({ nullable: true }),
        body('armorId').isInt().optional({ nullable: true }),
        body('cloakId').isInt().optional({ nullable: true }),
        async (req, res, next) => {
            const validationErrors = validationResult(req);
            if (!validationErrors.isEmpty()) {
                return res.status(400).json({ errors: validationErrors.array() });
            }
            
            const player = new Player(req.body);
            try {
                const existingPlayer = await selectPlayerByName(player.name);
                if (existingPlayer) {
                    return res.status(400).json({ errors: [
                        {
                            "location": "body",
                            "msg": "Player name already in use",
                            "param": "name"
                        }
                    ] });
                }

                if (player.shipId) {
                    const ship = await selectShipById(player.shipId);

                    if (!ship) {
                        return res.status(400).json({ errors: [
                            {
                                "location": "body",
                                "msg": "Ship does not exist",
                                "param": "name"
                            }
                        ] });
                    }
                }

                if (player.affiliationId) {
                    const affiliation = await selectAffiliationById(player.affiliationId);

                    if (!affiliation) {
                        return res.status(400).json({ errors: [
                            {
                                "location": "body",
                                "msg": "Affiliation does not exist",
                                "param": "name"
                            }
                        ] });
                    }
                }

                if (player.identifierId) {
                    const identifier = await selectIdentifierById(player.identifierId);

                    if (!identifier) {
                        return res.status(400).json({ errors: [
                            {
                                "location": "body",
                                "msg": "Identifier does not exist",
                                "param": "name"
                            }
                        ] });
                    }
                }

                if (player.scannerId) {
                    const scanner = await selectScannerById(player.scannerId);

                    if (!scanner) {
                        return res.status(400).json({ errors: [
                            {
                                "location": "body",
                                "msg": "Scanner does not exist",
                                "param": "name"
                            }
                        ] });
                    }
                }

                if (player.armorId) {
                    const armor = await selectArmorById(player.armorId);

                    if (!armor) {
                        return res.status(400).json({ errors: [
                            {
                                "location": "body",
                                "msg": "Armor does not exist",
                                "param": "name"
                            }
                        ] });
                    }
                }

                if (player.cloakId) {
                    const cloak = await selectCloakById(player.cloakId);

                    if (!cloak) {
                        return res.status(400).json({ errors: [
                            {
                                "location": "body",
                                "msg": "Cloak does not exist",
                                "param": "name"
                            }
                        ] });
                    }
                }

                const createdPlayer = await insertPlayerFull({
                    name: player.name,
                    level: player.level,
                    description: player.description,
                    shipId: player.shipId,
                    affiliationId: player.affiliationId,
                    identifierId: player.identifierId,
                    scannerId: player.scannerId,
                    armorId: player.armorId,
                    cloakId: player.cloakId,
                })
                res.send(JSON.stringify(createdPlayer));
            } catch (err) {
                next(err);
            }
    })
};

export const putPlayer = () => {
    app.put(
        '/players/:id',
        body('name').isLength({ min: 1, max: 64 }),
        body('level').isInt().optional({ nullable: true }),
        body('description').isLength({ max: 5000 }).optional({ nullable: true }),
        body('shipId').isInt().optional({ nullable: true }),
        body('affiliationId').isInt().optional({ nullable: true }),
        body('identifierId').isInt().optional({ nullable: true }),
        body('scannerId').isInt().optional({ nullable: true }),
        body('armorId').isInt().optional({ nullable: true }),
        body('cloakId').isInt().optional({ nullable: true }),
        async (req, res, next) => {
            const validationErrors = validationResult(req);
            if (!validationErrors.isEmpty()) {
                return res.status(400).json({ errors: validationErrors.array() });
            }
            
            const player = new Player(req.body);
            try {
                const existingPlayer = await selectPlayerById(player.name);
                if (!existingPlayer) {
                    return res.status(400).json({ errors: [
                        {
                            "location": "body",
                            "msg": "Player does not exist",
                            "param": "name"
                        }
                    ] });
                }

                if (player.shipId) {
                    const ship = await selectShipById(player.shipId);

                    if (!ship) {
                        return res.status(400).json({ errors: [
                            {
                                "location": "body",
                                "msg": "Ship does not exist",
                                "param": "name"
                            }
                        ] });
                    }
                }

                if (player.affiliationId) {
                    const affiliation = await selectAffiliationById(player.affiliationId);

                    if (!affiliation) {
                        return res.status(400).json({ errors: [
                            {
                                "location": "body",
                                "msg": "Affiliation does not exist",
                                "param": "name"
                            }
                        ] });
                    }
                }

                if (player.identifierId) {
                    const identifier = await selectIdentifierById(player.identifierId);

                    if (!identifier) {
                        return res.status(400).json({ errors: [
                            {
                                "location": "body",
                                "msg": "Identifier does not exist",
                                "param": "name"
                            }
                        ] });
                    }
                }

                if (player.scannerId) {
                    const scanner = await selectScannerById(player.scannerId);

                    if (!scanner) {
                        return res.status(400).json({ errors: [
                            {
                                "location": "body",
                                "msg": "Scanner does not exist",
                                "param": "name"
                            }
                        ] });
                    }
                }

                if (player.armorId) {
                    const armor = await selectArmorById(player.armorId);

                    if (!armor) {
                        return res.status(400).json({ errors: [
                            {
                                "location": "body",
                                "msg": "Armor does not exist",
                                "param": "name"
                            }
                        ] });
                    }
                }

                if (player.cloakId) {
                    const cloak = await selectCloakById(player.cloakId);

                    if (!cloak) {
                        return res.status(400).json({ errors: [
                            {
                                "location": "body",
                                "msg": "Cloak does not exist",
                                "param": "name"
                            }
                        ] });
                    }
                }

                const createdPlayer = await insertPlayerFull({
                    name: player.name,
                    level: player.level,
                    description: player.description,
                    shipId: player.shipId,
                    affiliationId: player.affiliationId,
                    identifierId: player.identifierId,
                    scannerId: player.scannerId,
                    armorId: player.armorId,
                    cloakId: player.cloakId,
                })
                res.send(JSON.stringify(createdPlayer));
            } catch (err) {
                next(err);
            }
    })
};
