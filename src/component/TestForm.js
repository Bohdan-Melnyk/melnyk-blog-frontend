import axios from 'axios';
import React, { useState } from 'react';

const TestForm = () => {
    return (
        <form onSubmit={request}>
          <label>
            Date of Birth:
            <input 
              type="date" 
              name="dateOfBirth"  
              required 
            />
          </label>
          <br />
          <label>
            Status:
            <select 
              name="status"  
              required 
            >
              <option value="ACTIVE">Active</option>
              <option value="INACTIVE">Inactive</option>
            </select>
          </label>
          <br />
          <label>
            First Treatment Date:
            <input 
              type="date" 
              name="firstTreatmentDate" 
              required 
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      );
};

function request() {
  let one = document.getElementsByName("dateOfBirth")[0].value;
  let two = document.getElementsByName("status")[0].value;
  let three = document.getElementsByName("firstTreatmentDate")[0].value;

  const data = {
    dateOfBirth: one,
    status: two,
    firstTreatmentDate: three
  };

  const response = fetch('http://localhost:8080/assessments', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(res => console.log(res))
  .catch(err => console.log(err));
}



// const sendData = () => {
//     debugger;
//     let one = document.getElementsByName("dateOfBirth")[0].value;
//     let two = document.getElementsByName("status")[0].value;
//     let three = document.getElementsByName("firstTreatmentDate")[0].value;

//     axios.post('/assessments', {
//         dateOfBirth: one,
//         status: two,
//         firstTreatmentDate: three
//     })
//     .then(function(response) {
//         console.log(response);
//     })
//     .catch(function(error) {
//         console.log(error);
//     });
// }

export default TestForm;
