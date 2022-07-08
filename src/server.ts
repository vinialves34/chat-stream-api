import "reflect-metadata";
import express, { Request, Response } from "express";
import swaggerUi from "swagger-ui-express";

import { router } from "./routes";
import swaggerFile from "./swagger.json";
import "./database";
import "./shared/container";

const app = express();

app.use(express.json());

/** Swagger Doc */
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello World");
});

/** Routes */
app.use(router);

app.listen(3001, () => console.log("Server is running!"));
