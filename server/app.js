const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.post("/api/sign_in", (req, res) => {
  const body = req.body;

  User.find({ login: body.login })
    .then(user => {
      if (user.length === 0)
        res.status(401).json({
          error: true,
          field: "login",
          message: "Użytkownik o takiej nazwie nie istnieje."
        });
      else {
        const dehash = bcrypt.compareSync(body.password, user[0].password);
        if (dehash === true) {
          const token = jwt.sign(
            { login: body.login },
            process.env.ACCESS_TOKEN_SECRET
          );
          res.json({ error: false, field: "", message: "", token });
        } else
          res.status(401).json({
            error: true,
            field: "password",
            message: "Nieprawidłowe hasło."
          });
      }
    })
    .catch(error => {
      res.status(400).json({
        error: true,
        field: "both",
        message: "Wystąpił błąd. Spróbuj ponownie."
      });
    });
});
