const express = require("express");
const routes = express.Router();
const userInfo=require('../modal/userInfo')
const asd={
    "transitional": {
        "silentJSONParsing": true,
        "forcedJSONParsing": true,
        "clarifyTimeoutError": false
    },
    "adapter": [
        "xhr",
        "http"
    ],
    "transformRequest": [
        null
    ],
    "transformResponse": [
        null
    ],
    "timeout": 0,
    "xsrfCookieName": "XSRF-TOKEN",
    "xsrfHeaderName": "X-XSRF-TOKEN",
    "maxContentLength": -1,
    "maxBodyLength": -1,
    "env": {},
    "headers": {
        "Accept": "application/json, text/plain, */*"
    },
    "method": "get",
    "url": "http://localhost:3000/"
}

// index.js



// performScraping()


// routes.get('/',userInfo.sayHello)

routes.get('/',(req,res)=>{
    res.send(asd)
})

routes.post('/createuser', userInfo.createUser)


module.exports = routes;