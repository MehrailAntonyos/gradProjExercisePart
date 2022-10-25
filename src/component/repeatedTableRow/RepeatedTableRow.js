
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
            <td><NavLink to="/AllExercise" className="buttonApi" aria-current="page" href="#">Assign Exercise</NavLink></td>
        </tr>

    )
}

export default RepeatedTableRow;