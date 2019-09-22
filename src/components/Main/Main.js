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
            technology: [],
            mode: [],
            localization: []
        }
            this.checkboxCourses = this.checkboxCourses.bind(this);
            this.checkboxLocalization = this.checkboxLocalization.bind(this);
            this.checkboxMode = this.checkboxMode.bind(this);
            /* this.submitForm = this.submitForm.bind(this);*/

        }

    /* 
    Mogę skrócić ten zapis
    handleChange = e => {
  this.setState({
    [e.tagret.name]: e.target.value
  });
} */

//Obsługa inputów text,number,email

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
        console.log('Technologia:' + this.state.technology);
        console.log('Lokalizacja:' + this.state.localization);
        console.log('Tryb:' + this.state.mode);
      };

//Obsługa checkboxów 

    checkboxCourses(e) {
        //console.log(e.currentTarget.value, e.currentTarget.checked);

        let state = this.state;

        if(e.currentTarget.checked){
            state.technology.push(e.currentTarget.value);
        } else {
            let index = state.technology.indexOf(e.currentTarget.value);
            state.technology.splice(index, 1);
        }

        this.setState(state);
       // console.log(state);
    }

    checkboxLocalization(e){
        let state = this.state;

        if (e.currentTarget.checked){
            state.localization.push(e.currentTarget.value);
        } else {
            let index = state.localization.indexOf(e.currentTarget.value);
            // TODO Why delete state.localization[index] did not work?
            state.localization.splice(index, 1);   
        }
        this.setState(state);
       // console.log(state);
    }

    checkboxMode(e){
        let state = this.state;
        
        if(e.currentTarget.checked){
            state.mode.push(e.currentTarget.value);
        } else {
            let index = state.mode.indexOf(e.currentTarget.value);
            state.mode.splice(index, 1);
        }
        this.setState(state);
       // console.log(state);
    }

 // Submit

    /* submitForm(){

        let state = this.state;
        
        if(this.state.name === ''){
            alert("Uzupełnij imię!");
        } else if (this.state.surname === ''){
            alert("Uzupełnij nazwisko!")
        } else if (this.state.phone === ''){
            alert("Uzupełnij numer telefonu!")
        } else if(this.state.email === ''){
            alert("Uzupełnij e-mail!")  
        } else {
            alert("Dodany do bazy")
        }
        
        this.setState(state);
} */

    render(){
        return (
             
            <form className="addLecturersForm" onSubmit={this.handleSubmit}>
                <label>Imię:
                    <input className="input"type="text" name="name" placeholder="Wpisz imię" value={this.state.name} onChange={this.handleNameChange}/>
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
                
                <label className="course"> Kurs:
                JavaScript <input type="checkbox" value="javascript" name="check" onChange={(e) => this.checkboxCourses(e)}/>
                Java <input type="checkbox" value="java" name="check" onChange={(e) => this.checkboxCourses(e)}/>
                Python <input type="checkbox" value="python" name="check" onChange={(e) => this.checkboxCourses(e)}/>
                PHP <input type="checkbox" value="php" name="check" onChange={(e) => this.checkboxCourses(e)}/>
                UX Design <input type="checkbox" value="ux" name="check" onChange={(e) => this.checkboxCourses(e)} />
                Tester Manualny <input type="checkbox" value="tester manualny" name="check" onChange={(e) => this.checkboxCourses(e)}/>
                Tester Automatyzujący <input type="checkbox" value="tester automatyzujący" name="check" onChange={(e) => this.checkboxCourses(e)}/>
                </label>

                <label>Lokalizacja: 
                Warszawa <input type="checkbox" value="Warszawa" name="check" onChange={(e) => this.checkboxLocalization(e)} />
                Wrocław <input type="checkbox" value="Wrocław" name="check" onChange={(e) => this.checkboxLocalization(e)}/>
                Poznań <input type="checkbox" value="Poznań" name="check" onChange={(e) => this.checkboxLocalization(e)}/>
                Kraków <input type="checkbox" value="Kraków" name="check" onChange={(e) => this.checkboxLocalization(e)}/>
                Katowice <input type="checkbox" value="Katowice" name="check" onChange={(e) => this.checkboxLocalization(e)}/>
                Zdalnie <input type="checkbox" value="Zdalnie" name="check" onChange={(e) => this.checkboxLocalization(e)}/>
                </label>

                <label>Tryb prowadzenia zajęć:
                Stacjonarny <input type="checkbox" value="stacjonarny" name="check" onChange={(e) => this.checkboxMode(e)} />
                Weekedowy <input type="checkbox" value="weekendowy" name="check" onChange={(e) => this.checkboxMode(e)}/>
                Online <input type="checkbox" value="online" name="check" onChange={(e) => this.checkboxMode(e)}/>
                </label>

                <label> Komentarz:
                    <textarea  placeholder="Komentarz" value={this.state.text} onChange={this.handleTextChange}></textarea>
                </label>
                
            <input className="formSubmit" type="submit" value="Dodaj wykładowcę" /*onClick={this.submitForm}*//>
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