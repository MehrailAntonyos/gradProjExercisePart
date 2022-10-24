
import './ExerciseCard.css';
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addFav } from '../../Redux/Actions/favAction';
import { assignExercise } from '../../Redux/Actions/assignExAction';

function ExerciseCard({ data }) {

    console.log(data);

    // ------------------------ to see more button "pop up message modal" ------------------
    const [isShow, invokeModal] = React.useState(false)
    const initModal = (item) => {
        console.log(item);
        invokeModal(!isShow)
    }

    // ------------------------------- to add to favourite page --------------------------
    const dispatch = useDispatch();

    function add(data) {
        console.log("add data...");
        dispatch(addFav(data));
    }

    // ---------------------------- to assign exercise to trainee --------------------------
    function assign(data) {
        console.log("Assign exercise...");
        dispatch(assignExercise(data));

    }


    return (
        <div className='cards'>
            <div className='contentTitle'>{data.exerciseName}</div>
            <div className='image-section'>
                <img className='imgstatic' src={data.imgStatic} style={{ width: '100%', height: '100%' }} alt='exPhoto'></img>
            </div>
            <div className='links'>
                <button className='buttonApi my-5' onClick={() => { initModal(data) }}>See More</button>
                <div className='iconsDiv'>
                    <i className="uil uil-plus" aria-hidden="true" onClick={() => { add(data) }}></i>
                    <i className="uil uil-trash-alt" aria-hidden="true" onClick={() => { assign(data) }}></i>
                </div>

                <Modal show={isShow}>
                    <Modal.Header closeButton onClick={initModal}>
                        <Modal.Title style={{ color: "black" }}>React Modal Popover Example</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ color: "red" }}>
                        {console.log(data)}
                        {data.exerciseName}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={initModal}>
                            Close
                        </Button>
                        <Button variant="dark" onClick={initModal}>
                            Store
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default ExerciseCard;