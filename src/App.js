import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Form, Button} from "react-bootstrap"

function App() {




  const handleSubmit = (event) => {
    event.preventDefault();
    //calculate BMI here

    //The formula for BMI is weight in kilograms divided by height in meters squared. If height has been measured in centimeters, divide by 100 to convert this to meters.
    //event.target.elements.formBasicWeight.value
    //event.target.elements.formBasicHeight.value

    const weight = event.target.elements.formBasicWeight.value;
    const height = event.target.elements.formBasicHeight.value;

    const bmi = weight / Math.pow(height / 100, 2);
      function messageBmi(bmi) {
        if (bmi < 18.5) {
          return "You're Underweight";
        } else if (bmi > 18.5 && bmi < 24.9) {
          return "You're Healthy";
        } else if (bmi > 25 && bmi < 29.9) {
          return "You're overweight";
        } else {
          return "You are obese.";
        }
      }
    alert(messageBmi(bmi));

  };

  function messageBmi(bmi) {
      if (bmi < 18.5) {
        return "You're Underweight";
      } else if (bmi > 18.5 && bmi < 24.9) {
        return "You're Healthy";
      } else if (bmi > 25 && bmi < 29.9) {
        return "You're overweight";
      } else {
        return "You are obese.";
      }
    }

  return (
    <div className="App container">
      
      <Form className="Form" onSubmit={handleSubmit}>
  <Form.Group controlId="formBasicWeight">
    <Form.Label>Your weight</Form.Label>
    <Form.Control type="test" placeholder="Enter your weight" />
  </Form.Group>

  <Form.Group controlId="formBasicHeight">
    <Form.Label>Your Height</Form.Label>
    <Form.Control type="text" placeholder="Enter your height" />
  </Form.Group>

  <Button type="button" class="btn btn-success" type="submit">
    Calculate BMI
  </Button>
</Form>
    </div>
  );
}

export default App;
