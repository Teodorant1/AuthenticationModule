"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mysqlbot1_1 = require("./mysqlbot1");
// let sqlbot0 = new sqlbot1;
// sqlbot0.isOne("2");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", async (req, res) => {
    try {
        let sqlbot = new mysqlbot1_1.sqlbot1;
        let result = await sqlbot.isPresent(req.body.username, req.body.password);
        console.log(typeof result);
        // res.write(result); 
        let resultboolean = await sqlbot.isOne(result.toString());
        console.log(resultboolean);
        Promise.resolve(res.json(resultboolean));
        //res.end()
    }
    catch (e) {
        return (e);
    }
});
app.listen(8001, () => console.log("Server Started"));
