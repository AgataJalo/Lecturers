import React, { Component } from 'react'




class Finder extends Component {
    state={
        text: " ",
        error: "UPS"
    }

    handleDataChange =(e) =>{
        const value  = this.refs.number.value;
        console.log(value)
        fetch(`http://localhost:8000/lecturers`)
        .then(response=>response.json())
        .then(data=>console.log(data))
        .catch(error => console.log(error))
    }



    render() {
        return (
            <div className="home">
                <h2 className="homeTitle">Szukaj</h2>
                <input onChange ={this.handleDataChange} type="text" ref="number"/>
                <h5>Wynik wyszukiwania: {this.state.text}</h5>
            </div>
        )
    }
}

export default Finder;