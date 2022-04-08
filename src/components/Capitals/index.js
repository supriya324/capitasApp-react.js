import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {isCountryList: countryAndCapitalsList[0].id}

  onSelectedList = event => {
    this.setState({
      isCountryList: event.target.value,
    })
  }

  getCountry = () => {
    const {isCountryList} = this.state
    const capitalCountryList = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === isCountryList,
    )
    return capitalCountryList.country
  }

  render() {
    const {isCountryList} = this.state
    const Countrylists = this.getCountry(isCountryList)
    return (
      <div className="capital-container">
        <div className="container">
          <h1 className="heading">Countries and Capitals</h1>
          <div className="text">
            <select
              className="drop-downlist"
              value={isCountryList}
              onChange={this.onSelectedList}
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option
                  className="option"
                  value={eachCapital.id}
                  key={eachCapital.id}
                >
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="paragraph"> is capital of which country?</p>
          </div>
          <p className="country"> {Countrylists}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
