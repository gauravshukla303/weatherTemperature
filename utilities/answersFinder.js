'use strict';
const requester = require('./requester');
const constants = require('./constants');

function findLocationsWeatherAndTime(givenLocations) {
    return new Promise(function (resolve, reject) {
        let PromiseArray = [];       
        for (let index = 0; index < Object.keys(givenLocations).length; index++) {
            let promiseObject = {
                key: constants.APIKEY,
                q: givenLocations[`location${index}`]
            };
            let P = new Promise(function (resolve, reject) {
                requester.makeGetRequestToWeatherAPI(promiseObject, function (err, response) {
                    if (response) {
                        resolve(JSON.parse(response));
                    } else {
                        reject(err);
                    }
                });
            });
            PromiseArray.push(P);
        }
       
        Promise.all(PromiseArray).then(values => {
            resolve(values);
        }).catch(res => {
            reject(res);
        })
    });
}

module.exports = {
    findLocationsWeatherAndTime: findLocationsWeatherAndTime
}