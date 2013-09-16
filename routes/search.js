var settings = require("./settings");
var request = require('request');
var sendgrid  = require('sendgrid')(settings.sendGridUsername,settings.sendGridPassword);

exports.index = function (req, res) {

    var url =
        'https://www.googleapis.com/customsearch/v1?key=' + settings.googleApiKey +
        '&cx=' + settings.googleCustomSearchKey +
        '&q=' + encodeURIComponent(settings.message) +
        '&alt=json';

    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            if (parseInt(JSON.parse(body).searchInformation.totalResults) == 0) {
                sendgrid.send({
                    to: 'christopherfoster@hotmail.co.uk',
                    from: 'christopherfoster@hotmail.co.uk',
                    subject: 'Google is now crawling JavaScript!',
                    text: 'Google is now crawling JavaScript!'
                });
            }
        }
    });

    res.send("");
};

