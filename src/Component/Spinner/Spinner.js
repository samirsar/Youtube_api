import React, { Component } from 'react'
import loading from './gif/spinner.gif'

export class Spinner extends Component {
  render() {
    return (
      <div>
        <img style={{width: "172px",
    height: "81px"}} src={loading} alt="loading" />
      </div>
    )
  }
}

export default Spinner
