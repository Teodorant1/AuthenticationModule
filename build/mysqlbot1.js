"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlbot = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
var name = "paloki";
class sqlbot {
    constructor() { }
    getusers() {
        // create the connection to database
        const connection = mysql2_1.default.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'sportstats'
        });
        // execute will internally call prepare and query
        connection.query('SELECT * FROM sportstats.accounts', function (err, results, fields) {
            //  console.log(results); // results contains rows returned by server
            //   console.log(JSON.parse(JSON.stringify(results))); // results contains rows returned by server
            var results1 = Object.values(JSON.parse(JSON.stringify(results)));
            console.log(results1);
            return results;
            //  var result1:any = result1.at(0);
            //  console.log(result1.username);
            //console.log(fields); // fields contains extra meta data about results, if available
            // If you execute same statement again, it will be picked from a LRU cache
            // which will save query preparation time and give better performance
        });
    }
    getusers1(username, password) {
        return "paloki";
    }
}
exports.sqlbot = sqlbot;
