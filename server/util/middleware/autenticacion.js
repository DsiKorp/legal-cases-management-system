const { config } = require("../../config/index");

////////////////////////////////////////
// Verify Api Key or Initial Token
// = module.exports.verifyApiKey = (req, res, next) => {
////////////////////////////////////////
let verifyApiKey = (req, res, next) => {
    let apiKey =
        req.get("apiKey") ||
        req.body.apiKey ||
        req.query.apiKey ||
        req.headers["apiKey"]; // Authorization

    if (apiKey === config.apiKey) {
        next();
    } else {
        return res.status(401).json({
            ok: false,
            errMsj: {
                message: "Api Key not Valid!!!",
            },
        });
    }
};


module.exports = {
    verifyApiKey,
};