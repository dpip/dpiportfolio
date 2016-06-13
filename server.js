var express = require('express');
var nodemailer = require("nodemailer");
var app = express();
var smtpTransport = require("nodemailer-smtp-transport")
/*
    Here we are configuring our SMTP Server details.
    STMP is mail server which is responsible for sending and recieving email.
*/

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    next();
});

var smtpTransport = nodemailer.createTransport(smtpTransport({
    host : "Gmail.com",
    secureConnection : false,
    port: 587,
    auth : {
        user : "dpip.nc@gmail.com",
        pass : "Adventum1"
    }
  }));
/*------------------SMTP Over-----------------------------*/

/*------------------Routing Started ------------------------*/


app.get('/send',function(req,res){
    var mailOptions={
        to : req.query.to,
        subject : req.query.subject,
        text : req.query.text
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
        res.end("error");
     }else{
            console.log("Message sent: " + response.message);
        res.end("sent");
         }
});
});

/*--------------------Routing Over----------------------------*/

app.listen(3002,function(){
    console.log("Express Started on Port 3002");
});
