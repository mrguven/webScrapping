const express = require("express");
const db=require('./dbModal.js')

async function sayHello(req,res) { 
   
    const data = await db.query('SELECT * FROM playing_with_neon')
    console.log(data.rows[0].value) 
    console.log(data.rows);
    res.json(data.rows)
    console.log('hello');
    // 👋 Hello world. console.log(res.rows[1].message) // 👋 Hola, mundo. 
    
  } 




  module.exports={sayHello};