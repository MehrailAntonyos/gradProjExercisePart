
import './Bigcontainer.css';
import Filtersidebar from '../sideBarFilter/Filtersidebar';
import ContainerExercises from '../mainContentExercise/ContainerExercises';
import { Link, NavLink } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
import React, { useState } from 'react';

function Bigcontainer() {

    // ------------------ to add exercise nav link form "pop up message modal" ------------------
    const [isShow, invokeModal] = React.useState(false)
    const initModal = (item) => {
        console.log(item);
        invokeModal(!isShow)
    }

    return (
        <>
            <nav style={{ marginLeft: "30%", marginTop: "5%" }}>
                <ul>
                    <li>
                        <NavLink to="/AllExercise" className="nav-link active" aria-current="page" href="#">All Exercise</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link active" aria-current="page" href="#" onClick={() => { initModal() }}>Add Exercise</NavLink>
                    </li>

                    <Modal show={isShow} scrollable={true}>
                        <Modal.Header closeButton onClick={initModal} style={{ background: "var(--onyx-darker)" }}>
                            <Modal.Title style={{ color: "--basic-c-white" }}>Add New Exercise</Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{ background: "var(--onyx-darker)" }}>
                            {/* form */}
                            <Form action='/AllExercise' method='post'>
                                <Form.Group className="mb-2" >
                                    <Form.Label style={{ color: "var(--prime)" }}>Exercise Name</Form.Label>
                                    <Form.Control type="text" name='exerciseName' />
                                </Form.Group>

                                <Form.Group className="mb-2" >
                                    <Form.Label style={{ color: "var(--prime)" }}>Exercise Body Part</Form.Label>
                                    <Form.Control type="text" name='exBodyPart' />
                                </Form.Group>

                                <Form.Group className="mb-2" >
                                    <Form.Label style={{ color: "var(--prime)" }}>Exercise Tools</Form.Label>
                                    <Form.Control type="text" name='exTools' />
                                </Form.Group>

                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Label style={{ color: "var(--prime)" }}>Exercise Static Image</Form.Label>
                                    <Form.Control type="file" name='exStaticImage'/>
                                </Form.Group>

                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Label style={{ color: "var(--prime)" }}>Exercise Gif Image</Form.Label>
                                    <Form.Control type="file" name='exGifImage' />
                                </Form.Group>

                                <Form.Group className="mb-2" >
                                    <Form.Label style={{ color: "var(--prime)" }}>Exercise Notes</Form.Label>
                                    <Form.Control type="text" name='exAdditionNotes' />
                                </Form.Group>

                                <Button to="/AllExercise"  className='buttonApi' style={{ marginLeft: "10px" }} type="submit">
                                    Add
                                </Button>
                            </Form>

                        </Modal.Body>
                    </Modal>

                    <li>
                        <NavLink to="/FavExercise" className="nav-link active" aria-current="page" href="#">Assigned Exercise</NavLink>
                    </li>
                    <li>
                        <NavLink to="/AllTrainee" className="nav-link active" aria-current="page" href="#">All Trainees</NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="/ToDoListExercise" className="nav-link active" aria-current="page" href="#">Exercise Assigned</NavLink>
                    </li> */}
                </ul>
            </nav>
        </>
    );
}

export default Bigcontainer;