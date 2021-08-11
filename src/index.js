import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Main from './Main'
import DataTable from './DataTable'
import Footer from './Footer'
ReactDOM.render(
  <div>
    <Header/>
    {/* <Main/> */}
    <DataTable/>
    <Footer/>
  </div>,
  document.getElementById("root")
)