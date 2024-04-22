const express = require("express");
const {Pool, Client}=require('pg');
let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID, POSTGRES_PORT,CONNECTIONSTRTING_URL } = process.env;
const client = new Client({connectionString:CONNECTIONSTRTING_URL,
    user:PGUSER, password: PGPASSWORD, database: PGDATABASE,port:POSTGRES_PORT}) 
     client.connect() ;
// async function sayHello() { 
   
    
//     const res = await client.query('SELECT * FROM playing_with_neon') 
//     console.log(res.rows[0].value) 
//     console.log(res.rows);
//     console.log('hello');
//     // 👋 Hello world. console.log(res.rows[1].message) // 👋 Hola, mundo. 
//     await client.end() 
// }
// sayHello();
  module.exports=client;