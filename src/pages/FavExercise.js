import React, { useContext, useState } from 'react'
import { useLocation } from 'react-router-dom'
// import { favContext } from '../config/favContext';
import { useSelector } from 'react-redux'
import ExerciseCard from '../component/exerciseCard/ExerciseCard';
import RepeatedTableRow from '../component/repeatedTableRow/RepeatedTableRow'
import RepeatedToDoTask from '../component/repeatedToDoTask/RepeatedToDoTask'

function FavExercise() {
  console.log(useLocation());
  // const [data, setData] = useState(useLocation().state);
  // const { fav, setFav } = useContext(favContext);
  const favData = useSelector(state => state.favReducer.fav);
  console.log(favData, "dwwdwd"); //return all data not only favourite

  return (
    <>
      {/* <p>welcome in favourite section</p> */}
      <table className="table container my-5">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Email</th>
                    <th scope="col">Exercise Image Gif</th>
                    <th scope="col">Exercise Name</th>
                    <th scope="col">Exercise Tools</th>
                    <th scope="col">Exercise Notes</th>
                </tr>
            </thead>
            <tbody>
                {
                    favData.map((item) => <RepeatedToDoTask type="fav" data={item} />)
                }
            </tbody>
        </table>

      {/* <div className='row'>
        {
          favData.map((item) => <div className='col-4 mt-3' ><ExerciseCard type="fav" data={item} /></div>)
        }</div> */}
    </>
  )
}

export default FavExercise