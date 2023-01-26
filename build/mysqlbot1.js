"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlbot1 = void 0;
class sqlbot1 {
    constructor() { }
    async isPresent(username, password) {
        // get the client
        const mysql = require('mysql2/promise');
        // get the promise implementation, we will use bluebird
        const bluebird = require('bluebird');
        // create the connection, specify bluebird as Promise
        const connection = await mysql.createConnection({ host: 'localhost', user: 'root', password: 'root', database: 'sportstats', Promise: bluebird });
        // query database
        const [rows, fields] = await connection.execute('SELECT * FROM `accounts` WHERE `username` = ? AND `password` = ?', [username, password]);
        console.log(rows.length);
        return (rows.length);
    }
    async isOne(number) {
        console.log(number === "1");
        return (number === "1");
    }
}
exports.sqlbot1 = sqlbot1;
