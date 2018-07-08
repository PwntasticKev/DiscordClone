require("dotenv").config()
const AWS = require("aws-sdk")

// The keys will be obtained from you AWS account.
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESSKEY,
  secretAccessKey: process.env.AWS_SECRETKEY,
  region: process.env.AWS_REGION
})

const S3 = new AWS.S3()

function uploadPhoto(req, res) {
  console.log("photo in back", req.body.filename, process.env.AWS_ACCESSKEY)
  let photo = req.body,
    buf = new Buffer(
      photo.file.replace(/^data:image\/\w+;base64,/, ""),
      "base64"
    ),
    params = {
      Bucket: process.env.AWS_S3_BUCKET,
      Body: buf,
      Key: photo.filename,
      ContentType: photo.filetype,
      ACL: "public-read"
    }

  console.log(buf)

  S3.upload(params, (err, data) => {
    console.log(err, data)
    if (err) {
      res.status(500).send(err)
    } else {
      const db = req.app.get("db")
      // db.create_channel([id, name, channelid, req.user.id, img])
      res.status(200).send(data)
    }
  })
}

module.exports = function(app) {
  app.post("/api/uploadPhoto", uploadPhoto)
}
