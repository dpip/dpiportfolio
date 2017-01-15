var express = require('express');
var nodemailer = require("nodemailer");
var app = express();
var smtpTransport = require("nodemailer-smtp-transport")
var xoauth2 = require('xoauth2');


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
});

// previous port was 587 smtp recommends 25

var smtpTransport = nodemailer.createTransport(smtpTransport({
    // it was gmail.com
    service : "gmail",
    debug: true,
    secureConnection : false,
    port: 465,
    auth : {

      xoauth2: xoauth2.createXOAuth2Generator({
          user: '{dpip.nc@gmail.com}',
          clientId: '{27346581782-tt3epvobecbjongepbv3nuado6nck3cm.apps.googleusercontent.com}',
          clientSecret: '{PdpAP2Nv_Q1bTB3LCNcW4WkT}',
          refreshToken: '{1/mBIUZSgrmmA9Vck8GEbG5CfwAxlqfrfTCJMBg5e8a3k}',
          accessToken: '{ya29.Ci8ZAzboelhv60jsE2iNX0UrDmDVT639xN939zoN85EsZOrPT9Ld-psYF1l8b2dBcg}'
      })

    }
  }));

/*------------------SMTP Over-----------------------------*/

/*------------------Routing Started ------------------------*/


app.get('/send',function(req,res){
    var mailOptions={
        from : req.query.name + req.query.email,
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
