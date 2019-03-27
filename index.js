'use strict';

const inquirer = require('inquirer');
const questions = require('./utilities/questionObjectFiller');
const answers = require('./utilities/answersFinder');
inquirer
  .prompt({
    type: 'input',
    name: 'count',
    message: "How many locations would you like to enter(Please enter whole numbers only)?"
  })
  .then(counts => {
    for (let index = 0; index < Number(counts['count']); index++) {
      questions.createQuestionsObject(index).then(function (res) {
      });
    };
    inquirer.prompt(questions.questions).then(allAnswers => {
      answers.findLocationsWeatherAndTime(allAnswers).then(function (res) {
        console.log(res);
      }).catch(function (res) {
        console.log(res);
      })     
    });
  });