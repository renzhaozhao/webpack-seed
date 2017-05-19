import React, { Component } from 'react'

class App extends Component {
  componentWillMount() {
    console.log('111')
  }
  render() {
    return (
      <div>
        <img src={require('../assets/avatar.png')} style={{ width: 100 }} />
        <img src={require('../assets/test.jpg')} />
      </div>
    )
  }
}

export default App