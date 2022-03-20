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

## Development
To run this project locally:
- `npm i`
- `npm run dev`




## Sources
Based loosely off of [Okta's article on Node-TS-Express api development](https://developer.okta.com/blog/2018/11/15/node-express-typescript). This does not include their use of dotenv, authorization, or ejs. We are using this to just get a quick rest api up and running. 
