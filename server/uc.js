require("dotenv").config()
const bcrypt = require("bcrypt")
const { SALT_ROUNDS } = process.env
const db = require("./server")
// const plaintextpassword = "not_bacon" //what ever the user tpyes in

module.exports = {
  createUser: (body, username, password, next) => {
    const { fullname, email } = body
    bcrypt.genSalt(SALT_ROUNDS / 1, (err, salt) => {
      if (err) {
        console.log("Salt Error: ", err)
      } else {
        bcrypt.hash(password, salt, (err, hash) => {
          if (err) {
            console.log("Hash Error: ", err)
          } else {
            console.log("Hash: ", hash, "Salt: ", salt)
            db.query(
              `INSERT INTO users (username, fullname, email, password) VALUES (${mysql.escape(
                username
              )}, ${mysql.escape(fullname)}, ${mysql.escape(
                email
              )}, ${mysql.escape(hash)});`,
              (insertErr, insertRes) => {
                if (insertErr) {
                  console.log("Insert Into Error: ", insertErr)
                } else {
                  db.query(
                    `SELECT * FROM trailschema.users WHERE username = '${username}';`,
                    (err, newUser) => {
                      if (err) {
                        console.log(
                          "Supposed to be err: ",
                          err.sqlMessage,
                          "Supposed to be results of newUser",
                          newUser
                        )
                        next(null, false)
                      } else if (newUser[0].username !== username) {
                        console.log(
                          "Creation of New User failed.",
                          err.sqlMessage
                        )
                        next(null, false)
                      } else {
                        next(null, newUser[0])
                      }
                    }
                  )
                }
              }
            )
          }
        })
      }
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
