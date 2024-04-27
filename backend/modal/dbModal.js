const express = require("express");

const {Client}=require('pg');
let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID, POSTGRES_PORT,CONNECTIONSTRTING_URL } = process.env;

    const  client = new Client({
        user:PGUSER, password: PGPASSWORD, database: PGDATABASE,host:PGHOST,port:POSTGRES_PORT}) 
         client.connect()
         .then(console.log('database connected'))
         .catch(err=>console.log(err));
         client.on('error', (err) => console.log(err))



     
   
  
        // const pool = new Pool({connectionString:CONNECTIONSTRTING_URL,host:PGHOST,
        //     user:PGUSER, password: PGPASSWORD, database: PGDATABASE,port:POSTGRES_PORT}) 
        //      pool.connect(err=>{
        //         err ?  reject(err):console.log('connected');
        //      });
        //      pool.on('error', (err, client) => {
        //       console.error('Unexpected error in Postgress connection pool', err);
        //   });
          
    




   module.exports={client}
// async function sayHello() { 
   
    
//     const res = await client.query('SELECT * FROM playing_with_neon') 
//     console.log(res.rows[0].value) 
//     console.log(res.rows);
//     console.log('hello');
//     // 👋 Hello world. console.log(res.rows[1].message) // 👋 Hola, mundo. 
//     await client.end() 
// }
// sayHello();
  