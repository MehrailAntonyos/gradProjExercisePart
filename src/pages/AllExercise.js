import React, { useEffect, useState } from 'react'
import ExerciseCard from '../component/exerciseCard/ExerciseCard'
import { axiosInstance } from '../config/axios'
import { Route, Routes, useLocation } from 'react-router-dom';
import Filtersidebar from '../component/sideBarFilter/Filtersidebar';
import axios from 'axios';

function AllExercise() {
  console.log(useLocation());
  const [exercise, setExercise] = useState([])
  useEffect(() => {

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
    axiosInstance.get('/exercises/delete').then((res) => {
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
  }, [])

  // update design "solve issue"
  return (
    <div className='row mt-3' style={{ display: 'flex', width: '95%', justifyContent: 'space-around', marginLeft: '2%' }}>
      <Filtersidebar></Filtersidebar>
      <div id='containerApi' >
        {
          exercise.map((item) => <div className=''><ExerciseCard data={item} /></div>)
        }
      </div>
    </div>

  )
}

export default AllExercise