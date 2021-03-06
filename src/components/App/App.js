import React, { Component } from 'react'
import Header from '../Header/Header'
import './App.scss'
import Start from '../Start/Start'
import Main from '../Main/Main'
import FinderComponents from '../Finder/Finder'
import CalendarX from '../Calendar/Calendar'
import {
    HashRouter,
    Route,
    Switch,
  } from 'react-router-dom';



class App extends Component {
    render() {
        return (
            <HashRouter>
                <Header/>
                <Switch>
                    <Route exact path='/' component={Start} />
                    <Route path='/main' component={Main} />
                    <Route path='/finder' component={FinderComponents} />
                    <Route path='/calendar' component={CalendarX} />
                    <Route component={Start} />
                </Switch>
          </HashRouter>
        )
    }
}

export default App;
