import React from 'react';

const buttonsDefault = {
  "$5": false,
  "$10": false,
  "$25": false,
  "$50": false,
  "$100": false,
  "$200": false
}

const DonateButton = ({amount, toggleButtons, active}) => {
  return (
    <button onClick={event => toggleButtons(event, amount)}
      className={`donate-amount ${active && 'donate-amount-selected'}`}>{amount}</button>
  )
}

export default class DonateButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...buttonsDefault }
    this.toggleButtons = this.toggleButtons.bind(this)
  }

  toggleButtons(event, dollarAmount) {
    this.setState(state => ({ ...buttonsDefault }))

    if (dollarAmount !== 'custom') {
      this.setState(state => ({
        [dollarAmount]: !this.state[dollarAmount]
      }));
    }
  }

  getDonateButtons() {
    let buttons = [];

    for (const key of Object.keys(this.state)) {
      buttons.push(
        <DonateButton key={key} amount={key} toggleButtons={this.toggleButtons} active={this.state[key]} />
      )
    }
    return (
      buttons
    )
  }
  render() {

    return (
      <div className='donate-selection'>
        <div className='donate-buttons'>
          {this.getDonateButtons()}
          <div className='donate-custom'>
            <label className='dollar-label'>$</label>
            <input onChange={event => this.toggleButtons(event, 'custom')} className='custom-input' type='number' min='0'
              placeholder='Custom' />
          </div>
        </div>
      </div>
    )
  }
}