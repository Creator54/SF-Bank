import React from 'react'

function Popup(props) {
  return (props.trigger)? (
    <div className='popup'>
      <div className='popup-inner'>
        <button className='close-btn'>X</button>
        { props.children }
      </div>
    </div>
  ):''

  //if triggered show this else empty string
}

export default Popup
