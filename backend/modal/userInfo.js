const express = require("express");
const db=require('./dbModal')

async function createUser(req,res) { 
    let {firstName,lastName,password,email}= req.body
    console.log(req.body,'firstname');
    console.log(req.body.firstName);
    console.log(req.body);
   if( (firstName && lastName && password && email)){
     
    await db.client.query(`INSERT INTO userdata
    (firstname, lastname,password,email,created_at) VALUES 
    ('${firstName}','${lastName}','${password}','${email}',current_timestamp)`).then((res) => {
       console.log(res);
    }).catch((err) => {
       console.log(err);
    });
   }else{
     let resError='request is emty'
     console.log('request is emty');
   }
   
  } 
  
//create tabel
// async function createTable(){
//     await db.client.query(`CREATE TABLE Product( 
//     session_id UUID DEFAULT gen_random_uuid(),
//     ProductId SERIAL PRIMARY KEY,
//     ProductPrice varchar(300) NOT NULL,
//     ProductDescription varchar(300) NOT NULL, 
//     ProductType varchar(300) NOT NULL,
//     CreatedAt TIMESTAMP)`).then(res=>console.log(res)).catch(err=>console.log(err))

//     await db.client.query(`CREATE TABLE AccountInfo (
//     session_id UUID DEFAULT gen_random_uuid(),
//      accountId SERIAL PRIMARY KEY,
//      accountName varchar(300) NOT NULL,
//      accountNumber varchar(300) NOT NULL,
//      accountDescription varchar(300) NOT NULL,
//      amount INT NOT NULL,
//      transactionDate TIMESTAMP)`).then(res=>console.log(res)).catch(err=>console.log(err))
// }
// createTable();

//alter tabel
// async function alterTable(){
//     await db.client.query(`alter table userdata add column created_at timestamp without time zone;`).
//     then(res=>console.log(res)).catch(err=>console.log(err))

// }
// alterTable();

//alter column type

// async function alterColumn(){
//     await db.client.query(`alter table userdata add column created_at1 timestamp with time zone CURRENT_DATE;`).
//         then(res=>console.log(res)).catch(err=>console.log(err))
// }
// alterColumn();
   module.exports={createUser};


   {
      "language": "Türkçe",
      "screens": {
          "intro": {
              "title": "Başlık",
              "text": {
                  "introText": "Bu Türkçe metin",
                  "login": "Giriş",
                  "signup": "Kayıt"
              }
          },
          "login": {
              "title": "Giriş",
              "text": {
                  "login": "Giriş Yap",
                  "emailAddress": "E-mail Adresi",
                  "password": "Şifre",
                  "continue": "Devam",
                  "createAccount": "Hesap Oluştur",
                  "forgotPassword": "Şifremi Unuttum"
              }
          }
      }
  }

  /////





////

{
   "language": "French",
   "screens": {
       "intro": {
           "title": "Écran d'introduction",
           "text": {
               "introText": "voici le texte d'introduction en français",
               "login": "Connexion",
               "signup": "S'inscrire"
           }
       },
       "login": {
           "title": "S'identifier",
           "text": {
               "login": "connexion",
               "emailAddress": "Adresse e-mail",
               "password": "mot de passe",
               "continue": "Continuer",
               "createAccount": "Créer un compte",
               "forgotPassword": "Mot de passe oublié?"
           }
       }
   }
}

///

{
   "language": "English",
   "screens": {
       "intro": {
           "title": "Intro Screen",
           "text": {
               "introText": "This is the intro text in english",
               "login": "Login",
               "signup": "Sign Up"
           }
       },
       "login": {
           "title": "Sign in",
           "text": {
               "login": "login",
               "emailAddress": "Email address",
               "password": "password",
               "continue": "Continue",
               "createAccount": "Create an Account",
               "forgotPassword": "Forgotten password?"
           }
       }
   }
   
}



