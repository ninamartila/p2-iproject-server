const axios = require("axios");
const FormData = require("form-data");

const imageUpload = (req, res, next) => {
  const { file, filename } = req.image;
  const imageKitAuth = process.env.IMAGE_PRIVATE_API_KEY;
  const imageKitURL = process.env.IMAGE_UPLOAD_URL;
  const auth = new Buffer.from(imageKitAuth, "utf-8").toString("base64");
  const form = new FormData();
  form.append("file", file);
  form.append("fileName", filename);

  axios({
    method: "post",
    url: imageKitURL,
    data: form,
    headers: {
      ...form.getHeaders(),
      Authorization: `Basic ${auth}`,
    },
  })
    .then((response) => {
      req.body.imageProfile = response.data.url;
      next();
    })
    .catch((error) => {
      next(error);
    });
};

module.exports = imageUpload
