import React, { Component } from 'react'
import Sound from 'react-sound'


class Sounds extends Component {
  constructor(props) {
    super(props)

    this.state = {
      play: Sound.status.STOP
    }
  }

  componentDidMount() {
    this.setState({ play: Sound.status.PLAYING })
  }

  render() {
    return(
      <Sound
        url={'/sounds/' + this.props.soundName + '.mp3'} 
        playStatus={this.state.play}
        playFromPosition={300}
        autoLoad
    />
    )
  }
}

export default Sounds