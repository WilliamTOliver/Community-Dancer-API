import AppDataSource from "./data-source"
import { User } from "./entity/User"
import "reflect-metadata";
import * as express from "express";
import { LOG, ERROR } from "./log";


AppDataSource.initialize()
    .then(() => AppDataSource.runMigrations({ transaction: 'each' })
        .catch(e => ERROR('Migrations failed with error', e)))
    .then(async () => {
        try {
            LOG("Inserting a new user into the database...")
            const user = new User()
            user.firstName = 0
            user.lastName = "Saw"
            user.age = 25
            await AppDataSource.manager.save(user)
            LOG("Saved a new user with id: " + user.id)

            LOG("Loading users from the database...")
            const users = await AppDataSource.manager.find(User)
            LOG("Loaded users: ", users)

            LOG("Here you can setup and run express / fastify / any other framework.")
        } catch (error) {
            LOG("connection test failed with error", error)
        }


        const app = express();
        const port = 8080; // default port to listen

        // define a route handler for the default home page
        app.get("/", (req, res) => {
            res.send("Hello worlld!");
        });

        // start the Express server
        app.listen(port, () => {
            // tslint:disable-next-line:no-console
            LOG(`server started at http://localhost:${port}`);
        });

    }).catch(error => LOG(error))
