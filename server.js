const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Настройка подключения к базе данных
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "survey_db",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to database");
});

// Обработка POST-запроса от формы
app.post("/submit-form", (req, res) => {
  const { name, email, age, aktiv, group, role, recommed, inp, comment } =
    req.body;

  let languages = Array.isArray(inp) ? inp.join(", ") : inp;

  const sql =
    "INSERT INTO survey (name, email, age, aktiv, group, role, recommed, languages, comment) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

  db.query(
    sql,
    [name, email, age, aktiv, group, role, recommed, languages, comment],
    (err, result) => {
      if (err) throw err;
      res.send("Data inserted successfully");
    }
  );
});

// Запуск сервера
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
