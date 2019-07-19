# React.js CI and Testing Template Repo
![CircleCI](https://img.shields.io/circleci/build/github/bradwindy/ci-test/master.svg?token=07ace020ab2b0a66ff1bc2e44d2c1d057feaec4a)
![Code Climate coverage](https://img.shields.io/codeclimate/coverage/bradwindy/ci-test.svg)
![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability-percentage/bradwindy/ci-test.svg)
![Code Climate issues](https://img.shields.io/codeclimate/issues/bradwindy/ci-test.svg)
![GitHub](https://img.shields.io/github/license/bradwindy/ci-test.svg?color=blue)
![GitHub last commit](https://img.shields.io/github/last-commit/bradwindy/ci-test.svg)

## About
This repo is a test project I created to learn how to implement aspects of continuous integration and testing, 
specifically with React. 

I have used circleci and a React circleci orb to implement code coverage, eslint checking and testing using Jest. 
The tests are in the file App.test.js. Currently there are not many, but I plan to write more in the future.

The project gets automatically checked after a push, then if all checks and tests pass, the project is built and 
deployed to Heroku. 

In the .idea folder there are configurations regarding ESlint for WebStorm too.

If you like this project, check out my website to read more about me.

This code is licensed under GPL-3.0. It's open source!

Feel free to contact me, or open any issues or pull requests.

## Built With

* [CircleCI](https://circleci.com/) - Used for continuous integration
* [Code Climate](https://codeclimate.com) - Used for coverage and coverage badges
* [Bootstrap](https://getbootstrap.com/) - Used styling and layout
* [Jest](https://jestjs.io/) - Used for testing
* [React CircleCI Orb](https://circleci.com/orbs/registry/orb/thefrontside/react) - Orb used with circleCI

## Author

* **Bradley Windybank** - *All work* 

## Acknowledgments

* Zac Kwan for writing [this tutorial](https://zaccc123.github.io/blog/2018/how-to-set-up-ci-cd-react/) which helped a lot :)
