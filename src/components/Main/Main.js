import React, { Component } from 'react'
import './Main.scss'

/*import {
    NavLink,
  } from 'react-router-dom'; */


class AddForm extends Component{
    constructor(props){
        super(props);
        this.state = {
        name: "",
        surname: "",
        phone: "",
        email:"",
        text: "",
    }}

    /* 
    Mogę skrócić ten zapis
    handleChange = e => {
  this.setState({
    [e.tagret.name]: e.target.value
  });
} */


    handleNameChange = e => {
        const name = e.target.value.replace(/\d/g, ''); //nie można wpisać cyfr
        this.setState({name});
    };
    
    handleSurnameChange = e => {
        const surname = e.target.value.replace(/\d/g, '');
        this.setState({surname});
    };  

    handlePhoneChange = e => {
        this.setState({phone: e.target.value});
    };  

    handleMailChange = e => {
        this.setState({email: e.target.value});
    };  

    handleTextChange = e => {
        this.setState({text: e.target.value});
    };
    

    handleSubmit = e => {
        e.preventDefault();
        console.log('Imię: ' + this.state.name);
        console.log('Nazwisko:' + this.state.surname);
        console.log('Numer telefonu: ' + this.state.phone);
        console.log('Email:' + this.state.email);
        console.log('Uwagi:' + this.state.text);
      };

     /*submitClick = e => {
        e.preventDefault();
        if(this.state.name !== '' && this.state.surname !== '' && this.state.phone !== '' && this.state.email !== ''){
            alert("Dodany do bazy!");
        } else {
            alert("Uzupełnij pola");
        }
        
     } */

    render(){
        return (
            <form className="addLecturerForm"onSubmit={this.handleSubmit}>
                <h1 className="formTitle">Dodaj wykładowcę:</h1>
                <label>Imię:
                    <input type="text" name="name" placeholder="Wpisz imię" value={this.state.name} onChange={this.handleNameChange}/>
                </label>
                <label>Nazwisko:
                    <input type="text" name="surname" placeholder="Wpisz nazwisko" value={this.state.surname} onChange={this.handleSurnameChange}/>
                </label>
                <label>Numer telefonu:
                    <input type="number" name="phone" placeholder="Wpisz numer telefonu" value={this.state.phone} onChange={this.handlePhoneChange}/>
                </label>
                <label> Mail:
                    <input type="email" name="email" placeholder="Wpisz e-mail" value={this.state.email}onChange={this.handleMailChange} /> 
                </label>

                <label> Kurs:
                JavaScript <input type="checkbox" value="javascript" name="check"/>
                Java <input type="checkbox" value="java" name="check" />
                Python <input type="checkbox" value="python" name="check" />
                PHP <input type="checkbox" value="php" name="check" />
                UX Design <input type="checkbox" value="ux" name="check" />
                Tester Manualny <input type="checkbox" value="testermanualny" name="check" />
                Tester Automatyzujący <input type="checkbox" value="testerautomatyzujący" name="check" />
                </label>

                <label>Lokalizacja: 
                Warszawa <input type="checkbox" value="Warszawa" name="check" />
                Wrocław <input type="checkbox" value="Wrocław" name="check" />
                Poznań <input type="checkbox" value="Poznań" name="check" />
                Kraków <input type="checkbox" value="Kraków" name="check" />
                Katowice <input type="checkbox" value="Katowice" name="check" />
                Zdalnie <input type="checkbox" value="Zdalnie" name="check" />
                </label>

                <label>Tryb prowadzenia zajęć:
                Stacjonarny <input type="checkbox" value="stacjonarny" name="check" />
                Weekedowy <input type="checkbox" value="weekendowy" name="check" />
                Online <input type="checkbox" value="online" name="check" />
                </label>

                <label> Dodatkowe uwagi:
                    <textarea  placeholder="Wpisz dodatkowe uwagi" value={this.state.text} onChange={this.handleTextChange}></textarea>
                </label>
                
            <input className="formSubmit" type="submit" value="Dodaj wykładowcę"/>
            </form>
        )
    }
}

class Main extends Component {
    render() {
        return (
            <AddForm/>
        )
    }
}

export default Main;