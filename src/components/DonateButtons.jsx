import React from 'react';

export default class DonateButtons extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        "$5": false,
        "$10": false,
        "$25": false,
        "$50": false,
        "$100": false,
        "$200": false
      }
      this.toggleButtons = this.toggleButtons.bind(this)
    }
  
    toggleButtons(event, dollarAmount){
      this.setState( state => ({
        "$5": false,
        "$10": false,
        "$25": false,
        "$50": false,
        "$100": false,
        "$200": false
      }))

      this.setState( state => ({
        [dollarAmount]: !this.state[dollarAmount]
      }));
    }

    getDonateButtons(){
      let buttons = [];

      for (const key of Object.keys(this.state)) {
        buttons.push(
          <button key={key} onClick={event => this.toggleButtons(event, key)} 
          className={`donate-amount ${this.state[key] ? 'donate-amount-selected' : null}`}>{key}</button>
        )
      }
      return(
        buttons
      )
    }
    render(){
  
      return(
        <div className='donate-selection'>
          <div className='donate-buttons'>
            {this.getDonateButtons()}
            <div className='donate-custom'>
              <label className='dollar-label'>$</label>
              <input onChange={event => this.toggleButtons(event, 0)} className='custom-input' type='number' min='0' 
                placeholder='Custom' />
            </div>
          </div>          
        </div>
      )
    }
  }