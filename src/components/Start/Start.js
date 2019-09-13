import React, { Component } from 'react'
import '../Start/Start.scss'




class Start extends Component {
    render() {
        return (
            <div className="home">
                <h2 className="homeTitle">Wybierz jedną z opcji</h2>
                    <section className="options">
                         <div className="optionsDiv"><p>Dodaj</p></div>
                        <div className="optionsDiv"><p>Szukaj</p></div>
                        <div className="optionsDiv"><p>Nie wiem:(</p></div>
                     </section>
            </div>
        )
    }
}

export default Start;