import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {value1: 0, value2: 0}

  onIncrementMango = () => {
    this.setState(prevState => ({value1: prevState.value1 + 1}))
  }

  onIncrementBanana = () => {
    this.setState(prevState => ({value2: prevState.value2 + 1}))
  }

  render() {
    const {value1, value2} = this.state

    return (
      <div className="bg-container ">
        <div className="fruit-container">
          <h1 className="heading">
            Bob ate {value1} mangoes and {value2} bananas
          </h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
            alt="banana"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
            alt="mango"
          />
          <button type="button" onClick="onIncrementMango">
            Eat Mango
          </button>
          <button type="button" onClick="onIncrementBanana">
            Eat Banana
          </button>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
