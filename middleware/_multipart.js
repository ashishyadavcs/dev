const formidable = require("formidable");
const parse = async req => {
    return await new Promise(function (resolve, reject) {
        const form = new formidable.IncomingForm({
            multiples: true,
            keepExtensions: true,
            uploadDir: process.env.UPLOAD_DIR,
        });
        form.parse(req, function (err, fields, files) {
            if (err) return reject(err);
            resolve({ fields, files });
        });
    });
};
const _multipart = handler => async (req, res) => {
    const { fields, files } = await parse(req);
    req.files = files;
    req.body = fields;
    return handler(req, res);
};

export default _multipart;
