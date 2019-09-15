import React, { Component } from 'react'
import '../Finder/Finder.scss'

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

buttonClick = e => {
        e.preventDefault();
        console.log("Kliknęłam")
 }

    render() {
        return (
            <div className="home">
                <input type="text"/>
                <button className="showLecturers" onClick={this.buttonClick}>Pokaż listę</button>
               <div className="lecturerListDiv">
               <ul className="lecturerList">
               <li>{this.state.lecturers[0]}</li>
               <li>{this.state.lecturers[1]}</li>
               <li>{this.state.lecturers[2]}</li>
               <li>{this.state.lecturers[3]}</li>
               <li>{this.state.lecturers[4]}</li>
               <li>{this.state.lecturers[5]}</li>
               <li>{this.state.lecturers[6]}</li>
               <li>{this.state.lecturers[7]}</li>
               <li>{this.state.lecturers[8]}</li>
               <li>{this.state.lecturers[9]}</li>
               </ul>
               </div>
            </div>
        )
    }
}

export default Finder;


