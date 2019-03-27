'use strict';
const request = require("request");

function makeGetRequestToWeatherAPI(params, callback) {
    var options =
    {
        method: 'GET',
        url: 'http://api.apixu.com/v1/current.json',
        qs: params,
    };
    request(options, function (error, response, body) {
        if (error) {
            callback(new Error(error), null);
        } else {
            callback(null, body);
        }
    });
}

module.exports = {
    makeGetRequestToWeatherAPI: makeGetRequestToWeatherAPI
};
