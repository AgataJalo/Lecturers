import React, { Component } from 'react'
import '../Calendar/Calendar.scss'

class Calendar extends Component {
    constructor() {
      super();    
      
      this.state = {
        filteredUsers: []
      };
    }

    componentDidMount(){
        let url ="http://localhost:8000/avaliability"
        fetch(url)
        .then(resp => resp.json())
        .then(data=> {
            this.setState({ 
                avaliability: data,
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
        return this.state.avaliability.filter(function(user){
            return JSON.stringify(user).toLowerCase().includes(text.toLowerCase());
        });
    }
    
    render () {
      return (
        <div>
          <input onInput={this.filterUsers.bind(this)} />
          <UsersList users={this.state.filteredUsers} />
        </div>
      );
    }
  };
  
  const UsersList = ({ users }) => {
    if (users.length > 0) {
      return (
        <ul>
          {users.map(function(user, key){
              return <li key={key}><span className="avaliability">{user.zajety}</span></li> 
          })}
        </ul>
      );
    }
  
    return (
      <p>Brak wolnej osoby na ten termin</p>
    );
  };

export default Calendar;