import React, { useEffect, useState } from 'react'
import RepeatedTableRow from '../component/repeatedTableRow/RepeatedTableRow'
import { axiosInstance2 } from '../config/axios'
import { Route, Routes, useLocation } from 'react-router-dom';

function AllTrainee() {
    console.log(useLocation());
    const [trainee, setTrainee] = useState([])

    useEffect(() => {

        // rest of api link
        axiosInstance2.get('/products').then((res) => {
            console.log(res);
            setTrainee(res.data.products)
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