const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

//Middlewares.
app.use(cors());
app.use(express.json());

//Database..
const uri = process.env.MONGO_API;
mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(() => console.log("Mongoose connection successfull"));

//routes.
const loginRouter = require("./route/login");
const registerRouter = require("./route/register");

app.use("/login", loginRouter);
app.use("/register", registerRouter);

const todoRoute = require("./route/todo");
const { response } = require("express");
app.use("/todo", todoRoute);

//Deployment
__dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

//Server running..
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Successfully started at ${PORT}`);
});
