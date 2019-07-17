import React from 'react'
import App from '../App'
import ReactDOM from 'react-dom'
import { create } from 'react-test-renderer'

describe('App Button Match', () => {
  test('Testing app button', () => {
    const tree = create(<App/>)
    expect(tree.toJSON()).toMatchSnapshot()
  })
})

describe('Render Test', () => {
  it('Render without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App/>, div)
  })
})
