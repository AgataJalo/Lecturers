import React, { Component } from 'react'
import Header from '../Header/Header'
import './App.scss'
import Start from '../Start/Start'


/*import Main from '../Main/Main'*/



class App extends Component {
    render() {
        return (
            <div className="lecturers">
              <Header/>
              <Start/>
            </div>
        )
    }
}

export default App;