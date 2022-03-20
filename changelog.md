# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- Changelog
- ReadME

## [0.0.0]
### Added
- Boilerplate express/ts
- nodemon for re-launching server on save
- lint job, tie it to local dev script (when we make changes, ensure they pass basic rules for writing code, this will make it easier to catch bugs/problems quickly and easily as well as make our code more consistent)
- tools and run local instructions in readme

## [0.1.0]
### Added
- TypeORM postgres boilerplate, connected to local db
- Migration generation configuration. This allows us to make changes to entities and run the readme described migration generation script and see verbatim what changed in the db.
- Code to run migrations on server startup