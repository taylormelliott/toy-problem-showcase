import React, { Component } from 'react'

export default class FilterObject extends Component {
    constructor() {
        super()

        this.state = {
            unFilteredArray: [
                {
                    name: 'Jimmy Joe',
                    title: 'Hack0r',
                    age: 12,
                  },
                  {
                    name: 'Jeremy Schrader',
                    age: 24,
                    hairColor: 'brown'
                  },
                  {
                    name: 'Carly Armstrong',
                    title: 'CEO',
                  }
            ],

            userinput: '',
            filteredArray: []

        }
        
        }
    handleChange(val) {
        this.setState({ userinput: val})
    }

    filterArray(prop) {
        let employees = this.state.unFilteredArray
        let filteredArray = this.state.filteredArray

        for (let i = 0; i < employees.length; i++) {
            if(employees[i].hasOwnProperty(prop)) {
                filteredArray.push(employees[i])
            }
        }
        this.setState({ filteredArray: filteredArray})
    }



    render() {
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>Original: { JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input className='inputLine' type="text" onChange={(e) => {this.handleChange(e.target.value)}} />
                <button className='confirmationButton' onClick={() => this.filterArray(this.state.userinput)}>Filter</button>
                <span className='resultsBox filterObjectRB'>Filtered: { JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}