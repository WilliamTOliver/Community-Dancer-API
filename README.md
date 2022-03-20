# Community Dancer API

## Intro
This is both a repository for a portfolio project and in it's structure (commits, readme, and changelog) instructions on how to construct a Express/TypeScript + Postgres/TypeORM REST API.

To learn how to build a project like this, start in either the commits (broad strokes in commit messages + isolated code change diffs) or change log (detailed descriptions of changes)

This is paired with Community Dancer UI which serves the same purpose (portfolio piece + instruction) but for a React/TypeScript UI.

## Tools

### TypeScript
- Why: This project was built as an instructuional tool primarily for developers coming from a typed language background (C#, Java...) and for that reason uses TS to offer a shallower learning curve and some familiarity compared with going straight to JS.

### Express
- Why: Express is by a wide margin (at time of writing) the most used API framework for nodeJS (including TS). 

### TypeORM
- Why: An ORM gives us a suite of tools to better write API code to interact with our DB. TypeORM is an easy to use ORM that allows us to almost entirely avoid writing out queries by hand and focus our learning on TS and less on SQL.  

## Development

### To run this project locally:
- `npm i`
- `npm run dev`

### If you change an entity or otherwise want to generate a migration based on code changes:
- `npm migrate --./src/migration/[YOUR MIGRATION NAME]`
- Go to src/data-src.ts and add your generated migration class to the datasource's migration array.
- Note: migrations run on server startup, so simply run `npm run dev` or any other server startup script to run your changes against the configured db.




## Sources
- Boilerplate: Based loosely off of [Okta's article on Node-TS-Express api development](https://developer.okta.com/blog/2018/11/15/node-express-typescript). This does not include their use of dotenv, authorization, or ejs. We are using this to just get a quick rest api up and running. 
- DB/TypeORM: Follows TypeORM's ['Get Started' instructions](https://typeorm.io/#/).