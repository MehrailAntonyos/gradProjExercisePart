
import './ExerciseCard.css';
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addFav } from '../../Redux/Actions/favAction';
import { deleteExercise } from '../../Redux/Actions/deleteAction';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { Link, NavLink, useNavigate } from 'react-router-dom';

function ExerciseCard({ data }) {
    const NavigateTo = useNavigate();
    // console.log(data);

    // ------------------------ to see more button "pop up message modal" ------------------
    // pop up for see more button
    const [isShow, invokeModal] = React.useState(false)
    const [isEditShow, invokeEditModal] = React.useState(false)
    const initModal = (item) => {
        console.log(item);
        invokeModal(!isShow)
    }
    // pop up for edit form from icon
    const initEditModal = (item) => {
        console.log(item);
        invokeEditModal(!isEditShow)
    }

    // ------------------------------- to add to favourite page --------------------------
    const dispatch = useDispatch();

    function add(data) {
        console.log("add data...");
        dispatch(addFav(data));
    }

    // // ---------------------------- to assign exercise to trainee --------------------------
    // function assign(data) {
    //     console.log("Assign exercise...");
    //     dispatch(assignExercise(data));

    // }

    // ----------------------------------- to delete exercise ------------------------------
    function deleteEx(data) {
        console.log("Exercise Deleting");
        dispatch(deleteExercise(data));
    }

    // ------------------------------------ to edit exercise --------------------------------
    const schema = yup.object().shape({
        exerciseName: yup.string().required('Required'),
        exBodyPart: yup.string().required('Required'),
    });

    const formik = useFormik({
        initialValues: {
            exerciseName: "",
            exBodyPart: "",
            exTools: "",
            exStaticImage:"",
            exGifImage:"",
            exAdditionNotes:"",

        },
        onSubmit: values => {
            alert(JSON.stringify(values));
            // alert(`You are registered! email: ${values.email}. password: ${values.password}`);
            axios.patch('http://localhost:8000/api/v1/exercises/editEx', values).then(function (response) {
                console.log(response);
                NavigateTo('/AllExercise');
            })
        },
        validationSchema: schema
    });
    console.log(formik.errors)

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
                    <i className="uil uil-pen" onClick={() => { initEditModal(data) }}></i>
                    <i className="uil uil-trash-alt" aria-hidden="true" onClick={() => { deleteEx(data) }}></i>
                </div>

                {/* modal for see mode button */}
                <Modal show={isShow}>
                    <Modal.Header closeButton onClick={initModal} style={{ background: "var(--onyx-darker)" }}>
                        <Modal.Title  style={{ color: "--basic-c-white" }}>Exercise Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ background: "var(--onyx-darker)" , textAlign:"center"}}>
                        {console.log(data)}
                        <h3 style={{ color: "var(--prime)"}}>{data.exerciseName}</h3>
                        <image src={data.imgStatic} style={{width: "80%"}} alt="exPhoto"></image>
                        <p>{data.exBodyPart}</p>
                        <p>{data.exTools}</p>
                        <p>{data.exAdditionNotes}</p>
                    </Modal.Body>
                </Modal>

                {/* modal for edit exercise form  */}
                <Modal show={isEditShow}>
                    <Modal.Header closeButton onClick={initEditModal} style={{ background: "var(--onyx-darker)" }}>
                        <Modal.Title  style={{ color: "--basic-c-white" }}>Edit Exercise</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ background: "var(--onyx-darker)"}}>
                        {/* form */}
                        <Form onSubmit={formik.handleSubmit} encType='multipart/form-data'>
                                <Form.Group className="mb-2" >
                                    <Form.Label style={{ color: "var(--prime)" }}>Exercise Name</Form.Label>
                                    <Form.Control type="text" name='exerciseName' onChange={formik.handleChange}
                                        value={formik.values.exerciseName} />
                                </Form.Group>

                                <Form.Group className="mb-2" >
                                    <Form.Label style={{ color: "var(--prime)" }}>Exercise Body Part</Form.Label>
                                    <Form.Control type="text" name='exBodyPart' onChange={formik.handleChange}
                                        value={formik.values.exBodyPart} />
                                </Form.Group>

                                <Form.Group className="mb-2" >
                                    <Form.Label style={{ color: "var(--prime)" }}>Exercise Tools</Form.Label>
                                    <Form.Control type="text" name='exTools' onChange={formik.handleChange}
                                        value={formik.values.exTools} />
                                </Form.Group>

                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Label style={{ color: "var(--prime)" }}>Exercise Static Image</Form.Label>
                                    <Form.Control type="file" name='exStaticImage'onChange={formik.handleChange}
                                        value={formik.values.exStaticImage} />
                                </Form.Group>

                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Label style={{ color: "var(--prime)" }}>Exercise Gif Image</Form.Label>
                                    <Form.Control type="file" name='exGifImage' onChange={formik.handleChange}
                                        value={formik.values.exGifImage} />
                                </Form.Group>

                                <Form.Group className="mb-2" >
                                    <Form.Label style={{ color: "var(--prime)" }}>Exercise Notes</Form.Label>
                                    <Form.Control type="text" name='exAdditionNotes' onChange={formik.handleChange}
                                        value={formik.values.exAdditionNotes} />
                                </Form.Group>

                                <Button  className='buttonApi' style={{ marginLeft: "10px" }} type="submit">
                                    Edit
                                </Button>
                            </Form>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    )
}

export default ExerciseCard;