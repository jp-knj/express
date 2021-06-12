import express from "express";
import config from "config";
import log from "./logger";
import posts from './routes/post';
import users from './routes/users';
import auth from './routes/auth';
import connect from "./database/connect";

const port = config.get('port') as number;
const host = config.get('host') as string;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, host, () => {
  console.log(`Server listing at http://${host}:${port}`);
  log.info(`Server listing at http://${host}:${port}`);
  connect();
  users(app);
  auth(app);
  posts(app);
});
