import React from 'react'

function Header(){
  const date = new Date()
  let time
  let source

  if (date.getHours() < 12) {
    time = 'Morning'
    source = 'https://image.flaticon.com/icons/png/128/3892/3892928.png'
  }
  else if (date.getHours() >= 12 && date.getHours() < 17) {
    time = 'Afternoon'
    source = 'https://image.flaticon.com/icons/png/128/2698/2698194.png'
  }
  else if (date.getHours() >= 17 && date.getHours() < 20){
    time = 'Evening'
    source = 'https://image.flaticon.com/icons/png/128/3094/3094159.png'
  }
  else {
    time = 'Night'
    source = 'https://image.flaticon.com/icons/png/128/3626/3626276.png'
  }


  // const styles = {
  //   top:'10px',
  //   right:'10px',
  //   position:'absolute',
  //   fontSize:'15px',
  //   height:'30px',
  //   width: '30px'
  // }

  return(
    <div className='navbar'>
      <img class='logo' src='https://static.vecteezy.com/system/resources/previews/000/620/462/large_2x/sun-generic-logo-and-symbols-vector.jpg' alt='logo'/>
      {/* <img style={styles} src={source} alt={time}/> */}
      <header>
        <a>SF-BANK</a>
        <a id='navbar-right'>Customers</a>
      </header>
    </div>
  )
}

export default Header