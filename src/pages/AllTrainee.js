import React, { useEffect, useState } from 'react'
import RepeatedTableRow from '../component/repeatedTableRow/RepeatedTableRow'
import { axiosInstance } from '../config/axios'
import { Route, Routes, useLocation } from 'react-router-dom';

function AllTrainee() {
    console.log(useLocation());
    const [trainee, setTrainee] = useState([])

    useEffect(() => {

        // rest of api link
        axiosInstance.get('/users//').then((res) => {
            console.log("get all trainee from db");
            console.log(res);
            setTrainee(res.data)
        })
    }, [])

    return (
        <table className="table container my-5">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Email</th>
                    <th scope="col">Role</th>
                    <th scope="col">subscription</th>
                    <th scope="col">Exersice History</th>
                    <th scope="col">Assign Exercises</th>
                </tr>
            </thead>
            <tbody>
                {
                    trainee.map((item) => <RepeatedTableRow data={item} />)
                }
            </tbody>
        </table>

    )
}

export default AllTrainee