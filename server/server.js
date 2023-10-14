const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDb = require("./db/dbConnect");
const loginRouter = require("./routes/login.routes");
const registerRouter = require("./routes/register.routes");

connectDb();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", registerRouter);
app.use("/api", loginRouter);

app.listen(3000, () => {
  console.log("connected to server");
});
