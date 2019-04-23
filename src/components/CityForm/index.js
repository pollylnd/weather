import React, { Component } from 'react'
import axios from 'axios'
import _ from 'lodash'


import './index.css'


class CityForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '', weather: null };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        appid: 'cd085248cf4e7b6b8aeaf7cb8203c7da',
        units: 'metric',
        q: this.state.value
      }
    })
    .then((response) => {
      this.props.manSaid()
      this.props.tempChange(response.data.main.temp)
      this.props.windChange(response.data.wind.speed)
      this.props.endGame()
      this.setState({ weather: response })
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    
    event.preventDefault()
  }

  render() {
    //const temp = <FontAwesomeIcon icon={ faBurn } />
    console.log(this.state)
    return(
      <div >
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Введите название города"/>
          <button>
            { this.props.gameOver ? 'Повторим?' : 'Поиск' }
          </button>
        </form>
        
        <div>{_.get(this.state.weather, 'data', false) ? 'Температура: ' + this.state.weather.data.main.temp + '°С': '' }</div>
        <div>{_.get(this.state.weather, 'data', false) ? 'Давление: ' + this.state.weather.data.main.pressure + ' мм.рт.ст.': '' }</div>
        <div>{_.get(this.state.weather, 'data', false) ? 'Влажность: ' + this.state.weather.data.main.humidity + '%': '' }</div>
        <div>{_.get(this.state.weather, 'data', false) ? 'Облачность: ' + this.state.weather.data.clouds.all + '%': '' }</div>
        <div>{_.get(this.state.weather, 'data', false) ? 'Скорость ветра: ' + this.state.weather.data.wind.speed + ' м/с': '' }</div>
        
        <div className='gifcloud'></div>
      </div>
    )
  }
}




export default CityForm