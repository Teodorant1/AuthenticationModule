import express from "express";
import { sqlbot1 } from "./mysqlbot1";

// let sqlbot0 = new sqlbot1;
// sqlbot0.isOne("2");

const app = express();
app.use(express.json())
app.get("/",async (req , res)=>{

 try {  let sqlbot = new sqlbot1;
  let result = await sqlbot.isPresent((req.body as userDTO).username,(req.body as userDTO).password)

   console.log( typeof result)

 // res.write(result); 
 let resultboolean:boolean = await sqlbot.isOne(result.toString());
  console.log(resultboolean);
  
  Promise.resolve(res.json(resultboolean));


 //res.end()

} catch (e) {return (e)}

})

app.listen(8001, ()=>console.log("Server Started"));