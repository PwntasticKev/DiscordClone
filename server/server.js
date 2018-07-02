require("dotenv").config()
const express = require("express")
const session = require("express-session")
const passport = require("passport")
const Auth0Strategy = require("passport-auth0")
const massive = require("massive")
const bodyParser = require("body-parser")
const bcrypt = require("bcrypt")
const LocalStrategy = require("passport-local")
const uc = require("./uc")

const {
  SERVER_PORT,
  SESSION_SECRET,
  CONNECTION_STRING,
  REACT_APP_SUCCESS_REDIRECT
} = process.env

const app = express()
app.use(bodyParser.json())
app.use("/static", express.static("public", { redirect: true }))

massive(CONNECTION_STRING).then(db => app.set("db", db))
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
)
// setting up session
app.use(
  session({
    secret: SESSION_SECRET || "ghvjhvjahbsdfuhalksdfbkhagd",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000
    }
  })
)

// setting up passport to....
app.use(passport.initialize())
// .... handle sessions:
app.use(passport.session())

// using local strategy for custom login handling
passport.use(
  //items in here are strcitly for passport
  // has to come in as req first
  new LocalStrategy({ passReqToCallback: true }, function(
    req,
    username,
    password,
    done
  ) {
    console.log(
      "INSIDE OF PASSPORT STRATEGY. username: ",
      username,
      " and password: ",
      password
    )
    const db = app.get("db")
    db.find_user([username]).then(user => {
      console.log("hits find_user")

      //else
      console.log(req.body)
      if (!user[0] && req.body.email) {
        uc.createUser(req, username, password, done)
      } else if (!user[0]) {
        console.log("INSIDE OF THE NO EMAIL FAIL")
        return done(null, false)
      } else {
        bcrypt.compare(password, user[0].password).then(valid => {
          console.log("INSIDE OF THE COMPARE")
          if (valid) {
            return done(null, user[0])
          } else {
            return done(null, false)
          }
        })
      }
    })
  })
)

// Adds user obj from DB to req.session.user.  when user is created it comes here.
passport.serializeUser((user, done) => {
  console.log("SERIALIZING")
  done(null, user)
})
// Adds created userObj w/trails wishlist to req.user, including DB user object properties
passport.deserializeUser((user, done) => {
  console.log("deSERIALIZING")
  const db = app.get("db")
  db.find_session_user([user.id]).then(userdb => {
    let userObj = {
      ...user,
      user: id
    }
    delete userObj.password
    return done(null, userdb[0])
  })
})

// custom top level middleware to see what is arriving on the req.body
// logging url helps debug which route has the underlying issue

// also checking the session object to see what is available
// app.use((req, res, next) => {
//   console.log(
//     "URL: ",
//     req.url,
//     "Method: ",
//     req.method,
//     "Body: ",
//     req.body,
//     "Session Obj: ",
//     req.session,
//     "SessionPassport User: ",
//     req.session.passport.user
//   )
//   next()
// })

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/channels",
    failureRedirect:
      "/login/fail?message=Incorrect login credentials. Please try again or signup if you do not have an account yet."
  }),
  (req, res) => {
    console.log("Prepare for Success Redirect from Authenticate")
    res.sendStatus(200)
  }
)
// props.history.push('/dashboard') takes you to the route that you want. (on the front end)
//options objects

app.post(
  "/signup",
  passport.authenticate("local", {
    successRedirect: "/channels",
    failureRedirect:
      "/login/fail?message=Incorrect login credentials. Please try again or signup if you do not have an account yet."
  })
)
app.get("/logout", (req, res) => {
  req.logout()
  res.redirect("/")
})

//OTHER ENDPOINTS---------------------

app.listen(SERVER_PORT, () => {
  console.log(`AQUI EN LA ${SERVER_PORT}`)
})
