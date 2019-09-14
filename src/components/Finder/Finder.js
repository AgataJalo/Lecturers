import React, { Component } from 'react'

class Finder extends Component {
  constructor(props){
      super(props);
      this.state={
          lecturers: []
      };
  }

componentDidMount(){
    let url ="http://localhost:8000/lecturers"
    fetch(url)
    .then(resp => resp.json())
    .then(data=> {
        let lecturers =data.map((info, index) => {
            return(
                <div key={index}>
                    <span>
                    Imię : {info.name + ' '}
                    Nazwisko: {info.surname + ' '}
                    Telefon: {info.phone + ' '}
                    Mail: {info.email + ' '}
                    </span>
                </div>
            )
    })
    this.setState({lecturers:lecturers});
})
}



    render() {
        return (
            <div className="home">
                <input type="text"/>
               {this.state.lecturers}
            </div>
        )
    }
}

export default Finder;
