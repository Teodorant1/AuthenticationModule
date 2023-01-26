"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlbot = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
let resultset = [];
class sqlbot {
    constructor() { }
    async ass_getusers() {
        const users = await this.prom_getusers();
        const usersarray = Object.values(users);
        console.log(users);
        console.log(usersarray);
        return usersarray;
    }
    getusers() {
        const connection = mysql2_1.default.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'sportstats'
        });
        let res = [];
        connection.query('SELECT * FROM sportstats.accounts', function (err, results, fields) {
            let results1 = Object.values(JSON.parse(JSON.stringify(results)));
            // var resultsarray:any[] = Object.values(results1);
            console.log("results1.length be like");
            console.log(results1.length);
            //console.log(results1)
            res = resultset.concat(results1);
            //  console.log(res);
            //return results1;
            return res;
        });
        return res;
    }
    prom_getusers() {
        return new Promise((resolve, reject) => {
            resolve(this.getusers());
        });
    }
    async filter_array(username, password, array) {
        const filtered_accounts = array.filter(function (el) {
            return (el.username === username && el.password === password);
        });
        return filtered_accounts;
    }
    main_full_chain(username, password) {
        new Promise(async (resolve, reject) => {
            let paloki = await this.ass_getusers();
            console.log(paloki);
            resolve(paloki);
        }).then((result) => { console.log(result); });
        // .then( (result:any) =>{ console.log(result);  return this.filter_array(username , password , result) }   )
        // .then( (result1) =>{  console.log(result1); return result1.length }   )
    }
    ;
    async ass_IsPresent(username, password) {
        console.log("filtered_accounts1");
        const accounts = await this.ass_getusers();
        console.log(accounts);
        // console.log("filtered_accounts1.5");
        const filtered_accounts = await this.filter_array(username, password, resultset);
        console.log(resultset);
        console.log("filtered_accounts2");
        console.log(filtered_accounts.length);
        if (filtered_accounts.length === 1) {
            console.log("true");
            return true;
        }
        console.log("false");
        return false;
    }
    async CheckSize(array) { }
}
exports.sqlbot = sqlbot;
