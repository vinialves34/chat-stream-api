import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  port: 5432,
  host: process.env.NODE_ENV === "docker" ? "database" : "localhost",
  username: "docker",
  password: "docker",
  database: "chat_stream",
  migrations: ["./src/database/migrations/*.ts"],
  entities: ["./src/modules/**/entities/*.ts"],
});

export { AppDataSource };
