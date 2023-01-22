"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    prom_getusers() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                return this.getusers();
            }, 2000);
        });
    }
    ass_getusers() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.prom_getusers();
        });
    }
    IsPresent(username, password) {
        return false;
    }
}
exports.sqlbot = sqlbot;
