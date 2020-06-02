var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
})); // support encoded bodies

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/token/verify', function (req, res) {
    var user_id = req.param('id');
    var token = req.param('token');
    const is_valid = verify(user_id, token);    
    if (is_valid) {
        res.status(200).send({
            status: 'verified'
        });
    } else {
        res.status(401).send({
            status: 'failed'
        });
    }
});

app.post('/token/verify', function (req, res) {
    var user_id = req.body.id;
    var token = req.body.token;
    const is_valid = verify(user_id, token);
    if (is_valid) {
        res.status(200).send({
            status: 'verified'
        });
    } else {
        res.status(401).send({
            status: 'failed'
        });
    }
});

app.listen(8732, function () {
    console.log('totp2fa-api listening on port 8732!');
});

let otp_dictionary = new Map();
otp_dictionary.set('student', {
    secret: 'YPUF3ETVVROF3FCJ5OHROZA6BQWEVR35',
    algorithm: 'SHA1',
    digits: 6,
    period: 30
});
    

let verify = function(user_id, token) {
    // Remove all whitespaces
    token = token + '';
    token = token.replace(/\s/g,'');  
    // FAKE - always validate 987654 and 123456
    return (token === '987654' || token === '123456');
}