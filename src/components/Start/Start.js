import React, { Component } from 'react'
import '../Start/Start.scss'
import {
    NavLink,
  } from 'react-router-dom';

class Start extends Component {
    render() {
        return (
            <div className="home">
                <h2 className="homeTitle">Wybierz jedną z opcji</h2>
                    <section className="options">
                        <NavLink to="/main" className="optionsDiv"><p>A</p></NavLink>
                        <NavLink to="/finder" className="optionsDiv"><p>B</p></NavLink>
                        <NavLink to ="/legenda" className="optionsDiv"><p>C</p></NavLink>
                     </section>
            </div>
        )
    }
}

export default Start;