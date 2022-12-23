import React from 'react';
import "./Treatment.css"
import HealthEat from "../../../../assets/HealthyEat.jpg";
import Exercise from "../../../../assets/Exercise.jpg";
import WeightLoss from "../../../../assets/WeightLoss.jpg";
import InsulinMed from "../../../../assets/InsulinMed.jpg";
import BloodSugar from "../../../../assets/BloodSugar.jpg";
import ImageSlider from '../ImageSlider/ImageSliderTwo';
import { SliderData } from '../ImageSlider/SliderData';
import CalCalculator from '../CalorieCalculator/CalCalculator';

import Walk from "../../../../assets/Walk.jpg";
import WaterAerobics from "../../../../assets/WaterAerobics.jpg";
import WeightTraining from "../../../../assets/WeightTraining.jpg";
import Yoga from "../../../../assets/YogaThree.jpg";
import TaiChi from "../../../../assets/TaiChi.jpeg";

const Treatment = () => {

	return (
		<div
			style={{
				justifyContent: 'center',
				height: '100vh'
			}}
		>
			<header>
				<h1 className='Treatheader'>Diabetes Treatment and Management</h1>
				<h2 className='Treatheader'>Management of type 2 Diabetes includes:</h2>
			</header>
			{/* This is where div images column and rows go, five images for treatment options 
		Healthy Eating, Regular exercise, Weight Loss, Diabetes medication/insulin therapy. blood sugar monitoring*/}
			<div className='imageGrid' >
				<div className='imgBox1'>
					<img src={HealthEat} alt="HealthyEating" height="120" width="120" className='imgStyle' />
					<p>Healthy Eating</p>
				</div>
				<div className='imgBox1'>
					<img src={Exercise} alt="Exercise" height="120" width="120" className='imgStyle' />
					<p>Regular Exercise</p>
				</div>
				<div className='imgBox1'>
					<img src={WeightLoss} alt="WeightLoss" height="120" width="120" className='imgStyle' />
					<p>Weight Loss</p>
				</div>
				<div className='imgBox1'>
					<img src={InsulinMed} alt="Insulin" height="120" width="120" className='imgStyle' />
					<p>Insulin Therapy</p>
				</div>
				<div className='imgBox1'>
					<img src={BloodSugar} alt="Insulin" height="120" width="120" className='imgStyle' />
					<p>Blood Sugar</p>
					<p>Monitoring</p>
				</div>
			</div>
			<div className='healthEatInfo'>
				{/* Healthy food slider= (1) Dark green leafy vegetables, (2) Berries (3) Fatty Fish, (4) Sweet Potatoes, (5) Citrus Fruits https://www.webmd.com/diabetes/foods-fight-type-2   */}
				<h className='Treatheader'>Healthy Food Choices for Diabetes include: </h>
				<div className="Is">
					<ImageSlider slides={SliderData} />
					<p className='paraStyleTwo'> (1) Dark green leafy vegetables </p>
					<p className='paraStyleTwo'> Green leafy vegetables have a low glycemic index, </p>
					<p className='paraStyleTwo'>so they'll keep blood sugar from spiking, and leafy vegetables contain magnesium</p>
					<p className='paraStyleTwo'>which aids in controlling insulin in the body.</p>

					<p className='paraStyleTwo'> (2) Berries </p>
					<p className='paraStyleTwo'> Berries are filled with antioxidants and vitamins. </p>
					<p className='paraStyleTwo'> Eating low-GI fruit along with a low-glycemic diet can </p>
					<p className='paraStyleTwo'> lower blood pressure and heart disease.</p>

					<p className='paraStyleTwo'> (3) Fatty Fish </p>
					<p className='paraStyleTwo'> Fish like mackrel, tuna, and salmon is filled with</p>
					<p className='paraStyleTwo'> healthy omega-3 fats which lower inflammation. </p>
					<p className='paraStyleTwo'> They can also protect against heart disease and an eye condition called diabetic retinopathy.</p>

					<p className='paraStyleTwo'> (4) Sweet Potatoes </p>
					<p className='paraStyleTwo'> Sweet Potato is filled with fiber and vitamin A, which keeps eyes healthy.</p>
					<p className='paraStyleTwo'> They also have vitamin C and potassium.</p>
					<p className='paraStyleTwo'> The bit of sweetness will satisfy whatever sweet tooth you have. </p>

					<p className='paraStyleTwo'> (5) Citrus Fruits </p>
					<p className='paraStyleTwo'> Citrus Fruits are filled with vitamin C, heart-helping folate and potassium. </p>
					<p className='paraStyleTwo'> It also contains fiber that will slow digestion, so it won't cause a spike in blood sugar.</p>

					<p className='paraStyleTwo'> For a more in-depth list of healthy videos, please visit: https://www.webmd.com/diabetes/foods-fight-type-2 </p>
				</div>


			</div>

			<div className='regExercise'>
				{/* Regular Exercise slider= (1) walking, (2) Water aerobics (3) Weight Training, (4) Yoga, (5) tai Chi https://www.goodrx.com/conditions/diabetes/best-exercise-for-diabetes-blood-sugar-management-weight-loss */}
				<h className='Treatheader'>Exercise for Diabetes includes: </h>
				<div className="IsTwo">
					{/* <ImageSliderTwo slides={SliderDataTwo} /> */}

					<div className='imageGrid' >
						<div className='imgBox1'>
							<img src={Walk} alt="HealthyEating" height="120" width="120" className='imgStyle' />
							<p>Walking</p>
						</div>
						<div className='imgBox1'>
							<img src={WaterAerobics} alt="Exercise" height="120" width="120" className='imgStyle' />
							<p>Water Aerobics</p>
						</div>
						<div className='imgBox1'>
							<img src={WeightTraining} alt="WeightLoss" height="120" width="120" className='imgStyle' />
							<p>Weight Training</p>
						</div>
						<div className='imgBox1'>
							<img src={Yoga} alt="Insulin" height="120" width="120" className='imgStyle' />
							<p>Yoga</p>
						</div>
						<div className='imgBox1'>
							<img src={TaiChi} alt="Insulin" height="120" width="120" className='imgStyle' />
							<p>TaiChi</p>
						</div>
					</div>

					<p className='paraStyleTwo'> (1) Walking </p>
					<p className='paraStyleTwo'> Walking is low impact and easily accesible. </p>
					<p className='paraStyleTwo'> Walking can improve blood pressure, as well as glucose and cholestoerol levels. </p>
					<p className='paraStyleTwo'>ADA's recommendation for daily aerobics is 30 minutes of brisk walking or 100 steps a minute.</p>

					<p className='paraStyleTwo'> (2) Water Aerobics </p>
					<p className='paraStyleTwo'> Exercise in the water is easy on the joints and reduces blood sugar levels. </p>
					<p className='paraStyleTwo'> Water sports tend to overall improve fitness, strength and heart health. </p>

					<p className='paraStyleTwo'> (3) Weight Training </p>
					<p className='paraStyleTwo'> Weight Training will increase insulin sensitivity</p>
					<p className='paraStyleTwo'> and glucose tolerance in people with Type Two Diabetes.</p>

					<p className='paraStyleTwo'> (4) Yoga </p>
					<p className='paraStyleTwo'> Yoga involves low-impact movement, meditation, breathing. </p>
					<p className='paraStyleTwo'> It can imrpove balance, flexibility, and strength. </p>
					<p className='paraStyleTwo'> It helps with blood sugar and cholestrol levels, and is especially helpful for people with Type Two Diabetes.</p>

					<p className='paraStyleTwo'> (5) Tai Chi </p>
					<p className='paraStyleTwo'> Tai Chi combines low-impact moves, meditation, and breathing techniques.  </p>
					<p className='paraStyleTwo'> Tai Chi aids in lowering blood sugar, as well as improving balance, range of motion, and overall well-being.</p>

					<p className='paraStyleTwo'>Exercise and phsical activity can lower your blood sugar levels for more than 24 hours.</p>
				</div>

				{/* Calorie calculator for weightloss section, or video showcasing it. With video showing insulin therpay or blood sugar monitoring */}
			</div>

			<div className='WLoss-Calc'>
			 <h className='Treatheader'>Weight Loss For Diabetes: </h>
			 <p className='paraStyleTwo'> This is a BMR calorie calculator in order to estimate your daily calorie intake </p>
			 <p className='paraStyleTwo'>It is based upon the Harris-Benedict equation. In order to create a calorie defecit for weight loss</p>
			 <p className='paraStyleTwo'>simply decrease the results given by 250 to 500 calories, depending on how large of a defecit you want.</p>
				<CalCalculator />
				{/* V This is the end of div for div className='WLoss Calc' */}
			</div>

			<div className='InsulTherapy'>
				<h>Insulin Therapy For Diabetes: </h>
				<p>It is advised you visit a physican for advice on how to start a specific treatment for Insulin Therapy.</p>
				<p>The video below is to acknowledge safe practices regarding using needles and disposing of them once </p>
				<p>Insulin therapy is advised. </p>

				{/* <video controls width="100%">
					<source src="https://www.youtube.com/watch?v=cmUXo4Crrm0" type="video/mp4" />
					Sorry, your browser doesn't support videos.
				</video> */}
				<iframe width="560" height="315" src="https://www.youtube.com/embed/cmUXo4Crrm0" title="YouTube video player" border="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
			</div>

			<div className='BSMonitor'>
				<h>Blood Sugar Monitoring For Diabetes: </h>
				<p>It is advised you visit a physican if it required for a patient needing blood Sugar Monitoring.</p>
				<a href="https://www.cvs.com/shop/cvs-health-true-metrix-go-meter-kit-prodid-1310077?skuid=173140&cgaa=QWxsb3dHb29nbGVUb0FjY2Vzc0NWU1BhZ2Vz&cid=ps_dme_pla&gclid=CjwKCAiAnZCdBhBmEiwA8nDQxRs6pneuG3F5MXg7MmV2v6t-sM2zZCU2ycrlYF_rXmKrdLcqDj1KWBoCMyYQAvD_BwE&gclsrc=aw.ds">You can purchase a Blood Sugar monitoring Kit here.</a>
				<a href="https://diabetes.org/tools-support/devices-technology/blood-sugar-checks-type-2">Research has shown 75% of diabetes patients due not need Blood Sugar Monitoring.</a>
				<p>Healthy behavior choices with diet, exercise, and physican recommended medication is typically recommended more than regular monitoring.</p>
				<p>As regular monitoring has had no great effect on increasing the effectiveness of a diabetes treatment.</p>
				<p>Monitoring is advised for people who take medications that cause low blood glucose such as</p>
				<p>meglitinids, sulfonylureas, and insulin.</p>

				<p>The video below is to acknowledge safe practices regarding how to use a Glucometer. </p>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/MZCf621bRHs" title="YouTube video player" border="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
			</div>  
		</div>
	);

};

export default Treatment;
