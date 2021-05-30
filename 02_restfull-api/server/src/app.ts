import express from "express";
import config from "config";
import routes from "./routes";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = config.get("port") as number;

app.listen(port, () => {
  console.info(`Server listing at http://localhost:${port}`);
  routes(app);
});
