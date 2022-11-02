import React, { useEffect, useState } from 'react'
import ExerciseCard from '../component/exerciseCard/ExerciseCard'
import { axiosInstance } from '../config/axios'
import { Route, Routes, useLocation } from 'react-router-dom';
import Filtersidebar from '../component/sideBarFilter/Filtersidebar';
import axios from 'axios';

function AllExercise(props) {
  var emptyStringRoute = "";
  console.log("sucesssssssssssssss");
  console.log(props);
  var location = useLocation().state?.clientEmail || "";
  var emptyLocation = "";

  const [exercise, setExercise] = useState(
    [], {
    // --------------------- to filter with body part and map on it --------------------------
    bodyPart: [],
    response: [],
  }
  )

  const [filteredExercise, setFilteredExercise] = useState(
    [], {
    // --------------------- to filter with body part and map on it --------------------------
    bodyPart: [],
    response: [],
  }
  )

  useEffect(() => {

    axiosInstance.get('/exercises/view').then((res) => {
      console.log("get Exercise data from database");
      console.log(res);
      setExercise(res.data)
    })

    //??????????????????????? don'tknw where put its useSelector() ????????????????????
    // to post new exercise
    axiosInstance.post('/exercises/create').then((res) => {
      console.log("exercise data posting in database");
      console.log(res);
      setExercise(res.data)
    })

    // // to update / edit specific exercise
    // ???????????????????????? axiosInstance.patch() not responding ??????????????????
    axiosInstance.get('/exercises/editEx').then((res) => {
      console.log("exercise data updating to database");
      console.log(res);
      setExercise(res.data)
    })

    // assign exercise to trainee with email
    axiosInstance.get('/users/add_exersice').then((res) => {
      console.log("add exercise to trainee with email");
      console.log(res);
      setExercise(res.data)
    })
  }, [])

  const handleChange = (e) => {
    // Destructuring
    console.log(e);
    const { value, checked } = e.target;



    const { bodyPart } = exercise;

    console.log(`${value} is ${checked}`);
    if (checked) {
      console.log(e.target.value);
    }

    // Case 1 : The user checks the box
    if (checked) {
      setFilteredExercise(
        // pre => {
           exercise.filter((e) => e.exBodyPart === value)
        // }
      );
    }

    // Case 2  : The user unchecks the box
    else {
      setFilteredExercise(
        exercise.filter((e) => e.exBodyPart )
      );
    }

  };

  // update design "solve issue"
  return (
    <div className='row mt-3' style={{ display: 'flex', width: '95%', justifyContent: 'space-around', marginLeft: '2%' }}>
      {/* <Filtersidebar></Filtersidebar> */}
      {/* --------------------------------- filter part -------------------------------------*/}
      <div id="filterApi">
        <h4>Filter Exercises By:</h4>
        <br></br>
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne">
                Body Part:
              </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne">
              <div className="accordion-body">
                <div className="sortExerciseChoices">
                  <input type="checkbox" name="bodyPart" id="absBodyPart" onChange={handleChange} value="push"></input>
                  <label>Push</label>
                </div>

                <div className="sortExerciseChoices">
                  <input type="checkbox" name="bodyPart" id="fullBodyPart" onChange={handleChange} value="pull"></input>
                  <label>Pull</label>
                </div>

                <div className="sortExerciseChoices">
                  {/* <input type="checkbox" name="bodyPart" id="chest" onChange={handleChange} value="leg"></input> */}
                  <label>Leg</label>
                </div>
                {/* 
                <div className="sortExerciseChoices">
                  <input type="checkbox" name="legsPart" id="legsPart"></input>
                  <label>Legs - Calves</label>
                </div> */}
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo">
                Equipments:
              </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo">
              <div className="accordion-body">
                <div className="sortExerciseChoices">
                  <input type="checkbox" name="noEquip" id="noEquip"></input>
                  <label>No Equipment</label>
                </div>

                <div className="sortExerciseChoices">
                  <input type="checkbox" name="medicineBallEquip" id="medicineBallEquip"></input>
                  <label>Medicine Ball</label>
                </div>

                <div className="sortExerciseChoices">
                  <input type="checkbox" name="dumbbellsEquip" id="dumbbellsEquip"></input>
                  <label>Dumbbells</label>
                </div>

                <div className="sortExerciseChoices">
                  <input type="checkbox" name="barbellEquip" id="barbellEquip"></input>
                  <label>Barbell</label>
                </div>

                <div className="sortExerciseChoices">
                  <input type="checkbox" name="trxEquip" id="trxEquip"></input>
                  <label>TRX</label>
                </div>

                <div className="sortExerciseChoices">
                  <input type="checkbox" name="resisBandsEquip" id="resisBandsEquip"></input>
                  <label>Resistence Bands</label>
                </div>

                <div className="sortExerciseChoices">
                  <input type="checkbox" name="stabilityBallEquip" id="stabilityBallEquip"></input>
                  <label>Stability Ball</label>
                </div>

                <div className="sortExerciseChoices">
                  <input type="checkbox" name="benchEquip" id="benchlEquip"></input>
                  <label>Bench</label>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree">
                Hardness Level:
              </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingThree">
              <div className="accordion-body">
                <div className="sortExerciseChoices">
                  <input type="checkbox" name="enteryLevel" id="enteryLevel"></input>
                  <label>Entery Level</label>
                </div>

                <div className="sortExerciseChoices">
                  <input type="checkbox" name="intermediateLevel" id="intermediateLevel"></input>
                  <label>Intermediate Level</label>
                </div>

                <div className="sortExerciseChoices">
                  <input type="checkbox" name="highLevel" id="highLevel"></input>
                  <label>High Level</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------------- exercise card part ----------------------------*/}
      <div id='containerApi' >

        {/* ---------------------------------- filter al exercises ------------------------- */}
        {/* {console.log(filteredExercise)} */}
        {
          filteredExercise.length !==0 ? filteredExercise.map((item) =>{
            return <div className=''><ExerciseCard data={item} user={location} /></div>
          })
          :
          exercise.map((item) =>{
            return <div className=''><ExerciseCard data={item} user={location} /></div>
          })
        }
      </div>
    </div>

  )
}

export default AllExercise