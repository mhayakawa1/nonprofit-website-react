import React from 'react';

export default class DonateButtons extends React.Component {
    constructor(props) {
      super(props);
      //set all buttons to false by default
      this.state = {
        selected5: false,
        selected10: false,
        selected25: false,
        selected50: false,
        selected100: false
      }
      this.toggleButtons = this.toggleButtons.bind(this)
    }
  
    toggleButtons(event, value){
      //toggle correct button based on value number, set the rest to false
      //only one button can be selected at a time
      //when custom value is entered, set all to false so that no buttons are selected
      switch(value){
        case 0:
          this.setState( state => ({
            selected5: false,
            selected10: false,
            selected25: false,
            selected50: false,
            selected100: false
          }));
          break;
        case 5:
          this.setState( state => ({
            selected5: !state.selected5,
            selected10: false,
            selected25: false,
            selected50: false,
            selected100: false
          }));
          break;
        case 10:
          this.setState( state => ({
            selected5: false,
            selected10: !state.selected10,
            selected25: false,
            selected50: false,
            selected100: false
          }));
          break;
        case 25:
          this.setState( state => ({
            selected5: false,
            selected10: false,
            selected25: !state.selected25,
            selected50: false,
            selected100: false
          }));
          break;
        case 50:
          this.setState( state => ({
            selected5: false,
            selected10: false,
            selected25: false,
            selected50: !state.selected50,
            selected100: false
          }));
          break;
        case 100:
          this.setState( state => ({
            selected5: false,
            selected10: false,
            selected25: false,
            selected50: false,
            selected100: !state.selected100
          }));
      }
    }
  
    render(){
  
      return( 
        //when buttons are clicked, call toggleButtons to toggle boolean and pass number as parameter
        //if false, render button without className donate-amount-selected
        //if true, render button with className donate-amount-selected
        //if custom input is entered, call toggleButtons and pass 0 as parameter to unselect all buttons
        <div id='donate-selection'>
          <div id='donate-buttons'>
            {this.state.selected5 === false ? 
              <button onClick={event => this.toggleButtons(event, 5)} className='donate-amount'>$5</button>
              : <button onClick={event => this.toggleButtons(event, 5)} className='donate-amount donate-amount-selected'>$5</button>}
        
            {this.state.selected10 === false ? 
              <button onClick={event => this.toggleButtons(event, 10)} className='donate-amount'>$10</button>
              : <button onClick={event => this.toggleButtons(event, 10)} className='donate-amount donate-amount-selected'>$10</button>}
        
            {this.state.selected25 === false ? 
              <button onClick={event => this.toggleButtons(event, 25)} className='donate-amount'>$25</button>
              : <button onClick={event => this.toggleButtons(event, 25)} className='donate-amount donate-amount-selected'>$25</button>}
  
            {this.state.selected50 === false ? 
              <button onClick={event => this.toggleButtons(event, 50)} className='donate-amount'>$50</button>
              : <button onClick={event => this.toggleButtons(event, 50)} className='donate-amount donate-amount-selected'>$50</button>}
        
            {this.state.selected100 === false ? 
              <button onClick={event => this.toggleButtons(event, 100)} className='donate-amount'>$100</button>
              : <button onClick={event => this.toggleButtons(event, 100)} className='donate-amount donate-amount-selected'>$100</button>}
  
          </div>
  
          <div id='donate-custom'>
            <label id='dollar-label'>$</label>
            <input onChange={event => this.toggleButtons(event, 0)} id='custom-input' type='number' min='0' placeholder='Custom' />
          </div>
        </div>
      )
    }
  }