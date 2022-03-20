import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { AddUser1647805378916 } from "./migration/1647805378916-AddUser"

export default new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "community-dancer",
    synchronize: false,
    logging: false,
    entities: [User],
    migrations: [AddUser1647805378916],
    subscribers: [],
})
