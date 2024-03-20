import React, { useState } from 'react';
import axios from 'axios';

function AxiosPost() {
  const [response, setResponse] = useState(null);

  const postData = async () => {
    try {
      const data = {
        dateOfBirth: '2000-02-22',
        status: 'ACTIVE',
        firstTreatmentDate: '2024-03-10'
      };

      const response = await axios.post('http://localhost:8080/assessments', data);
      setResponse(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <button onClick={postData}>Send POST Request</button>
      {response && <div>Response: {JSON.stringify(response)}</div>}
    </div>
  );
};

export default AxiosPost;
