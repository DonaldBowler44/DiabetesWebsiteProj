import { useState } from 'react';
import './CalCalculator.css';

function CalCalculator() {
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [hinch, setHinch] = useState(0);
  const [age, setAge] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  let calcBmi = (event) => {
    //prevent submitting
    event.preventDefault()

    if (weight === 0 || height === 0 || hinch === 0 || age === 0) {
      alert('Please enter a valid weight and height')
    } else {
    
    if (gender === "Male")
    {
    let bmi = (66 + (6.2 * parseFloat(weight) ) + (12.7 * (( parseInt(height) * 12) + parseInt(hinch) )) -(6.76 * parseInt(age) ));
    setBmi(bmi.toFixed(1));
    }
    else if(gender === "Female")
    {
      let bmi = (655.1 + (4.35 * parseFloat(weight) ) + (4.7 * (( parseInt(height) * 12) + parseInt(hinch) )) -(4.7 * parseInt(age) ));
      setBmi(bmi.toFixed(1));
    }

      // Logic for message

    }
  }

  let reload = () => {
    window.location.reload()
  }

    return (
        <div className="app">
      <div className='container'>
        <h2 className='center'>Calorie Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Female:</label>
            <input type="radio" value="Female" onChange={(e) =>setGender(e.target.value)} />
            <label>Male:</label>
            <input type="radio" value="Male" onChange={(e) =>setGender(e.target.value)} />
          </div>
          <div>
            <label>Weight (lbs)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height (ft)</label>
            <input value={height} onChange={(event) => setHeight(event.target.value)} />
          </div>
          <div>
          <label>Height (in) </label>
            <input value={hinch} onChange={(e) => setHinch(e.target.value)} />
          </div>
          <div>
          <label>Age in years (up to 120 years) </label>
            <input value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
          </div>
        </form>

        <div className='center'>
          <h3>Your Calorie amount is: {bmi}</h3>
          <p>{message}</p>
        </div>

      </div>
    </div>
    );
}

  export default CalCalculator;

// this works, save it for male bmi   let bmi = (66 + (6.2 * parseFloat(weight) ) + (12.7 * (( parseInt(height) * 12) + parseInt(hinch) )) -(6.76 * parseInt(age) ));