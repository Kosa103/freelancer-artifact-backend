# FREELANCER ARTIFACT README

Freelancer Artifact is a web application storing data about Freelancer DiscoveryGC players.
This repo is the backend.
Uses node.js, typescript, express, sqlite


## HOW TO CREATE DATABASE AND TABLES

- npx tsc

- node dist/initDatabase.js


npx tsc compiles typescript code in "src/" into "dist/"

node dist/initDatabase.js run the compiled code to create DB and tables.


## HOW TO BUILD AND RUN

- npx tsc

- node dist/app.js


npx tsc compiles typescript code in "src/" into "dist/"

node dist/app.js runs the compiled code.