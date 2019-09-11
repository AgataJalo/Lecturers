import React, { Component } from 'react'
import Header from '../Header/Header'
import './App.scss'
import Main from '../Main/Main'

class App extends Component {
    render() {
        return (
            <div>
              <Header/>
              <Main/>
              
            </div>
        )
    }
}

export default App;