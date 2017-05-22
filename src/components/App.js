import React, { Component } from 'react'

class App extends Component {

  state = {
    number: 1
  }

  componentWillMount() {
    console.log('111')
  }

  add = () => {
    this.setState(prevState => ({
      number: prevState.number + 1
    }))
  }

  render() {
    return (
      <div>
        <img src={require('../assets/avatar.png')} style={{ width: 100 }} alt="" />
        <img src={require('../assets/test.jpg')} alt="" />
        {this.state.number}
        <button onClick={this.add}>++</button>
      </div>
    )
  }
}

export default App
