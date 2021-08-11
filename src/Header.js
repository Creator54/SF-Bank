import React, { Component } from 'react'
import Main from './Main'

class Header extends Component{
  handleClick(){
    return (<Main/>)
  }

  render(){
    return(
      <div className='navbar'>
        <img class='logo' src='https://static.vecteezy.com/system/resources/previews/000/620/462/large_2x/sun-generic-logo-and-symbols-vector.jpg' alt='logo'/>
        <header>
          <a>SF BANK</a>
          <a href='' id='navbar-right' onClick={this.handleClick}>Customers</a>
        </header>
      </div>
    )
  }
}

export default Header