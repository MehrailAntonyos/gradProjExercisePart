
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
            <nav style={{ marginLeft: "25%", marginTop: "5%" }}>
                <ul>
                    <li>
                        <NavLink to="/AllExercise" className="nav-link active" aria-current="page" href="#">All Exercise</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link active" aria-current="page" href="#" onClick={() => { initModal() }}>Add Exercise</NavLink>
                    </li>

                    <Modal show={isShow} scrollable={true}>
                        <Modal.Header closeButton onClick={initModal} style={{background: "var(--onyx-darker)"}}>
                            <Modal.Title style={{ color: "--basic-c-white" }}>Add New Exercise</Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{background: "var(--onyx-darker)"}}>
                            {/* form */}
                            <Form  >
                                <Form.Group className="mb-2" controlId="formBasicEmail">
                                    <Form.Label style={{ color: "var(--prime)"}}>Email address</Form.Label>
                                    <Form.Control type="text" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-2" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="text" placeholder="Password" />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
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

                    <li>
                        <NavLink to="/FavExercise" className="nav-link active" aria-current="page" href="#">Fav Exercise</NavLink>
                    </li>
                    <li>
                        <NavLink to="/AllTrainee" className="nav-link active" aria-current="page" href="#">All Trainees</NavLink>
                    </li>
                    <li>
                        <NavLink to="/ToDoListExercise" className="nav-link active" aria-current="page" href="#">Exercise Assigned</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Bigcontainer;