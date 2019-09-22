import React, { Component } from 'react';
import '../Finder/Finder.scss';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

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
            <InputGroup.Text id="inputGroup-sizing-default">Szukaj</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl onInput={this.filterUsers.bind(this)} 
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup></Row>
        <Row><UsersList users={this.state.filteredUsers} /></Row>
      </Container>
    );
  }
};
  
  const UsersList = ({ users }) => {
    if (users.length > 0) {
      return (
        <Row>
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
        </Row>
      );
    }
  
    return (
      <p>Nie ma takiej osoby! Zgłoś się do HRów, poszukają :) !</p>
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