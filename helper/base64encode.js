function base64_encode(bitmap) {
    // read binary data
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}

module.exports = base64_encode