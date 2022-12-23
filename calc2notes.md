import { useState } from 'react';
import './CalCalculator.css';

const CalCalculator = () => {
    const [gender, setGender] = useState(0);
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [inch, setInch] = useState(0);
    const [age, setAge] = useState('');

    const genderChange=(e)=>{
        setGender(e.target.value);
        console.log(gender);
    }

    const weightChange=(e)=> {
        setWeight(e.target.value);
        console.log(Number(weight));
    }

    const heightChange=(e)=>
    {
        setHeight(e.target.value);
        console.log(Number(height));
    }

    const inchChange=(e)=>{
        setInch(e.target.value);
        console.log(Number(inch));
    }

    
    const ageChange=(e)=>{
        setAge(e.target.value);
        console.log(Number(age));
    }

    function fMenBMR(weight, height, inch, age)
    {
        return (66 + (6.2 * weight) + (12.7 * ((height * 12) + inch)) -(6.76 * age));
    }
    

    const calculateBMR = (event) => {
        if(weight === 0 || height === 0 )
        {
            alert('Please enter a valid weight and height');
        }
    }
    return (
      <div className="calcalcApp">
        <header>
            {/* <h1 className='HeadCalc'>The original Harris–Benedict equations</h1> */}
            The original Harris–Benedict equations
        </header>

        <p>
            BMR calculation for men (imperial): BMR = 66 + ( 6.2 × weight in pounds ) + ( 12.7 × height in inches ) – ( 6.76 × age in years )
        </p>
        <p>
            BMR calculation for women (imperial): BMR = 655.1 + ( 4.35 × weight in pounds ) + ( 4.7 × height in inches ) - ( 4.7 × age in years )
        </p>
        <table>
  <tbody>
    <tr>
      <td>Little to no exercise</td>
      <td>Daily kilocalories needed = BMR x 1.2</td>
    </tr>
    <tr>
      <td>Light exercise (1–3 days per week)</td>
      <td>Daily kilocalories needed = BMR x 1.375</td>
    </tr>
    <tr>
      <td>Moderate exercise (3–5 days per week)</td>
      <td>Daily kilocalories needed = BMR x 1.55</td>
    </tr>
    <tr>
      <td>Heavy exercise (6–7 days per week)</td>
      <td>Daily kilocalories needed = BMR x 1.725</td>
    </tr>
    <tr>
      <td>Very heavy exercise (twice per day, extra heavy workouts)</td>
      <td>Daily kilocalories needed = BMR x 1.9</td>
    </tr>
  </tbody>
</table>
<hr></hr>
<p>Step 1: Gender</p>
<br></br>
<label>
  Female:
<input type="radio" id="genderF" name="gender" value="Female" onChange={genderChange} />
</label>

<label>
  Male:
<input type="radio" id="genderM" name="gender" value="Male" onChange={genderChange} />
</label>

<br></br>
<hr></hr>
<p>Step 2: Calcuate your calories (BMR)</p>
<br></br>
<label>
    Weight in pounds (Up to 999 lbs):
<input type="number" id="weight" min="o" max="999" onChange={weightChange} />
</label>
<br></br>
<label>
    Height in feet (Up to 8 ft):
<input type="number" id="heightFeet" min="0" max="8" onChange={heightChange} />
</label>
<label>
    Inches (Up to 11 in):
<input type="number" id="heightInches" min="0" max="11" onChange={inchChange}  />
</label>

<br></br>

<label>
    Age in years (Up to 120 years):
<input type="number" id="age" min="0" max="120" onChange={ageChange}  />
</label>

<br></br>

<p> Step 3: </p>
<button type="button" onClick={fMenBMR} >Calculate BMR</button>

<br></br>
<hr></hr>
<br></br>

<p> Step 4: Workouts a week (TDEE) </p>
<select id="tdee">
  <option value="1.2">Sedentary (Very little or no exercise, and desk job)</option>
  <option value="1.375">Lightly Active (Light exercise 1 to 3 days per week)</option>
  <option value="1.55">Moderately Active (Moderate exercise 3 to 5 days per week)</option>
  <option value="1.725">Very Active (Heavy exercise 6 to 7 days per week)</option>
  <option value="1.9">Extremely Active (Very intense exercise, and physical job, exercise multiple times per day)</option>
</select>

<hr></hr>

<p> Step 5: </p>
<button type='button' onClick={calculateBMR}>Calculate BMR + TDEE</button>

<br></br>
<hr></hr>
</div>
    );
  }
  
  export default CalCalculator;