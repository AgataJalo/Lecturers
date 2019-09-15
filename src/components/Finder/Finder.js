import React, { Component } from 'react'
import '../Finder/Finder.scss'

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
              return <li key={key}>{user.id}{user.name} {user.surname} {user.phone} {user.email}{user.course}{user.localization}{user.mode}{user.comments}</li> 
          })}
        </ul>
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
            <div>
                <Search/>
            </div>
        )
    }
}

export default FinderComponents;