module.exports = {
  userInfo: (req, res, next) => {
    console.log("this is the user:", req.user)
    if (req.user) {
      return res.status(200).send(req.user)
    } else {
      return res.status(401).send("Log in required")
    }
  },
  createChannel: (req, res, next) => {
    const db = req.app.get("db")
    const { servername } = req.body
    db.res.status(200).send("received.")
  }
}
