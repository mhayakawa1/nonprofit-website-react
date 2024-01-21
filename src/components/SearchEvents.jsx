import React, { useEffect } from 'react';
import axios from 'axios';

export default class SearchEvents extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        eventsData: [],
        searchResults: [],
        input: '',
        inputArr: [], //for input text split into array of individual words
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleKeyDown = this.handleKeyDown.bind(this)
    }
   
    //update input as text is entered
    handleChange(event){
      this.setState({
        input: event.target.value
      }, () => {
      })
    }
   
    handleKeyDown(event){
      this.setState({
        inputArr: [],
        searchResults: []
      })
      //if 'Enter' is pressed, execute the following
      if(event.keyCode === 13){
        this.state.inputArr = this.state.input.toLowerCase().split(' ')
          this.setState({
            inputArr: this.state.inputArr
          })
        const split = this.state.input.split(' ')
        split.forEach((searchTerm) => {
            this.state.eventsData.forEach((event) => {
              for(const key in event){
                if(event[key].toLowerCase().includes(searchTerm) === true
                  && this.state.searchResults.includes(event) === false){
                  if(key === 'State' || key === 'StateAbbreviation' || key === 'City'){
                    this.state.searchResults.unshift(event)
                  }else{
                    this.state.searchResults.push(event)
                  }
                  this.setState({
                    searchResults: this.state.searchResults
                  })
                }
              }
            })
          }
        );
      }
    }

    parseCSV(csvText){
      const rows = csvText.split(/\r?\n/); // Split CSV text into rows, handling '\r' characters
      const headers = rows[0].split(','); // Extract headers (assumes the first row is the header row)
      const data = []; // Initialize an array to store parsed data
      for (let i = 1; i < rows.length; i++) {
          const rowData = rows[i].split(','); // Split the row, handling '\r' characters
          const rowObject = {};
          for (let j = 0; j < headers.length; j++) {
              rowObject[headers[j]] = rowData[j];
          }
          data.push(rowObject);
      }
      return data;
    }

    fetchEventsData(){
      const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSz8IuTNhD06iLT4KiIP4SD61mYtLSPfFifGgmSJQJ2uff-8qELJMjRttERw8bUwVvxJMD_rX1R7qfP/pub?output=csv'
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

    componentDidMount(){
      this.fetchEventsData();
    }

    getEventsWithLoop(){
      const eventsArr = [];
      let renderEvents

      if(this.state.input === ''){
        renderEvents = this.state.eventsData
      }else{
        renderEvents = this.state.searchResults
      }
      for(let i = 0; i < renderEvents.length; i++){
        eventsArr.push(
          <div className='search-result' key={i}>
            <div>
              <p className='result-font result-date-time font-size-small font-weight-thin'>
                {renderEvents[i].Weekday}, {renderEvents[i].Month} {renderEvents[i].Day}, {renderEvents[i].Year} {renderEvents[i].Time}
              </p>
              <p className='result-font result-title'>{renderEvents[i].Title}</p>
              <p className='result-font result-type-location font-size-small'>
                {renderEvents[i].Address}, {renderEvents[i].City}, {renderEvents[i].StateAbbreviation}
              </p>
              <p className='result-font result-description font-size-small font-weight-thin'>{renderEvents[i].Description}</p>
            </div>          
            <div className='result-buttons'>
              <button className='result-font primary font-size-small font-weight-thin'>Learn More</button>
              <button className='result-font secondary font-size-small font-weight-thin'>Add to Calendar</button>
            </div>
          </div>
        )
      }
      return(
        eventsArr
      )
    }
    
    render(){   
      return(
        //when input is entered, pass handleChange
        //when enter is pressed, pass handleKeyDown
        //set aria-hidden to true to make elements on last row left aligned
        <div id='find-event' >
          <input id='search-input' className='font-weight-thin'
            placeholder='Search time, location, etc.' type='text'
            value={this.state.input} onChange={this.handleChange}
            onKeyDown={this.handleKeyDown} 
          />
   
          <div id='search-results'>
            {/*results*/}
            {this.getEventsWithLoop()}
            <i aria-hidden='true'></i>
          </div>
        </div>
      )
    }
  }