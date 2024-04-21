import React, { Component } from 'react'
import loadGif from './Assets/Spinner@1x-1.0s-200px-200px.gif'

export class Loading extends Component {
  render() {
    return (
      <div className="text-centre">
        <img src={loadGif} alt="loading" />
      </div>
    )
  }
}

export default Loading