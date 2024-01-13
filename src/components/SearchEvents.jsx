import React, { useEffect } from 'react';
import axios from 'axios';

export default class SearchEvents extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        eventsData: [],
        searchResults: [],
        input: '',
        object: {
          1: {
            tags: ['arizona', 'az', 'phoenix', 'fundraiser', 'saturday', 'sat', 'april', 29],
            title: 'Lorem ipsum dolor sit amet',
            city: 'Phoenix, AZ',
            address: 'Lorem Ipsum Dolor Sit',
            eventType: 'Fundraiser',
            dateTime: 'SAT APR 29 2023, 4PM-5PM',
            description:'Urna nunc id cursus metus aliquam eleifend mi in nulla. Nunc id cursus metus aliquam eleifend.'
          },
          2: {
            tags: ['arizona', 'az', 'prescott', 'tree', 'planting', 'wednesday', 'wed', 'march', 1],
            title: 'consectetur adipiscing elit',
            city: 'Prescott, AZ',
            address: 'Lorem Ipsum Dolor Sit',
            eventType: 'Tree Planting',
            dateTime: 'WED MAR 1 2023, 9AM-11AM',
            description:'Lectus arcu bibendum at varius. Non nisi est sit amet facilisis magna etiam.'
          },
          3: {
            tags: ['california', 'ca', 'greenfield', 'tree', 'planting', 'sunday', 'sun', 'may', 21],
            title: 'sed do eiusmod tempor incididunt ut',
            city: 'Greenfield, CA',
            address: 'Lorem Ipsum Dolor Sit',
            eventType: 'Tree Planting',
            dateTime: 'SUN MAY 21 2023, 10PM-12PM',
            description:'Amet tellus cras adipiscing enim eu turpis egestas pretium. Elementum nibh tellus molestie nunc.'
          },
          4: {
            tags: ['california', 'ca', 'los angeles', 'la', 'fundraiser', 'thursday', 'thurs', 'may', 11],
            title: 'labore et dolore magna aliqua',
            city: 'Los Angeles, CA',
            address: 'Lorem Ipsum Dolor Sit',
            eventType: 'Fundraiser',
            dateTime: 'THURS MAY 11 2023, 5PM-6PM',
            description:'Luctus venenatis lectus magna fringilla urna porttitor rhoncus.'
          },
          5: {
            tags: ['california', 'ca', 'redding', 'workshop', 'monday', 'mon', 'may', 1],
            title: 'Ut enim ad minim veniam',
            city: 'Redding, CA',
            address: 'Lorem Ipsum Dolor Sit',
            eventType: 'Workshop',
            dateTime: 'MON MAY 1 2023, 4PM-5PM',
            description:'Viverra maecenas accumsan lacus vel facilisis volutpat est.'
          },
          6: {
            tags: ['california', 'ca', 'san diego', 'lecture', 'friday', 'fri', 'april', 14],
            title: 'quis nostrud exercitation ullamco',
            city: 'San Diego, CA',
            address: 'Lorem Ipsum Dolor Sit',
            eventType: 'Lecture',
            dateTime: 'FRI APR 14 2023, 3PM-4PM',
            description:'Nec tincidunt praesent semper feugiat nibh sed pulvinar proin.'
          },
          7: {
            tags: ['california', 'ca', 'santa barbara', 'tree', 'planting', 'wednesday', 'wed', 'april', 5],
            title: 'laboris nisi ut aliquip ex ea',
            city: 'Santa Barbara, CA',
            address: 'Lorem Ipsum Dolor Sit',
            eventType: 'Tree Planting',
            dateTime: 'WED APR 5 2023, 1PM-3PM',
            description:'Aliquam etiam erat velit scelerisque in dictum non consectetur a.'
          },
          8: {
            tags: ['colorado', 'co', 'springs', 'tree', 'planting', 'saturday', 'sat', 'july', 1],
            title: 'commodo consequat duis aute',
            city: 'Colorado Springs, CO',
            address: 'Lorem Ipsum Dolor Sit',
            eventType: 'Tree Planting',
            dateTime: 'SAT JUL 1 2023, 9AM-11AM',
            description:'Vivamus arcu felis bibendum ut. Nunc non blandit massa enim nec.'
          },
          9: {
            tags: ['colorado', 'co', 'denver', 'lecture', 'wednesday', 'wed', 'may', 17],
            title: 'irure dolor in reprehenderit',
            city: 'Denver, CO',
            address: 'Lorem Ipsum Dolor Sit',
            eventType: 'Tree Planting',
            dateTime: 'WED MAY 17 2023, 2PM-4PM',
            description:'Viverra aliquet eget sit amet. Est placerat in egestas erat.'
          },
          10: {
            tags: ['colorado', 'co', 'pueblo', 'workshop', 'thursday', 'thurs', 'april', 27],
            title: 'in voluptate velit esse cillum',
            city: 'Pueblo, CO',
            address: 'Lorem Ipsum Dolor Sit',
            eventType: 'Workshop',
            dateTime: 'THURS APR 27 2023, 4PM-5PM',
            description:'Id diam maecenas ultricies mi eget mauris. Integer malesuada nunc vel risus commodo.'
          },
          11: {
            tags: ['idaho', 'io', 'boise', 'fundraiser', 'wednesday', 'wed', 'april', 26],
            title: 'dolore eu fugiat nulla pariatur',
            city: 'Boise, IO',
            address: 'Lorem Ipsum Dolor Sit',
            eventType: 'Fundraiser',
            dateTime: 'WED APR 26 2023, 12PM-1PM',
            description:'Duis at consectetur lorem donec massa. Ultrices tincidunt arcu non sodales neque sodales ut etiam sit.'
          },
          12: {
            tags: ['idaho', 'io', 'twin falls', 'tree', 'planting', 'monday', 'mon', 'april', 10],
            title: 'Excepteur sint occaecat',
            city: 'Twin Falls, IO',
            address: 'Lorem Ipsum Dolor Sit',
            eventType: 'Tree Planting',
            dateTime: 'MON APR 10 2023, 10AM-12PM',
            description:'Dictum fusce ut placerat orci. Eu nisl nunc mi ipsum faucibus.'
          },
          13: {
            tags: ['minnesota', 'mn', 'duluth', 'tree', 'planting', 'tuesday', 'tues', 'march', 21],
            title: 'cupidatat non proident sunt',
            city: 'Minnesota, MN',
            address: 'Lorem Ipsum Dolor Sit',
            eventType: 'Tree Planting',
            dateTime: 'TUES MAR 21 2023, 9AM-11AM',
            description:'Erat nam at lectus urna duis. Diam ut venenatis tellus in metus vulputate eu scelerisque.'
          },
          14: {
            tags: ['nevada', 'nv', 'reno', 'workshop', 'sunday', 'sun', 'march', 19],
            title: 'in culpa qui officia deserunt',
            city: 'Reno, NV',
            address: 'Lorem Ipsum Dolor Sit',
            eventType: 'Workshop',
            dateTime: 'SUN MAR 19 2023, 9AM-10AM',
            description:'Ullamcorper a lacus vestibulum sed arcu non odio euismod. Tellus mauris a diam maecenas sed enim ut sem.'
          },
          15: {
            tags: ['new mexico', 'nm', 'apache', 'lecture', 'friday', 'fri', 'june', 9],
            title: 'mollit anim id est laborum',
            city: 'Apache, NM',
            address: 'Lorem Ipsum Dolor Sit',
            eventType: 'Lecture',
            dateTime: 'FRI JUN 9 2023, 3PM-4PM',
            description:'At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.'
          },
          16: {
            tags: ['oregon', 'or', 'baker city', 'tree', 'planting', 'monday', 'mon', 'march', 20],
            title: 'Nibh tellus molestie nunc non',
            city: 'Baker City, OR',
            address: 'Lorem Ipsum Dolor Sit',
            eventType: 'Tree Planting',
            dateTime: 'MON MAR 20 2023, 9AM-11AM',
            description:'Non arcu risus quis varius quam. Justo eget magna fermentum iaculis eu.'
          },
          17: {
            tags: ['oregon', 'or', 'eugene', 'lecture', 'saturday', 'sat', 'march', 11],
            title: 'Nunc pulvinar sapien et ligula',
            city: 'Eugene, OR',
            address: 'Lorem Ipsum Dolor Sit',
            eventType: 'Lecture',
            dateTime: 'SAT MAR 11 2023, 10AM-11AM',
            description:'Mi in nulla posuere sollicitudin aliquam. Non nisi est sit amet facilisis magna.'
          },
          18: {
            tags: ['oregon', 'or', 'portland', 'lecture', 'tuesday', 'tues', 'february', 28],
            title: 'ullamcorper malesuada proin libero',
            city: 'Portland, OR',
            address: 'Lorem Ipsum Dolor Sit',
            eventType: 'Lecture',
            dateTime: 'TUES FEB 28 2023, 2PM-3PM',
            description:'In pellentesque massa placerat duis ultricies. Aliquet nec ullamcorper sit amet risus.'
          },
          19: {
            tags: ['washington', 'wa', 'colville', 'tree', 'planting', 'saturday', 'sat', 'may', 6],
            title: 'Nullam ac tortor vitae purus',
            city: 'Colville, WA',
            address: 'Lorem Ipsum Dolor Sit',
            eventType: 'Tree Planting',
            dateTime: 'SAT MAY 6 2023, 1PM-3PM',
            description:'Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Viverra accumsan in nisl nisi scelerisque.'
          },
          20: {
            tags: ['washington', 'wa', 'wenatchee', 'tree', 'planting', 'wednesday', 'wed', 'april', 26],
            title: 'faucibus ornare suspendisse sed nisi',
            city: 'Wenatchee, WA',
            address: 'Lorem Ipsum Dolor Sit',
            eventType: 'Tree Planting',
            dateTime: 'WED APR 26 2023, 2PM-4PM',
            description:'At quis risus sed vulputate odio ut. Ac felis donec et odio pellentesque diam.'
          },
          21: {
            tags: ['wyoming', 'wy', 'cheyenne', 'fundraiser', 'wednesday', 'wed', 'april', 12],
            title: 'Semper viverra nam libero justo',
            city: 'Cheyenne, WY',
            address: 'Lorem Ipsum Dolor Sit',
            eventType: 'Fundraiser',
            dateTime: 'WED APR 12 2023, 1PM-2PM',
            description:'Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Turpis tincidunt id aliquet risus feugiat.'
          },
          22: {
            tags: ['wyoming', 'wy', 'douglas', 'tree', 'planting', 'monday', 'mon', 'may', 15],
            title: 'laoreet sit amet cursus',
            city: 'Douglas, WY',
            address: 'Lorem Ipsum Dolor Sit',
            eventType: 'Tree Planting',
            dateTime: 'MON MAY 15 2023, 12PM-2PM',
            description:'Arcu vitae elementum curabitur vitae nunc. Ipsum consequat nisl vel pretium lectus quam id leo.'
          },
          23: {
            tags: ['wyoming', 'wy', 'sheridan', 'workshop', 'saturday', 'sat', 'february', 18],
            title: 'Volutpat sed cras ornare',
            city: 'Sheridan, WY',
            address: 'Lorem Ipsum Dolor Sit',
            eventType: 'Workshop',
            dateTime: 'SAT FEB 18 2023, 10AM-11AM',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
          }
        },
        inputArr: [], //for input text split into array of individual words
        searchedTags: [], //for all search terms in inputArr that will yield results
        renderProperties: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], //for all properties in object that should be rendered
        output: ''
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
        renderProperties: [],
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