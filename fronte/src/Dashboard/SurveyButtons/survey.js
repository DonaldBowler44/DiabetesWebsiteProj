import './survey.css';
import Dropdown from './shared/dropdown/dropdown';
import { useState } from 'react';

function Survey() {
    const [hidden, setHidden] = useState(true);
    const [scoreCount, setScoreCount] = useState(0);

    const handleScoreCountIncrement = () =>
    {
        setScoreCount(scoreCount + 1);
        console.log(scoreCount);
    }

    const handleScoreCountNo = () =>
    {
      setScoreCount(scoreCount - 1);
        console.log(scoreCount);
    }

    // Pacific islanders, American Indians, African American and asians have the highest chances of obtaining diabetes. 
    const options = [
        { value: "African American", label: "African American" },
        { value: "Asian", label: "Asian"},
        { value: "American Indian", label: "American Indian" },
        { value: "Alaskan Native", label: "Alaskan Native"}
    ];


  return (
    <div className="SurveyApp">
      <header className="surveyApp-header">
        <h1 className='headerOne'>
          This is a survey for determining Risk for Type 2 Diabetus!
        </h1>
      </header>
        <div className="qlist">
        <div className="question1">
            <p className='paraStyle'>Are 45 years or older?</p>
            <button className='buttonEffects' onClick={handleScoreCountIncrement}> Yes </button>
            <button className='buttonEffects'> No </button>
        </div>
        <div className="question2">
            <p className='paraStyle'>Are you at risk of being obese or considered overweight?</p>
            <button className='buttonEffects' onClick={handleScoreCountIncrement}> Yes </button>
            <button className='buttonEffects' > No </button>
        </div>
        <div className="question3">
            <p className='paraStyle'>Have a sibling, parent, or family member with type 2 diabetes?</p>
            <button className='buttonEffects' onClick={handleScoreCountIncrement}> Yes </button>
            <button className='buttonEffects'> No </button>
        </div>
        <div className="question4">
            <p className='paraStyle'>Are physically less active less than 3 times a week?</p>
            <button className='buttonEffects' onClick={handleScoreCountIncrement}> Yes </button>
            <button className='buttonEffects' onClick={handleScoreCountNo}> No </button>
        </div>
        <div className="question5">
            <p className='paraStyle'>Have ever had gestational diabetes or given birth to a baby weighing over 9 pounds?</p>
            <button className='buttonEffects' onClick={handleScoreCountIncrement}> Yes </button>
            <button className='buttonEffects' > No </button>
        </div>
        <div className="question6">
            <p className='paraStyle'>Have been diagnosed with non-alocholic fatty liver disease?</p>
            <button className='buttonEffects' onClick={handleScoreCountIncrement}> Yes </button>
            <button className='buttonEffects' > No </button>
        </div>
        <div className="question7">
            <p className='paraStyle'>Have a diet mostly filled with processed and high in sugar/fat foods?</p>
            <button className='buttonEffects' onClick={handleScoreCountIncrement}> Yes </button>
            <button className='buttonEffects' > No </button>
        </div>
        <div className="question8">
            <p className='paraStyle'> The following ethnicities have the highest chances of developing Type 2 diabetes.</p>
            <p className='paraStyle'>Please choose one or more if you belong to these ethnicities groups, if not, please leave blank.</p>
            <Dropdown
              isSearchable
              isMulti
              placeHolder="Select..."
              options={options}
              // onChange={(value) => console.log(value)}
              onChange={handleScoreCountIncrement}

            />
        </div>

        </div>
        <div className="calculate">
          
          <button className='buttonEffectsForResults' onClick={() =>setHidden(s => !s)}>Show Results</button>
          {!hidden ? 
          <div className='showR'> 
          <p className='resultText'>Your diabetes risk score is {scoreCount}!</p> 
          <p className='resultText'>If score is lesser than or equal to 4, you are at low risk for diabetes. </p>
          <p className='resultText'>If score is greater than 4 but less than 7, you are at moderate risk for diabetes, adjustments to lifestyle and education on prediabetes is reccomended. </p>
          <p className='resultText'>If score is equal to or greater than 7, you are high risk for diabetes, screening with a doctor is advised. </p>
          </div> 
          : null}
        </div>
    </div>
  );
}

export default Survey;