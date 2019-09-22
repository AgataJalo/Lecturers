import React, { Component } from 'react'
import '../Calendar/Calendar.scss'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Calendar extends Component {
  constructor() {
    super()

    this.state = {
      dateFrom: "2019-09-01",
      dateTo: "2019-09-06",
      lecturerList: [],
      localization: "Warszawa",
      course: "Python"
    };
    console.log(this.state);
    this.clickButton = this.clickButton.bind(this);
  }

  handleDateFrom = e => {
    this.setState({ dateFrom: e.target.value });
  };

  handleDateTo = e => {
    this.setState({ dateTo: e.target.value });
  };

  handleLocalization = e =>{
    this.setState({ localization: e.target.value });
  }

  handleCourse= e =>{
    this.setState({ course: e.target.value });
  }

  clickButton(e) {
    let lecturerFetch = fetch("http://localhost:8000/lecturers")
      .then(resp => resp.json())

    let lecturesFetch = fetch("http://localhost:8000/lectures")
      .then(resp => resp.json())
      .then(lectures => lectures.filter(lecture => {
        let lectureDate = new Date(lecture.date)
        return (lectureDate.getTime() >= new Date(this.state.dateFrom).getTime() && lectureDate.getTime() <= new Date(this.state.dateTo).getTime())
      }))

    Promise.all([lecturerFetch, lecturesFetch])
      .then(data => {
        let lecturers = data[0]
        let lectures = data[1]
        return lecturers.filter(lecturer => {
          let lecturerLectures = lectures.filter(lecture => lecture.lecturerId === lecturer.id)
          let isFree = lecturerLectures.length === 0
          let correctTechnology = lecturer.course.includes(this.state.course)
          let correctLocalization = lecturer.localization.includes(this.state.localization)
          return (isFree && correctTechnology && correctLocalization)
        })

      })
      .then(result => this.setState({
        lecturerList: result
      }))
  }

  render() {
    return (
      <Container>

        <Form>
          <Row>
            <Form.Group as={Col} controlId="fromDateSection">
              <Form.Label>Od:</Form.Label>
              <Form.Control type="text" placeholder="Od" value={this.state.dateFrom} onChange={this.handleDateFrom}></Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="stoDateSection">
              <Form.Label>Do:</Form.Label>
              <Form.Control type="text" placeholder="Do" value={this.state.dateTo} onChange={this.handleDateTo} ></Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
              <Form.Label>Lokalizacja:</Form.Label>
              <Form.Control as="select" value ={this.state.localization} onChange={this.handleLocalization}>
                <option>Warszawa</option>
                <option>Poznań</option>
                <option>Wrocław</option>
                <option>Kraków</option>
                <option>Katowice</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
              <Form.Label>Kurs:</Form.Label>
              <Form.Control as="select" value ={this.state.course} onChange={this.handleCourse}>
                <option>JavaScript</option>
                <option>Java</option>
                <option>PHP</option>
                <option>Python</option>
                <option>UX Design</option>
                <option>Tester Manualny</option>
                <option>Tester Automatyzujący</option>
              </Form.Control>
            </Form.Group>
           
          </Row>
        </Form>
        <Row> <Button  as={Col} onClick={this.clickButton}>Szukaj</Button></Row>
        <Row>
          {this.state.lecturerList.map(function (lecturer, key) {
            return <Card key={key}>
              <Card.Body>
                <Card.Title>{lecturer.name} {lecturer.surname}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          })}
        </Row>
      </Container>
    );
  }
};

export default Calendar;