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
  createChannel: (req, res, next) => {
    const db = req.app.get("db")
  }
}
