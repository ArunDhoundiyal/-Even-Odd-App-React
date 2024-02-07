// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrementRandomNumber = () => {
    this.setState(prevState => {
      console.log(`Previous Count ${prevState.count}`)
      return {count: Math.ceil(Math.random() * 100) - prevState.count}
    })
  }

  render() {
    const {heading, buttonText} = this.props
    const {count} = this.state
    // Math.abs convert negative number into positive number
    const number = Math.abs(count)
    let oddEven
    if (number % 2 === 0) {
      oddEven = 'Even'
    } else {
      oddEven = 'Odd'
    }

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading-style">
            {heading} {number}
          </h1>
          <p className="count-paragraph">Count is {oddEven}</p>
          <button
            className="button-style"
            type="button"
            onClick={this.onIncrementRandomNumber}
          >
            {buttonText}
          </button>
          <p className="content-style">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
