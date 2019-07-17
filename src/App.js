import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faInfoCircle, faLaugh, faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const linkStyle = {
  color: 'white',
  textDecoration: 'underline'
}

class App extends Component {
  render () {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <h5 className="font-weight-bold m-0 p-2 text-white"><FontAwesomeIcon color="darkturquoise"
            icon={faSyncAlt}/> &nbsp; Continuous
            Integration and Testing Example App</h5>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col">
            </div>

            <div className="col-xl-8 p-5 no-gutters m-0">
              <div className="card border-light text-white mb-3 bg-transparent">
                <div className="card-body">
                  <h3 className="card-title font-weight-bold"><FontAwesomeIcon color="bisque" icon={faLaugh}/> Hi!</h3>
                  <p className="card-text">This repo is a test project I created to learn how to implement aspects of
                    continuous integration and testing, specifically with React. <br/><br/> I have used circleci and a
                    React circleci orb to implement code coverage, eslint checking and testing using Jest. The tests are
                    in the file App.test.js. Currently there are not many, but I plan to write more in the future.
                  <br/><br/>The project gets automatically checked after a push, then if all checks and tests pass,
                    the project is built and deployed to Heroku. <br/><br/> If you like this, check out <a
                    style={linkStyle} href="https://bradleywindybank.herokuapp.com">My Website</a> to read more about
                    me.
                  <br/><br/> This code is licensed under GPL-3.0. <b>It&apos;s open source!</b>
                  </p>
                  <a className="btn btn-outline-light float-left font-weight-bold mr-2 mt-2"
                    href="https://circleci.com/"><FontAwesomeIcon color="steelblue" icon={faSyncAlt}/> Circle CI
                  </a>
                  <a className="btn btn-outline-light float-left font-weight-bold mr-2 mt-2"
                    href="https://circleci.com/orbs/registry/orb/thefrontside/react"><FontAwesomeIcon
                      color="darkturquoise" icon={['fab', 'react']}/> React Orb
                  </a>
                  <a className="btn btn-outline-light float-left font-weight-bold mr-2 mt-2"
                    href="https://zaccc123.github.io/blog/2018/how-to-set-up-ci-cd-react/"><FontAwesomeIcon
                      color="indianred" icon={faInfoCircle}/> CI Guide
                  </a>
                  <a className="btn btn-outline-light float-left font-weight-bold mr-2 mt-2"
                    href="https://codeclimate.com/quality/pricing/"><FontAwesomeIcon color="mediumseagreen"
                      icon={faCloud}/> Code Climate
                  </a>
                </div>
              </div>
            </div>

            <div className="col">
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
