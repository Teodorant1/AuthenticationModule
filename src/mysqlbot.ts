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
   // console.log(results); // results contains rows returned by server
   //   console.log(JSON.parse(JSON.stringify(results))); // results contains rows returned by server
      var results1 = Object.values(JSON.parse(JSON.stringify(results)));

     // console.log(results1);

      return results1
    
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
    }, 1000);
  })
}

  async ass_getusers(){
  const users = await this.prom_getusers();
}

filter_array(  username:String , password:String , array: any )
{
  var filtered_accounts = Object.values(array).filter(function (el:any) {
    return el.Name == username && el.password == password ;
  })
return filtered_accounts;
}

prom_filter_array(username:String , password:String , array: any) {
  return new Promise ((resolve,reject)=>{
    setTimeout(() => {
    return this.filter_array( username , password , array );
    }, 1000);
  })
}

async ass_filter_array(username:String , password:String , array: () => Promise<void>) {
const final_array = await this.prom_filter_array(username , password , array); 
return final_array;
}
   


   async ass_IsPresent  ( username:String , password:String ) {
    console.log("filtered_accounts1");

    const accounts = await this.prom_getusers();
  
    console.log("filtered_accounts1.5");


    const filtered_accounts = await this.prom_filter_array(username , password , accounts);

    console.log("filtered_accounts2");
        console.log(filtered_accounts);



    if ( filtered_accounts instanceof Array ){
      console.log("filtered_accounts array");

      console.log(filtered_accounts);

      if (filtered_accounts.length === 1) { console.log("true");  return true  }
    }
    console.log("false"); 
    
    return false;
}
}







