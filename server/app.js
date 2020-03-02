const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./models/User");
require("dotenv").config();
const app = express();
const port = 3000;

app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.post("/api/sign_in", (req, res) => {
  const body = req.body;

  User.find({ login: body.login, password: body.password })
    .then(user => {
      if (user.length === 0) res.status(401).json({ error: true });
      else res.json({ error: false });
    })
    .catch(error => {
      console.log(error);
    });
});
