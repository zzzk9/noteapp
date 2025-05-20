const express = require("express");
const app = express();
const router = express.Router();
const con = require("../connections/connection.js");
const cors = require("cors");

app.use(cors());

//POST REQUEST
router.route("/add").post((req, res) => {
  let sql = `INSERT INTO notes (title) VALUES("${req.body.title}")`;
  con.query(sql, function (err, row, field) {
    if (err) console.log(err);
    else res.redirect(301, "http://localhost:80");
  });
});

//PUT REQUEST
router.route("/add/:id/:title").put((req, res) => {
  let sql = `UPDATE notes SET title="${req.params.title}" WHERE id=${req.params.id}`;
  con.query(sql, function (err, row) {
    if (err) console.log(err);
    else res.redirect(301, "http://localhost:80/add");
  });
});

//EDIT REQUEST
router.route("/edit/:id/:title").put((req, res) => {
  let sql = `UPDATE notes SET title="${req.params.title}" WHERE id=${req.params.id}`;
  con.query(sql, function (err, row) {
    if (err) console.log(err);
    else res.redirect(301, "http://localhost:80/edit");
  });
});

module.exports = router;
