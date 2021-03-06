import React, { Component } from 'react'
import '../Start/Start.scss'
import {
    NavLink,
  } from 'react-router-dom';



class Start extends Component {
    render() {
        return (
            <div className="home">
                <p></p>
                <h4 className="homeTitle">Wybierz jedną z opcji:</h4>
                    <div className="options">
                        <div className="optionsDivLeft"><NavLink to="/main" className="navLinks"><p>Dodaj</p></NavLink></div>
                        <div className="optionsDivCenter"><NavLink to="/finder"className="navLinks"><p>Wyszukaj</p></NavLink></div>
                        <div className="optionsDivRight"><NavLink to ="/calendar"className="navLinks"><p>Kalendarz</p></NavLink></div>
                     </div>
            </div>
        )
    }
}

export default Start;