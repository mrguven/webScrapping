const express = require("express");
const db=require('./dbModal')

// async function sayHello(req,res) { 
   
//      await db.client.query(`ALTER TABLE userData
//         RENAME COLUMN "lastname" TO "lastName"`).then((res) => {
//         console.log(res);
//      }).catch((err) => {
//         console.log(err);
//      });
//     // console.log(data.rows[0].value) 
//     // console.log(data.rows);
//     // res.json(data.rows)
//     console.log('hello');
//     // 👋 Hello world. console.log(res.rows[1].message) // 👋 Hola, mundo. 
    
//   } 
//   sayHello();
// create tabel
// async function createTable(){
//     await db.client
//     .query(`CREATE TABLE userData( 
//     session_id UUID DEFAULT gen_random_uuid(),
//     userId SERIAL PRIMARY KEY,
//     firstname varchar(300) NOT NULL,
//     lastname varchar(300) NOT NULL, 
//     password varchar(300) NOT NULL,
//     email varchar(300) NOT NULL)`)
// }
// createTable();
//   module.exports={sayHello};