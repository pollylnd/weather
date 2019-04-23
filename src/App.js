import React, { Component } from 'react'
import Info from './components/Info'
import CityForm from './components/CityForm'
import Man from './components/Man'
import Sounds from './components/Sounds'




class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      manSay: false,
      tempSent: 0.0,
      windSent: 0.0,
      gameOver: false
    }

    this.manSaid = this.manSaid.bind(this)
    this.tempChange = this.tempChange.bind(this)
    this.windChange = this.windChange.bind(this)
    this.endGame = this.endGame.bind(this)
  }

  componentDidMount() {
    this.setState({ gameOver : false })
  }

  manSaid() {
    this.setState({ manSay : true })
  }

  tempChange(temp) {
    this.setState({ tempSent : temp })
  }

  windChange(wind) {
    this.setState({ windSent : wind })
  }

  endGame() {
    this.setState({ gameOver : true })
  }

  render() {
    return(
      <div>
        <Info gameOver={this.state.gameOver} />
        <CityForm manSaid={this.manSaid} tempChange={this.tempChange} windChange={this.windChange} endGame={this.endGame} gameOver={this.state.gameOver} />  
        <Man manSay={this.state.manSay} temp={this.state.tempSent} wind={this.state.windSent} />
        <Sounds soundName={this.state.gameOver ? 'gameover' : 'main-theme'} />
      </div>
    )
  }
}



export default App
