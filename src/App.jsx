import React, { useState } from 'react'
import validator from 'validator';
import './app.css'
function App() {
  const [errorMessage, setErrorMessage] = useState('');

  const validate = (value) =>{
    if(validator.isStrongPassword(value,{
      minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1
    })){
      setErrorMessage('Is strong Password')
    }else{
      setErrorMessage('Type something strong password')
    }
  }
  return (
    <div className='password-box'>
      <pre>
        <h2>
          Checking password length in React Js
        </h2>
        <span>Enter Password:</span>
        <input type="text" onChange={(e)=>validate(e.target.value)}/> <br />
        {errorMessage === "" ? null:
        <span style={{
          fontWeight: 'bold',
          color: 'red'
        }}>{errorMessage}</span> }
      </pre>

    </div>
  )
}

export default App