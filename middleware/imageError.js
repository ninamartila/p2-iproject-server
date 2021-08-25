const imageError = function (req, res, next) {
    if (req.file) {
        const nameImage = req.file.originalname
        const nameOriginImage = nameImage.split('.')
        const sizeImage = req.file.size
        const extensionImage = nameOriginImage[nameOriginImage.length - 1];

        if (extensionImage === 'png' || extensionImage === 'jpg' || extensionImage === 'jpng') {
            if (sizeImage <= 255000) {
                req.image = {
                    file: req.file.buffer.toString("base64"),
                    filename: nameImage,
                };
                next();
            } else {
                next({
                    name: "ImageInvalid",
                    message: "size image 255 kB",
                });
            }
        } else {
            next({
                name: "ImageInvalid",
                message: "image have png, jpg or jpng",
            });
        }
    } else {
        next({
            name: "ImageInvalid",
            message: "Image Not Found",
        });
    }
};

module.exports = imageError