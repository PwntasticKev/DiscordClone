require("dotenv").config()
const bcrypt = require("bcrypt")
const { SALT_ROUNDS } = process.env
const db = require("./server")
const passport = require("passport")

module.exports = {
  createUser: (req, username, password, done) => {
    console.log("hitting CONTROLLEr")
    const { email } = req.body
    bcrypt.genSalt(SALT_ROUNDS / 1, (err, salt) => {
      bcrypt.hash(password, salt, (err, hash) => {
        const db = req.app.get("db")
        db.create_user([username, email, hash]).then(createdUser => {
          return done(null, createdUser[0])
        })
      })
    })
  },

  login: (req, res, next) => {
    const { password, username } = req.body
    db.query("SELECT ALL FROM users WHERE username = ?", [username], data => {
      console.log("DB User Data from Login: ", data[0])
      bcrypt.compare(password, data[0].password, valid => {
        if (valid) {
          res.render("dashboard", { user: req.session.user, userInfo: data })
        } else {
          req.flash("Incorrect Password")
        }
      })
    })
  }
}
