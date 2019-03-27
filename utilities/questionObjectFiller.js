
'use strict'
let questions = [];
let question = {};

function createQuestionsObject(questionNumber) {
    return new Promise(function (resolve, reject) {
        fillLocationOrPostalCode(questionNumber).then(function (res) {

            resolve(questions);
        }).catch(function (res) {
            console.log(`Error Occurred - ${res}`);
        })
    });
}
function fillLocationOrPostalCode(questionNumber) {
    return new Promise(function (resolve, reject) {
        question = {};
        question = {
            type: 'input',
            name: `location${questionNumber}`,
            message: `Enter the Location's city name or US Zipcode, UK Postcode,
             Canada Postalcode, IP address, Latitude/Longitude (decimal degree)`,
        };
        questions.push(question);
        resolve();
    });

}

module.exports = {
    createQuestionsObject: createQuestionsObject,
    questions: questions
};