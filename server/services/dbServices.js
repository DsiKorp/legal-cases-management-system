const MySqlServerLib = require('../util/db/db');
const dateUtils = require("../util/dateUtils");

class DbServices {
    constructor() {
        this.mySqlServerLib = new MySqlServerLib();
    }

    async sumActiveLegalCases() {
        let sql = ``;
        sql += `SELECT SUM(totalAmount) AS sumActive`;
        sql += `  FROM legalCase `;
        sql += ` WHERE state = 'active' `;

        const resultSet = await this.mySqlServerLib.executeSqlAsync(sql);
        return resultSet[0];
    }

    async avgRioCompanyA() {
        let sql = ``;
        sql += `SELECT ROUND(AVG(totalAmount), 2) AS avgRioCompanyA `;
        sql += `  FROM legalCase `;
        sql += ` WHERE idClient = (SELECT id FROM client WHERE name = 'Company A') `;
        sql += `   AND departament = 'Rio de Janeiro' `;

        const resultSet = await this.mySqlServerLib.executeSqlAsync(sql);
        return resultSet[0];
    }

    async numCasesGreater100k() {
        let sql = ``;
        sql += `SELECT COUNT(*) AS numberCases `;
        sql += `  FROM legalCase `;
        sql += ` WHERE totalAmount > 100000`;

        const resultSet = await this.mySqlServerLib.executeSqlAsync(sql);
        return resultSet[0];
    }

    async getListSept2007() {
        let sql = ``;
        sql += `SELECT number `;
        sql += `  FROM legalCase `;
        sql += ` WHERE startedDate BETWEEN '2007-09-01' AND '2007-09-30'`;

        const resultSet = await this.mySqlServerLib.executeSqlAsync(sql);
        return resultSet;
    }

    async getListSameDepartament() {
        let sql = ``;
        sql += `SELECT client.name, legalCase.number `;
        sql += `  FROM client, legalCase `;
        sql += ` WHERE client.id = legalCase.idClient `;
        sql += `   AND legalCase.departament = client.departament `;
        sql += ` ORDER BY client.name `;

        const resultSet = await this.mySqlServerLib.executeSqlAsync(sql);
        return resultSet;
    }

    async getListAcronymTrab() {
        let sql = ``;
        sql += `SELECT number `;
        sql += `  FROM legalCase `;
        sql += ` WHERE number LIKE '%TRAB%' `;

        const resultSet = await this.mySqlServerLib.executeSqlAsync(sql);
        return resultSet;
    }


}

module.exports = DbServices;