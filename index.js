const sequelize = require("./connection");
const express = require("express");
const app = express();
const Router = require("./Routes/PrimaryRoutes");
const PORT = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", Router);

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

app.listen(PORT, () => {
  console.log(`API Starting Working on Port Number ${PORT}`);
});
