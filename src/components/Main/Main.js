import React, { Component } from 'react'
import './Main.scss'


class AddForm extends Component{
    state = {
        name: "",
        surname: "",
        phone: "",
        email:"",
    }

    /* 
    Mogę skrócić ten zapis
    handleChange = e => {
  this.setState({
    [e.tagret.name]: e.target.value
  });
} */


    handleNameChange = e => {
        this.setState({name: e.target.value});
    };
    
    handleSurnameChange = e => {
        this.setState({surname: e.target.value});
    };  

    handlePhoneChange = e => {
        this.setState({phone: e.target.value});
    };  

    handleMailChange = e => {
        this.setState({email: e.target.value});
    };  
    
    handleSubmit = e => {
        e.preventDefault();
        console.log('Imię: ' + this.state.name);
        console.log('Nazwisko:' + this.state.name);
        console.log('Numer telefonu: ' + this.state.name);
        console.log('Email:' + this.state.name);
      };

    render(){
        return (
            <form className="addLecturerForm"onSubmit={this.handleSubmit}>
                <h1 className="formTitle">Dodaj wykładowcę:</h1>
                <label>Imię:
                    <input type="text" name="name" value={this.state.name} onChange={this.handleNameChange}/>
                </label>
                <label>Nazwisko:
                    <input type="text" name="surname" value={this.state.surname} onChange={this.handleSurnameChange}/>
                </label>
                <label>Numer telefonu:
                    <input type="text" name="phone" value={this.state.phone} onChange={this.handlePhoneChange}/>
                </label>
                <label> Mail:
                    <input type="email" name="email" value={this.state.email}onChange={this.handleMailChange} /> 
                </label>
                <label> Kurs:
                JavaScript <input type="checkbox" value="javascript" name="check" />
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
                Stacjonarny <input type="checkbox" value="Katowice" name="check" />
                Weekedowy <input type="checkbox" value="Katowice" name="check" />
                 Online <input type="checkbox" value="Katowice" name="check" />
                </label>
                <label> Dodatkowe uwagi:
                    <textarea></textarea>
                </label>
            <input type="submit" value="Dodaj wykładowcę" />
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