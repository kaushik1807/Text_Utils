
import React, { Component } from 'react'
import '../bootstrap/bootstrap-4.6.1-dist/bootstrap-4.6.1-dist/css/bootstrap.min.css'
export default class demo extends Component {

  constructor() {
    super();
    this.state = {
      name: "darshan",
      count: 0
    }
  }

  shouldComponentUpdate(){
    return true;
  }
  componentDidUpdate = async (preState) => {
    console.log("this is update", preState.name)

    if (this.state.count < 10) {

      this.setState({ count: this.state.count + 1 })

    }
  }
  render() {
    this.setState({ name: "kaushik" })
    return (
      <div>
        <h1>this is demo page {this.state.name} {this.state.count}</h1>
        <button className='btn btn-primary mt-5 ml-5' onClick={() => { this.setState({ name: "kaushik" }) }}>click</button>
      </div>
    )
  }
}


