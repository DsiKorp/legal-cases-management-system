const express = require("express");

const DbServices = require("../services/dbServices");

const { verifyApiKey } = require("../util/middleware/autenticacion"); // Destructuración

const validationHandler = require("../util/middleware/validationHandler");

const cacheResponse = require("../util/cacheResponse");
const {
    FIVE_MINUTES_IN_SECONDS,
    THIRTY_MINUTES_IN_SECONDS,
} = require("../util/time");
const chalk = require("chalk");

const legalApi = (app) => {
    const router = express.Router();
    app.use("/legal/api", router);

    const dbServices = new DbServices();

    router.post(
        "/sumActiveLegalCases",
        verifyApiKey,
        async function (req, res, next) {
            console.log('____________________________________________________________________');
            cacheResponse(res, THIRTY_MINUTES_IN_SECONDS);
            const { body: request } = req;

            try {
                console.log(chalk.bgGreenBright(chalk.blue('request :>> ')), request);
                let response = await dbServices.sumActiveLegalCases();

                return res.status(200).json({
                    response
                });


            } catch (err) {
                console.log('err :>> ', err);
                next(err);
            }
        }
    );

    router.post(
        "/avgRioCompanyA",
        verifyApiKey,
        async function (req, res, next) {
            console.log('____________________________________________________________________');
            cacheResponse(res, THIRTY_MINUTES_IN_SECONDS);
            const { body: request } = req;

            try {
                console.log(chalk.bgGreenBright(chalk.blue('request :>> ')), request);
                let response = await dbServices.avgRioCompanyA();

                return res.status(200).json({
                    response
                });


            } catch (err) {
                console.log('err :>> ', err);
                next(err);
            }
        }
    );

    router.post(
        "/numCasesGreater100k",
        verifyApiKey,
        async function (req, res, next) {
            console.log('____________________________________________________________________');
            cacheResponse(res, THIRTY_MINUTES_IN_SECONDS);
            const { body: request } = req;

            try {
                console.log(chalk.bgGreenBright(chalk.blue('request :>> ')), request);
                let response = await dbServices.numCasesGreater100k();

                return res.status(200).json({
                    response
                });


            } catch (err) {
                console.log('err :>> ', err);
                next(err);
            }
        }
    );

    router.post(
        "/getListSept2007",
        verifyApiKey,
        async function (req, res, next) {
            console.log('____________________________________________________________________');
            cacheResponse(res, THIRTY_MINUTES_IN_SECONDS);
            const { body: request } = req;

            try {
                console.log(chalk.bgGreenBright(chalk.blue('request :>> ')), request);
                let response = await dbServices.getListSept2007();

                return res.status(200).json({
                    response
                });


            } catch (err) {
                console.log('err :>> ', err);
                next(err);
            }
        }
    );

    router.post(
        "/getListSameDepartament",
        verifyApiKey,
        async function (req, res, next) {
            console.log('____________________________________________________________________');
            cacheResponse(res, THIRTY_MINUTES_IN_SECONDS);
            const { body: request } = req;

            try {
                console.log(chalk.bgGreenBright(chalk.blue('request :>> ')), request);
                let response = await dbServices.getListSameDepartament();

                return res.status(200).json({
                    response
                });


            } catch (err) {
                console.log('err :>> ', err);
                next(err);
            }
        }
    );

    router.post(
        "/getListAcronymTrab",
        verifyApiKey,
        async function (req, res, next) {
            console.log('____________________________________________________________________');
            cacheResponse(res, THIRTY_MINUTES_IN_SECONDS);
            const { body: request } = req;

            try {
                console.log(chalk.bgGreenBright(chalk.blue('request :>> ')), request);
                let response = await dbServices.getListAcronymTrab();

                return res.status(200).json({
                    response
                });


            } catch (err) {
                console.log('err :>> ', err);
                next(err);
            }
        }
    );

};

module.exports = legalApi;