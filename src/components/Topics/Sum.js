import React, { Component } from 'react'

export default class Sum extends Component {
    constructor() {
        super()

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    updateNum1(val) {
        this.setState({ number1: parseInt(val, 10) })
    }

    updateNum2(val) {
        this.setState({ number2: parseInt(val, 10)})
    }

    add(num1, num2) {
        this.setState({ sum: num1 + num2})
    }
    render() {
        return (
           <div className="puzzleBox sumPB">
               <h4>Sum</h4>
               <input className="inputLine" type="text" onChange={(e) => this.updateNum1(e.target.value)} />
               <input className="inputLine" type="text" onChange={(e) => this.updateNum2(e.target.value)} />
               <button className="confirmationButton" onClick={(e) => this.add(this.state.number1, this.state.number2)}>Add</button>
               <span className="resultsBox">{this.state.sum}</span>
           </div>
        )
    }
}
