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

    if (req !== undefined &&
        req.body !== undefined &&
        req.body.name !== undefined &&
        req.body.email !== undefined &&
        req.body.content !== undefined
    ) {

        var mailOptions = {};

        mailOptions.from = req.body.name + "<" + req.body.email + ">";
        mailOptions.to = "sebastien.romain@gmail.com";
        mailOptions.subject = "Contact SRO Website";
        mailOptions.text = 'Message from : ' + req.body.name + " ( " + req.body.email + " ). \n\n " + req.body.content;

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                res.send(500);
            } else {
                res.send(200);
            }
        });

    }
    else {
        res.send(500);
    }

});

app.listen(port);
console.log('Magic happens on port ' + port);        // shoutout to the user
exports = module.exports = app;                   // expose app