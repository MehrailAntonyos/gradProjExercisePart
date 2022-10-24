import React, { useEffect, useState } from 'react'
import RepeatedTableRow from '../component/repeatedTableRow/RepeatedTableRow'
import { axiosInstance } from '../config/axios'
import { Route, Routes, useLocation } from 'react-router-dom';
import RepeatedToDoTask from '../component/repeatedToDoTask/RepeatedToDoTask'

function ToDoListExercise() {
    console.log(useLocation());
    const [exercise, setExercise] = useState([])

    useEffect(() => {

        // rest of api link
        axiosInstance.get('').then((res) => {
            console.log(res);
            setExercise(res.data)
        })
    }, [])

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Image Gif</th>
                    <th scope="col">Name</th>
                    <th scope="col">Tools</th>
                    <th scope="col">Notes</th>
                </tr>
            </thead>
            <tbody>
                {
                    exercise.map((item) => <RepeatedToDoTask data={item} />)
                }
            </tbody>
        </table>

    )
}

export default ToDoListExercise