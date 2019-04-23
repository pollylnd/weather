import React, { Component } from 'react'
import './index.css'
import _ from 'lodash'


class Man extends Component {
  tempMessage() {
    const { temp } = this.props

    if (temp >= -50 && temp <= -30) return "Ну и дубак. Живи."
    if (temp > -30 && temp <= -15) return "Холодно. Пей какао."
    if (temp > -15 && temp <= -5) return "Холодно, но не очень. Норм"
    if (temp > -5 && temp <= 5) return "Ну, ни то, ни сё."
    if (temp > 5 && temp <= 15) return "Можно и в пальто."
    if (temp > 15 && temp <= 25) return "Самая шикарная погода."
    if (temp > 25 && temp <= 35) return "Баня. ПечОт. Дуй на пляж."
    if (temp > 35 ) return "Адская жара. Живи."
  }

  windMessage() {
    const { wind } = this.props

    if (wind >= 0 && wind <= 2) return "Штииииль сводит с умаааааа!"
    if (wind > 2 && wind <= 5) return "В уши не дует и хорошо."
    if (wind > 5 && wind <= 8) return "Ветер задирает юбки. Оу!"
    if (wind > 8 && wind <= 11) return "И где-то хлопнет дверь и дрогнут провода... От ветра."
    if (wind > 11 && wind <= 15) return "Сдувает детей, которые не ели кашу. И которые ели."
    if (wind > 15 && wind <= 21) return "Возможны осадки в виде деревьев."
    if (wind > 21) return "Ураганит. Спасайся кто может!"
  }

  render() {
    return(
      <div className='man'>
        <img className='gifman' src='https://media.giphy.com/media/XgSCZR9GyUKQfXXSXZ/giphy.gif' alt='man'></img>
        <div className={ this.props.manSay ? 'gifspeech' : 'hidden' }> 
          <p>
            {_.get(this.props, 'temp', false) ? this.tempMessage() : '' }
            <br />
            <br />
            {_.get(this.props, 'wind', false) ? this.windMessage() : '' }
          </p>
        </div>
      </div>
    )
  }
}

export default Man