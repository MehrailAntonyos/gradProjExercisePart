import React, { useEffect, useState } from 'react'
import ExerciseCard from '../component/exerciseCard/ExerciseCard'
import { axiosInstance } from '../config/axios'
import { Route, Routes, useLocation } from 'react-router-dom';
import Filtersidebar from '../component/sideBarFilter/Filtersidebar';
import axios from 'axios';

function AllExercise(props) {
  var emptyStringRoute ="";
  console.log("sucesssssssssssssss");
  console.log(props);
  var location = useLocation().state?.clientEmail||"";
  var emptyLocation = "";
  const [exercise, setExercise] = useState([])

  useEffect(() => {

    // if(useLocation().state.clientEmail == null)
    // {
    //   console.log("navigate correct");
    // }
    // to get all exercises
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
    // to delete specific exercise 
    // ???????????????????????? axiosInstance.delete() not responding ??????????????????
    axiosInstance.delete('/exercises/delete').then((res) => {
      console.log("exercise data deleting from database");
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

  // update design "solve issue"
  return (
    <div className='row mt-3' style={{ display: 'flex', width: '95%', justifyContent: 'space-around', marginLeft: '2%' }}>
      <Filtersidebar></Filtersidebar>
      <div id='containerApi' >
        {
          exercise.map((item) => <div className=''><ExerciseCard data={item} user={location} /></div>)
        }
      </div>
    </div>

  )
}

export default AllExercise