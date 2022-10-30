
import './RepeatedTableRow.css';
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addFav } from '../../Redux/Actions/favAction';
import { Link, NavLink } from 'react-router-dom';

function RepeatedTableRow({ data }) {
    var exHistoryCounter=0;
    console.log(data);

    const [isShow, invokeModal] = React.useState(false)
    const initModal = (item) => {
        console.log(item);
        invokeModal(!isShow)
    }

    return (

        <tr>
            {/* trinee id */}
            <th scope="row">1</th>
            <td>{data.email}</td>
            <td>{data.role}</td>
            <td>{data.subscription}</td>
            <td><button className='buttonApi' onClick={() => { initModal(data.exersiceHistory) }}>Show History</button></td>
            <td><NavLink to="/AllExercise" className="buttonApi" aria-current="page" href="#">Assign Exercise</NavLink></td>

            {/* modal to show history for every user client */}
            <Modal show={isShow} scrollable={true}>
                <Modal.Header closeButton onClick={initModal} style={{ background: "var(--onyx-darker)" }}>
                    <Modal.Title style={{ color: "--basic-c-white" }}>Add New Exercise</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ background: "var(--onyx-darker)" }}>
                    {/* {if(data.exersiceHistory.length > 0)} */}
                    {
                        data.exersiceHistory.map((item) => <div>
                            <p style={{ display: "none" }}>{exHistoryCounter++}</p>

                            <p style={{ color: "var(--prime)" }}>Exercise number. {exHistoryCounter} </p>
                            <image src={item.exGifImage} style={{width: "80%"}} alt="exPhoto"></image>
                            <p >Exercise Name: {item.exerciseName}</p>
                            <p >Exercise Body Part: {item.exBodyPart}</p>
                            <p >Exercise Tools: {item.exTools}</p>
                            <p >Exercise Notes: {item.exAdditionNotes}</p>
                            </div> ) 
                    }
                </Modal.Body>
            </Modal>

        </tr>

    )
}

export default RepeatedTableRow;