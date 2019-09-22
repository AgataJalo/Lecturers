import React, { Component } from 'react';
import '../Finder/Finder.scss';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Alert from 'react-bootstrap/Alert'

//Wyszukiwarka//

class Search extends Component {
    constructor() {
      super();    
      
      this.state = {
        filteredUsers: []
      };
    }

    componentDidMount(){
        let url ="http://localhost:8000/lecturers"
        fetch(url)
        .then(resp => resp.json())
        .then(data=> {
            this.setState({ 
                lecturers: data,
                filteredUsers: data
            });
        })
    }
  
    filterUsers(e) {
      const text = e.currentTarget.value;
      const filteredUsers = this.getFilteredUsersForText(text);

      this.setState({
        filteredUsers: filteredUsers
      })
    }
    
    getFilteredUsersForText(text) {
        return this.state.lecturers.filter(function(user){
            return JSON.stringify(user).toLowerCase().includes(text.toLowerCase());
        });
    }
    
    render () {
    return (
      <Container>
        <Row><InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default"><i className="fas fa-search"></i></InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl onInput={this.filterUsers.bind(this)} />
        </InputGroup></Row>
        <Row><UsersList users={this.state.filteredUsers} /></Row>
      </Container>
    );
  }
};
  
  const UsersList = ({ users }) => {
    if (users.length > 0) {
      return (
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ID:</th>
              <th>Imię:</th>
              <th>Nazwisko:</th>
              <th>Numer telefonu:</th>
              <th>Mail:</th>
              <th>Kurs:</th>
              <th>Tryb:</th>
              <th>Lokalizacja:</th>
              <th>Uwagi:</th>
            </tr>
          </thead>
          <tbody>
          {users.map(function(user, key){
             // return <li key={key}>{user.id}{user.name} {user.surname} {user.phone} {user.email}{user.course}{user.localization}{user.mode}{user.comments}</li> 
              return <tr key={key}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.surname}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.course}</td>
                <td>{user.mode}</td>
                <td>{user.localization}</td>
                <td>{user.comments}</td>
                </tr>
          })}
          </tbody>
        </Table>
      );
    }
  
    return (
      <Col>
      <Alert variant="danger">
        <Alert.Heading>Ups!</Alert.Heading>
        <p>
            Nie ma osoby spełniającej dane kryteria.
        </p>
        <hr />
        <p className="mb-0">
        Zgłoś się do HRów, poszukają :) !
      </p>
      </Alert>
      </Col>
      
    );
  };

//Wywołanie//

class FinderComponents extends Component{
    render(){
        return (
              <Search/>
        )
    }
}

export default FinderComponents;