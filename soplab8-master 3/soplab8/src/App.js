import React, { Component } from 'react'

import Calendar from 'react-calendar';
import logo from './logo.svg';
import './App.css';
import 'react-calendar/dist/Calendar.css';
import { Button, Modal, ListGroup, InputGroup, FormControl } from 'react-bootstrap';
import './bootstrap.min.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            show: false,
            displayDate: "",
            listOfMeals: [],
            listOfMealsBreakfast: [],
            listOfMealsLunch: [],
            listOfMealsDinner: [],
            pendingMeal: "",
            pendingMealBreakfast: "",
            pendingMealLunch: "",
            pendingMealDinner: ""
        }
        this.onChange = this.onChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.addMealBreakfast = this.addMealBreakfast.bind(this);
        this.addMealLunch = this.addMealLunch.bind(this);
        this.addMealDinner = this.addMealDinner.bind(this);
        this.onChangeMealBreakfast = this.onChangeMealBreakfast.bind(this);
        this.onChangeMealLunch = this.onChangeMealLunch.bind(this);
        this.onChangeMealDinner = this.onChangeMealDinner.bind(this);
        this.parseFoods = this.parseFoods.bind(this);
    }
    onChange(e) {
        let newDate = e.toString().split("00")[0]
        this.setState({
            show: true,
            displayDate: newDate
        })
    }
    handleClose() {
        this.setState({
            show: false
        })
    }

    onChangeMealBreakfast(e) {
        this.setState({
            pendingMealBreakfast: e.target.value
        })
    }
    addMealBreakfast() {
        console.log("adding meal........")
        console.log(this.state.pendingMealBreakfast)
        let tempMealDate = this.state.displayDate.replace(/\s/g, '');
        let tempObj = {meal: this.state.pendingMealBreakfast, day: tempMealDate}
        let tempListOfMeals = this.state.listOfMealsBreakfast
        tempListOfMeals.push(tempObj)
        console.log(tempObj)
        this.setState({
            listOfMealsBreakfast: tempListOfMeals,
            pendingMealBreakfast: ""
        })
    }

    onChangeMealLunch(e) {
        this.setState({
            pendingMealLunch: e.target.value
        })
    }
    addMealLunch() {
        console.log("adding meal........")
        console.log(this.state.pendingMealLunch)
        let tempMealDate = this.state.displayDate.replace(/\s/g, '');
        let tempObj = {meal: this.state.pendingMealLunch, day: tempMealDate}
        let tempListOfMeals = this.state.listOfMealsLunch
        tempListOfMeals.push(tempObj)
        this.setState({
            listOfMealsLunch: tempListOfMeals,
            pendingMealLunch: ""
        })
    }

    onChangeMealDinner(e) {
        this.setState({
            pendingMealDinner: e.target.value
        })
    }
    addMealDinner() {
        console.log("adding meal........")
        console.log(this.state.pendingMealDinner)
        let tempMealDate = this.state.displayDate.replace(/\s/g, '');
        let tempObj = {meal: this.state.pendingMealDinner, day: tempMealDate}
        let tempListOfMeals = this.state.listOfMealsDinner
        tempListOfMeals.push(tempObj)
        this.setState({
            listOfMealsDinner: tempListOfMeals,
            pendingMealDinner: ""
        })
    }

    parseFoods(listOfFoods) {
        if (listOfFoods.length === 0) {
            return []
        }
        let tempMealDate = this.state.displayDate.replace(/\s/g, '');
        let foodList = []
        listOfFoods.forEach(function(food) {
            if (food.day === tempMealDate) {
                foodList.push(food)
            }
        })
        return (foodList)
    }
    render() {
        let { date } = this.state
        return (
            <div className="App">
              <header className="App-header">
                  <div style={{width: "50%"}}>
                      <Calendar
                          onChange={this.onChange}
                          value={this.state.date}
                      />
                  </div>
                  <Modal show={this.state.show} onHide={this.handleClose}>
                      <Modal.Header closeButton>
                          <Modal.Title>Meals for: {this.state.displayDate}</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                          <h6>Breakfast</h6>
                          <ListGroup>
                              {this.parseFoods(this.state.listOfMealsBreakfast).length === 0 ? (<ListGroup.Item>No breakfast meals for this day</ListGroup.Item>)
                                  :
                                  (<div>
                                      {this.parseFoods(this.state.listOfMealsBreakfast).map((meal) => <ListGroup.Item>{meal.meal}</ListGroup.Item>)}
                                  </div>)
                              }
                          </ListGroup>
                          <br/>
                          <ListGroup>
                              <h6>Add a new meal</h6>
                              <InputGroup className="mb-3">
                                  <FormControl
                                      placeholder="Name of Meal"
                                      aria-label="Recipient's username"
                                      aria-describedby="basic-addon2"
                                      onChange={this.onChangeMealBreakfast}
                                      value={this.state.pendingMealBreakfast}
                                  />
                                  <InputGroup.Append>
                                      <Button variant="outline-secondary" onClick={this.addMealBreakfast}>Add</Button>
                                  </InputGroup.Append>
                              </InputGroup>
                          </ListGroup>
                      </Modal.Body>
                      <div>
                          <hr/>
                      </div>
                      <Modal.Body>
                          <h6>Lunch</h6>
                          <ListGroup>
                              {this.parseFoods(this.state.listOfMealsLunch).length === 0 ? (<ListGroup.Item>No lunch meals for this day</ListGroup.Item>)
                                  :
                                  (<div>
                                      {this.parseFoods(this.state.listOfMealsLunch).map((meal) => <ListGroup.Item>{meal.meal}</ListGroup.Item>)}
                                  </div>)
                              }
                          </ListGroup>
                          <br/>
                          <ListGroup>
                              <h6>Add a new meal</h6>
                              <InputGroup className="mb-3">
                                  <FormControl
                                      placeholder="Name of Meal"
                                      aria-label="Recipient's username"
                                      aria-describedby="basic-addon2"
                                      onChange={this.onChangeMealLunch}
                                      value={this.state.pendingMealLunch}
                                  />
                                  <InputGroup.Append>
                                      <Button variant="outline-secondary" onClick={this.addMealLunch}>Add</Button>
                                  </InputGroup.Append>
                              </InputGroup>
                          </ListGroup>
                      </Modal.Body>
                      <div>
                          <hr/>
                      </div>
                      <Modal.Body>
                          <h6>Dinner</h6>
                          <ListGroup>
                              {this.parseFoods(this.state.listOfMealsDinner).length === 0 ? (<ListGroup.Item>No dinner meals for this day</ListGroup.Item>)
                                  :
                                  (<div>
                                      {this.parseFoods(this.state.listOfMealsDinner).map((meal) => <ListGroup.Item>{meal.meal}</ListGroup.Item>)}
                                  </div>)
                              }
                          </ListGroup>
                          <br/>
                          <ListGroup>
                              <h6>Add a new meal</h6>
                              <InputGroup className="mb-3">
                                  <FormControl
                                      placeholder="Name of Meal"
                                      aria-label="Recipient's username"
                                      aria-describedby="basic-addon2"
                                      onChange={this.onChangeMealDinner}
                                      value={this.state.pendingMealDinner}
                                  />
                                  <InputGroup.Append>
                                      <Button variant="outline-secondary" onClick={this.addMealDinner}>Add</Button>
                                  </InputGroup.Append>
                              </InputGroup>
                          </ListGroup>
                      </Modal.Body>
                      <Modal.Footer>
                          <Button variant="secondary" onClick={this.handleClose}>
                              Close
                          </Button>
                          <Button variant="primary" onClick={this.handleClose}>
                              Save Changes
                          </Button>
                      </Modal.Footer>
                  </Modal>
              </header>
            </div>
        );
  }

}

export default App;
