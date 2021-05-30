import express from "express"

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(4000, () => {
  console.info(`Server listing at http://localhost:4000`);
});
