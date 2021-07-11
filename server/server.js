const express = require("express");
const bodyParser = require("body-parser");
const chalk = require('chalk');
const app = express();
const morgan = require('morgan');
//////////////////////////////////////////////////////////////////////////////
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
// parse application/json
app.use(bodyParser.json());
chalk.level = 3;
//////////////////////////////////////////////////////////////////////////////
const { config } = require("./config/index");
const routes = require('./routes/routes');
//////////////////////////////////////////////////////////////////////////////
app.use((req, res, next) => {
    let allowedOrigins = [''];

    let origin = req.headers.origin;

    //console.log(`origin: ${origin}`);

    //if (allowedOrigins.includes(origin)) {
        res.header("Access-Control-Allow-Origin", origin); // restrict it to the required domain
    //}

    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, token"
    );
    res.header("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT");

    next();
});
//////////////////////////////////////////////////////////////////////////////
routes(app);
//////////////////////////////////////////////////////////////////////////////
app.listen(config.port, () => {
    console.log(chalk.greenBright(`Escuchando por el puerto http://localhost:${config.port}/`));
});

module.exports = { app };