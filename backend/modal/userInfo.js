const express = require("express");
const db=require('./dbModal')

async function sayHello(req,res) { 
   
    const data = await db.client.query('SELECT * FROM playing_with_neon')
    console.log(data.rows[0].value) 
    console.log(data.rows);
    res.json(data.rows)
    console.log('hello');
    // 👋 Hello world. console.log(res.rows[1].message) // 👋 Hola, mundo. 
  } 


async function createTable(){
    await db.client
    .query(`CREATE TABLE userData
    ( session_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    id int ,
     firstname varchar(300) NOT NULL,
      lastname varchar(300) NOT NULL, 
      password varchar(300) NOT NULL,
       email varchar(300) NOT NULL )`)
}
createTable();
  module.exports={sayHello};