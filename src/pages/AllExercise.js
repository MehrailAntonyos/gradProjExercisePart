import React, { useEffect, useState } from 'react'
import ExerciseCard from '../component/exerciseCard/ExerciseCard'
import { axiosInstance } from '../config/axios'
import { Route, Routes, useLocation } from 'react-router-dom';
import Filtersidebar from '../component/sideBarFilter/Filtersidebar';

function AllExercise() {
  console.log(useLocation());
  const [exercise, setExercise] = useState([])
  useEffect(() => {

    axiosInstance.get('/exercises/view').then((res) => {
      console.log(res);
      setExercise(res.data)
    })
  }, [])

  // update design "solve issue"
  return (
    <div className='row mt-3' style={{ display: 'flex', width: '100%', justifyContent: 'space-between', marginLeft: '2%' }}>
      <Filtersidebar></Filtersidebar>
      <div className='mainExContent' style={{ display: 'flex', width: '80%', justifyContent: 'space-around' }}>
        {
          exercise.map((item) => <div className='col-3  mt-5'><ExerciseCard data={item} /></div>)
        }
      </div>
    </div>

  )
}

export default AllExercise