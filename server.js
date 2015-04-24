// modules =================================================
var express = require('express');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var app = express();

// configuration ===========================================
var port = 8081; // set our port
app.use(express.static(__dirname));    // set the static files location /public/img will be /img for users
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

var mailconf = require("./serv-conf.js");

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport(mailconf);


// routes ==================================================
//require('./app/routes')(app); // pass our application into our routes

app.use("/js", express.static(__dirname + "/app/js"));
app.use("/dist", express.static(__dirname + "/dist"));
app.use("/img", express.static(__dirname + "/app/img"));
app.use("/css", express.static(__dirname + "/app/css"));
app.use("/data", express.static(__dirname + "/app/data"));
app.use("/partials", express.static(__dirname + "/app/partials"));

app.get('/*', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.post("/contact", function (req, res) {

//    console.log(req.body);
// setup e-mail data with unicode symbols
    var mailOptions = {
        from: 'Fred Foo ✔ <foo@blurdybloop.com>', // sender address
        to: 'sebastien.romain@gmail.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world ✔', // plaintext body
        html: '<b>Hello world ✔</b>' // html body
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.send(500);
        } else {
            console.log('Message sent: ' + info.response);
            res.send(200);
        }
    });


});

app.listen(port);
console.log('Magic happens on port ' + port);        // shoutout to the user
exports = module.exports = app;                   // expose app