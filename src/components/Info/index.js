import React, { Component } from 'react'
import './index.css'


class Info extends Component {
  render() {
    return(
      <div>
        <div className='title'>
          { this.props.gameOver ? <img className='gifGameOver' src='https://media.giphy.com/media/1hMbkOaFfYmZvvEBq9/giphy.gif' alt="game over"></img> : <h2>Погода</h2> }
        </div>
        { this.props.gameOver ? <p>Ну чо, как там?</p> : <p>Либо дождь, либо снег, либо будет, либо нет.</p> } 
        
      </div>
    )
  }
}

export default Info