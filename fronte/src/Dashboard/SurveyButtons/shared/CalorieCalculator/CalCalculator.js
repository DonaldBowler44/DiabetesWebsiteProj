import { useState } from 'react';
import './CalCalculator.css';

function CalCalculator() {
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [hinch, setHinch] = useState(0);
  const [age, setAge] = useState(0);
  const [bmi, setBmi] = useState('');
  const [tdee, setTdee] = useState('');

  let calcBmi = (event) => {
    //prevent submitting
    event.preventDefault()

    if (weight === 0 || height === 0 || hinch === 0 || age === 0) {
      alert('Please enter a valid weight and height')
    } else {
    
    if (gender === "Male")
    {
    let bmi = ( Number(tdee) * (66 + (6.2 * parseFloat(weight) ) + (12.7 * (( parseInt(height) * 12) + parseInt(hinch) )) -(6.76 * parseInt(age) ) ) );
    setBmi(bmi.toFixed(1));


    }
    else if(gender === "Female")
    {
      let bmi = ( Number(tdee) * (655.1 + (4.35 * parseFloat(weight) ) + (4.7 * (( parseInt(height) * 12) + parseInt(hinch) )) -(4.7 * parseInt(age) ) ) );
      setBmi(bmi.toFixed(1));

      // total = (bmi * Number(tdee) );
      // setTotal(total.toFixed(1)); 

    }

     //let total =(Number(bmi) * Number(tdee) );
     

      // Logic for message

    }
  }

  let reload = () => {
    window.location.reload()
  }

    return (
        <div className="Calcapp">
      <div className='Calccontainer'>
        <h2 className='center'>BMR Calorie Calculator</h2>
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
          {/* this is where options go */}
          <div>
            <label>Sedentary (Very little or no exercise, and desk job)</label>
            <input type="radio" value="1.2" onChange={(e) =>setTdee(e.target.value)} />
          </div>
          <div>
            <label>Lightly Active (Light exercise 1 to 3 days per week)</label>
            <input type="radio" value="1.375" onChange={(e) =>setTdee(e.target.value)} />
          </div>
          <div>
            <label>Moderately Active (Moderate exercise 3 to 5 days per week)</label>
            <input type="radio" value="1.55" onChange={(e) =>setTdee(e.target.value)} />
          </div>
          <div>
            <label>Very Active (Heavy exercise 6 to 7 days per week)</label>
            <input type="radio" value="1.725" onChange={(e) =>setTdee(e.target.value)} />
          </div>
          <div>
            <label>Extremely Active (Very intense exercise, and physical job, exercise multiple times per day)</label>
            <input type="radio" value="1.9" onChange={(e) =>setTdee(e.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
          </div>
        </form>

        <div className='center'>
          <h3>Your BMR Calorie daily amount is: {bmi}</h3>
        </div>

      </div>
    </div>
    );
}

  export default CalCalculator;

// this works, save it for male bmi   let bmi = (66 + (6.2 * parseFloat(weight) ) + (12.7 * (( parseInt(height) * 12) + parseInt(hinch) )) -(6.76 * parseInt(age) ));