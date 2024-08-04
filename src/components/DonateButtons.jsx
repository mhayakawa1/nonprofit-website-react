import React from 'react';

export default class DonateButtons extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selected5: false,
        selected10: false,
        selected25: false,
        selected50: false,
        selected100: false,
        selected200: false
      }
      this.toggleButtons = this.toggleButtons.bind(this)
    }
  
    toggleButtons(event, value){
      const setAllToFalse = () => {
        this.setState( state => ({
          selected5: false,
          selected10: false,
          selected25: false,
          selected50: false,
          selected100: false,
          selected200: false
        }))
      }
      switch(value){
        case 0:
          setAllToFalse();
          break;
        case 5:
          setAllToFalse();
          this.setState( state => ({
            selected5: !state.selected5
          }));
          break;
        case 10:
          setAllToFalse();
          this.setState( state => ({
            selected10: !state.selected10
          }));
          break;
        case 25:
          setAllToFalse();
          this.setState( state => ({
            selected25: !state.selected25
          }));
          break;
        case 50:
          setAllToFalse();
          this.setState( state => ({
            selected50: !state.selected50
          }));
          break;
        case 100:
          setAllToFalse();
          this.setState( state => ({
            selected100: !state.selected100
          }));
          break;
        case 200:
          setAllToFalse();
          this.setState( state => ({
            selected200: !state.selected200
          }));
      }
    }
  
    render(){
  
      return(
        <div className='donate-selection'>
          <div className='donate-buttons'>
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
            
            {this.state.selected200 === false ? 
              <button onClick={event => this.toggleButtons(event, 200)} className='donate-amount'>$200</button>
              : <button onClick={event => this.toggleButtons(event, 200)} className='donate-amount donate-amount-selected'>$200</button>}
            
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