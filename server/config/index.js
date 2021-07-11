require("dotenv").config();

const config = {
    dev: process.env.NODE_ENV !== "production",
    port: process.env.PORT || 3000,
    seed: process.env.SEED,
    apiKey: process.env.API_KEY
};

const dbConfig = {
    connectionLimit : 10,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    //port: parseInt(process.env.DB_PORT, 10),
    // insecureAuth : true,
    //parseJSON: true,
};

module.exports = { config, dbConfig };