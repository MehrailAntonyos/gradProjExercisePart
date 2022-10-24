
import './RepeatedTableRow.css';
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addFav } from '../../Redux/Actions/favAction';
import { Link, NavLink } from 'react-router-dom';

function RepeatedTableRow({ data }) {

    console.log(data);

    return (

        <tr>
            {/* trinee id */}
            <th scope="row">1</th>
            <td>{data.title}</td>
            <td>{data.brand}</td>
            <td>{data.stock}</td>
            <td><button className='buttonApi'>Show History</button></td>
            <td>
                <select name='exerciseDays'>
                    <option value="Day1">Day1</option>
                    <option value="Day2">Day2</option>
                    <option value="Day3">Day3</option>
                    <option value="Day4">Day4</option>
                    <option value="Day5">Day5</option>
                    <option value="Day6">Day6</option>
                    <option value="Day7">Day7</option>
                </select>
            </td>
            <td><NavLink to="/AllExercise" className="buttonApi" aria-current="page" href="#">Assign Exercise</NavLink></td>
        </tr>

    )
}

export default RepeatedTableRow;