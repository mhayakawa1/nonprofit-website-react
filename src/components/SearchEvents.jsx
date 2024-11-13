import React from 'react';
import axios from 'axios';

function Button(props){
  return(
    <button className={`${props.primary ? 'primary' : 'secondary'} result-font font-size-small font-weight-thin`}>{props.text}</button>
  )
}

export default class SearchEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsData: [],
      searchResults: [],
      input: '',
      inputArr: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    }, () => {
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.state.inputArr = this.state.input.toLowerCase().split(' ');
    this.setState({
      inputArr: this.state.inputArr
    })
    const searchTerms = this.state.input.split(' ');
    searchTerms.forEach((searchTerm) => {
      this.state.eventsData.forEach((event) => {
        for (const key in event) {
          if (event[key].toLowerCase().includes(searchTerm)
            && !this.state.searchResults.includes(event)) {
            if (key === 'State' || key === 'StateAbbreviation' || key === 'City') {
              this.state.searchResults.unshift(event);
            } else {
              this.state.searchResults.push(event);
            }
            this.setState({
              searchResults: this.state.searchResults
            })
          }
        }
      })
    }
    );
    return false;
  }

  handleKeyDown() {
    this.setState({
      inputArr: [],
      searchResults: []
    })
  }

  parseCSV(csvText) {
    const rows = csvText.split(/\r?\n/);
    const headers = rows[0].split(',');
    const data = [];
    for (let i = 1; i < rows.length; i++) {
      const rowData = rows[i].split(',');
      const rowObject = {};
      for (let j = 0; j < headers.length; j++) {
        rowObject[headers[j]] = rowData[j];
      }
      data.push(rowObject);
    }
    return data;
  }

  fetchEventsData() {
    const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSz8IuTNhD06iLT4KiIP4SD61mYtLSPfFifGgmSJQJ2uff-8qELJMjRttERw8bUwVvxJMD_rX1R7qfP/pub?output=csv';
    axios.get(url)
      .then((response) => {
        const parsedCsvData = this.parseCSV(response.data);
        this.setState({
          eventsData: parsedCsvData
        })
      })
      .catch((error) => {
        console.error('Error fetching CSV data:', error);
      });
  }

  componentDidMount() {
    this.fetchEventsData();
  }

  getEventsWithLoop() {
    const eventsArr = [];
    let renderEvents;

    if (this.state.input === '') {
      renderEvents = this.state.eventsData;
    } else {
      renderEvents = this.state.searchResults;
    }
    for (let i = 0; i < renderEvents.length; i++) {
      const {Weekday, Month, Day, Year, Time, Title, Address, City, StateAbbreviation, Description } = renderEvents[i];
      eventsArr.push(
        <div className='search-result' key={i}>
          <div>
            <p className='result-font result-date-time font-size-small font-weight-thin'>
              {Weekday}, {Month} {Day}, {Year} {Time}
            </p>
            <p className='result-font result-title'>{Title}</p>
            <p className='result-font result-type-location font-size-small'>
              {Address}, {City}, {StateAbbreviation}
            </p>
            <p className='result-font result-description font-size-small font-weight-thin'>{Description}</p>
          </div>
          <div className='result-buttons'>
            <Button text={'Learn More'} primary={true} />
            <Button text={'Add to Calendar'} primary={false} />
          </div>
        </div>
      )
    }
    return (
      eventsArr
    )
  }

  render() {
    return (
      <div className='search-events'>
        <form className='search-container' onSubmit={this.handleSubmit} >
          <input className='search-input font-weight-thin'
            placeholder='Search time, location, etc.' type='text'
            value={this.state.input} onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
          />
        </form>
        <div className='search-results'>
          {this.getEventsWithLoop()}
          <i aria-hidden='true'></i>
        </div>
      </div>
    )
  }
}