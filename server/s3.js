const AWS = require("aws-sdk")

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESSKEY,
  secretAccessKey: process.env.AWS_SECRETKEY,
  region: process.env.AWS_REGION
})

const S3 = new AWS.S3()

function uploadPhoto(req, res) {
  console.log("this", req)

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
    const { servername, photo } = req.body
    console.log("server one", servername)
    console.log(err, data)
    if (err) {
      res.status(500).send(err)
    } else {
      console.log("hitting upload endpoint")
      const db = req.app.get("db")
      //db stuff
    }
  })
}

module.exports = {
  uploadPhoto: uploadPhoto
}
