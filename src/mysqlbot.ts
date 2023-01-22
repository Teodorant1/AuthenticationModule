import { rejects } from 'assert';
import mysql from 'mysql2';
import { resolve } from 'path';
var name:string = "paloki";

export class sqlbot {
  constructor(){}
 public getusers(){

    // create the connection to database
const connection =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sportstats'
  });
  
  // execute will internally call prepare and query
  connection.query(
    'SELECT * FROM sportstats.accounts',
    function(err, results, fields) {
   //  console.log(results); // results contains rows returned by server
   //   console.log(JSON.parse(JSON.stringify(results))); // results contains rows returned by server
      var results1 = Object.values(JSON.parse(JSON.stringify(results)));

      console.log(results1);

      return results
    
    //  var result1:any = result1.at(0);
    //  console.log(result1.username);

    
      //console.log(fields); // fields contains extra meta data about results, if available
  
      // If you execute same statement again, it will be picked from a LRU cache
      // which will save query preparation time and give better performance

    }
  );

} 

prom_getusers() {
  return new Promise ((resolve,reject)=>{
    setTimeout(() => {
    return this.getusers();
    }, 2000);
  })
}

  async ass_getusers(){
  const users = await this.prom_getusers();
}

IsPresent  ( username:String , password:String ):boolean {

    
  
    return false;
}
}







