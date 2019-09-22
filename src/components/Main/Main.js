import React, { Component } from 'react'
import './Main.scss'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


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
            // <form className="addLecturerForm"onSubmit={this.handleSubmit}>
            //     <h1 className="formTitle">Dodaj wykładowcę:</h1>
            //     <label>Imię:
            //         <input type="text" name="name" placeholder="Wpisz imię" value={this.state.name} onChange={this.handleNameChange}/>
            //     </label>
            //     <label>Nazwisko:
            //         <input type="text" name="surname" placeholder="Wpisz nazwisko" value={this.state.surname} onChange={this.handleSurnameChange}/>
            //     </label>
            //     <label>Numer telefonu:
            //         <input type="number" name="phone" placeholder="Wpisz numer telefonu" value={this.state.phone} onChange={this.handlePhoneChange}/>
            //     </label>
            //     <label> Mail:
            //         <input type="email" name="email" placeholder="Wpisz e-mail" value={this.state.email}onChange={this.handleMailChange} /> 
            //     </label>

            //     <label> Kurs:
            //     JavaScript <input type="checkbox" value="javascript" name="check" onChange={(e) => this.checkboxCourses(e)}/>
            //     Java <input type="checkbox" value="java" name="check" onChange={(e) => this.checkboxCourses(e)}/>
            //     Python <input type="checkbox" value="python" name="check" onChange={(e) => this.checkboxCourses(e)}/>
            //     PHP <input type="checkbox" value="php" name="check" onChange={(e) => this.checkboxCourses(e)}/>
            //     UX Design <input type="checkbox" value="ux" name="check" onChange={(e) => this.checkboxCourses(e)} />
            //     Tester Manualny <input type="checkbox" value="testermanualny" name="check" onChange={(e) => this.checkboxCourses(e)}/>
            //     Tester Automatyzujący <input type="checkbox" value="testerautomatyzujący" name="check" onChange={(e) => this.checkboxCourses(e)}/>
            //     </label>

            //     <label>Lokalizacja: 
            //     Warszawa <input type="checkbox" value="Warszawa" name="check" onChange={(e) => this.checkboxLocalization(e)} />
            //     Wrocław <input type="checkbox" value="Wrocław" name="check" onChange={(e) => this.checkboxLocalization(e)}/>
            //     Poznań <input type="checkbox" value="Poznań" name="check" onChange={(e) => this.checkboxLocalization(e)}/>
            //     Kraków <input type="checkbox" value="Kraków" name="check" onChange={(e) => this.checkboxLocalization(e)}/>
            //     Katowice <input type="checkbox" value="Katowice" name="check" onChange={(e) => this.checkboxLocalization(e)}/>
            //     Zdalnie <input type="checkbox" value="Zdalnie" name="check" onChange={(e) => this.checkboxLocalization(e)}/>
            //     </label>

            //     <label>Tryb prowadzenia zajęć:
            //     Stacjonarny <input type="checkbox" value="stacjonarny" name="check" onChange={(e) => this.checkboxMode(e)} />
            //     Weekedowy <input type="checkbox" value="weekendowy" name="check" onChange={(e) => this.checkboxMode(e)}/>
            //     Online <input type="checkbox" value="online" name="check" onChange={(e) => this.checkboxMode(e)}/>
            //     </label>

            //     <label> Dodatkowe uwagi:
            //         <textarea  placeholder="Wpisz dodatkowe uwagi" value={this.state.text} onChange={this.handleTextChange}></textarea>
            //     </label>
                
            // <input className="formSubmit" type="submit" value="Dodaj wykładowcę" /*onClick={this.submitForm}*//>
            // </form>
            <Container>
                <Form className="addLecturerForm"onSubmit={this.handleSubmit}>
                <Row className="justify-content-md-center">
                    
                        <Form.Group controlId="nameSection">
                            <Form.Label>Imię:</Form.Label>
                            <Form.Control type="text" placeholder="Wpisz imię" value={this.state.name} onChange={this.handleNameChange}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="surnameSection">
                            <Form.Label>Nazwisko:</Form.Label>
                            <Form.Control type="text" placeholder="Wpisz nazwisko" value={this.state.surname} onChange={this.handleSurnameChange} ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="mailSection">
                            <Form.Label>Mail:</Form.Label>
                            <Form.Control type="email" placeholder="Wpisz e-mail" value={this.state.email}onChange={this.handleMailChange}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="numberSection">
                            <Form.Label>Numer telefonu:</Form.Label>
                            <Form.Control type="text" placeholder="Numer telefonu" value={this.state.phone} onChange={this.handlePhoneChange}></Form.Control>
                        </Form.Group>
                </Row>
                
                <Form.Group as={Row}>
                    <Form.Label as="legend" column sm={2}> Kurs: </Form.Label>
                    <Col sm={10}>
                        <Form.Check
                            type="checkbox"
                            label="JavaScript"
                            //name="formHorizontalRadios"
                            //id="formHorizontalRadios1"
                            value="javascript"
                            onChange={(e) => this.checkboxCourses(e)}
                        />
                        <Form.Check
                            type="checkbox"
                            label="Java"
                           // name="formHorizontalRadios"
                            //id="formHorizontalRadios2"
                            value="java"
                            onChange={(e) => this.checkboxCourses(e)}
                        />
                        <Form.Check
                            type="checkbox"
                            label="Python"
                           // name="formHorizontalRadios"
                            //id="formHorizontalRadios3"
                            value="python"
                            onChange={(e) => this.checkboxCourses(e)}
                        />
                        <Form.Check
                            type="checkbox"
                            label="PHP"
                           // name="formHorizontalRadios"
                           // id="formHorizontalRadios3"
                            value="php"
                            onChange={(e) => this.checkboxCourses(e)}
                        />
                        <Form.Check
                            type="checkbox"
                            label="UX Design"
                           // name="formHorizontalRadios"
                           // id="formHorizontalRadios3"
                            value="ux"
                            onChange={(e) => this.checkboxCourses(e)}
                        />
                        <Form.Check
                            type="checkbox"
                            label="Tester Manualny"
                            //name="formHorizontalRadios"
                           // id="formHorizontalRadios3"
                            value="testermanualny"
                            onChange={(e) => this.checkboxCourses(e)}
                        />
                        <Form.Check
                            type="checkbox"
                            label="Tester Automatyzujący"
                           // name="formHorizontalRadios"
                           // id="formHorizontalRadios3"
                            value="testerautomatyzujący"
                            onChange={(e) => this.checkboxCourses(e)}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label as="legend" column sm={2}> Lokalizacja: </Form.Label>
                    <Col sm={10}>
                        <Form.Check
                            type="checkbox"
                            label="Warszawa"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                            value="Warszawa"
                            onChange={(e) => this.checkboxLocalization(e)}
                        />
                        <Form.Check
                            type="checkbox"
                            label="Wrocław"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                            value="Wrocław"
                            onChange={(e) => this.checkboxLocalization(e)}
                        
                        />
                        <Form.Check
                            type="checkbox"
                            label="Poznań"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios3"
                            value="Poznań"
                            onChange={(e) => this.checkboxLocalization(e)}
                        />
                        <Form.Check
                            type="checkbox"
                            label="Kraków"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios3"
                            value="Kraków"
                            onChange={(e) => this.checkboxLocalization(e)}
                        />
                        <Form.Check
                            type="checkbox"
                            label="Katowice"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios3"
                            value="Katowice"
                            onChange={(e) => this.checkboxLocalization(e)}
                        />
                        <Form.Check
                            type="checkbox"
                            label="Zdalnie"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios3"
                            value="Zdalnie"
                            onChange={(e) => this.checkboxLocalization(e)}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label as="legend" column sm={2}> Tryb prowadzenia zajęć: </Form.Label>
                    <Col sm={10}>
                        <Form.Check
                            type="checkbox"
                            label="Stacjonarny"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                            value="stacjonarny"
                            onChange={(e) => this.checkboxMode(e)}
                        />
                        <Form.Check
                            type="checkbox"
                            label="Weekendowy"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                            value="weekendowy"
                            onChange={(e) => this.checkboxMode(e)}
                        />
                        <Form.Check
                            type="checkbox"
                            label="Online"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios3"
                            value="online"
                            onChange={(e) => this.checkboxMode(e)}
                        />
                    </Col>
                </Form.Group>
                <Row className="justify-content-md-center">
                <Form.Group controlId="Remarks">
                            <Form.Label>Uwagi:</Form.Label>
                            <Form.Control type="textarea" placeholder="Uwagi"value={this.state.text} onChange={this.handleTextChange} ></Form.Control>
                        </Form.Group>
                        </Row>
                        <Button variant="primary" type="submit">
    Submit
  </Button>
                        </Form>
            </Container>
            
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