const mysql = require("mysql2");
const chalk = require("chalk");
const util = require("util");
const { dbConfig } = require("../../config/index");
const connection = mysql.createConnection(dbConfig);

class MySqlServerLib {
  constructor() {}

  executeSqlAsync = async (sql) => {
    console.log(chalk.yellow("\nsql:\n", sql));
    //console.log("dbConfig: ", dbConfig);

    try {
      // node native promisify
      const query = util.promisify(connection.query).bind(connection);

      const resultSet = await query(sql);
      console.log(chalk.blueBright("DB resultSet: "), resultSet);
      return resultSet;

    } catch (err) {
      console.error(`Error: ${err}`);
      throw new Error(err);
      
    } finally {
      //connection.end();
    }
  };
}

module.exports = MySqlServerLib;
