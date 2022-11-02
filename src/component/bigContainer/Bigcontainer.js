
// import './Bigcontainer.css';
// import Filtersidebar from '../sideBarFilter/Filtersidebar';
// import ContainerExercises from '../mainContentExercise/ContainerExercises';
// import { Link, NavLink, useNavigate } from 'react-router-dom';
// import { Modal, Button, Form } from 'react-bootstrap';
// import React, { useState } from 'react';
// import { useFormik } from 'formik';
// import * as yup from 'yup';
// import axios from 'axios';
// import FormData from 'form-data';
// import { useForm } from "react-hook-form";

// function Bigcontainer() {

//     const NavigateTo = useNavigate();
//     // ------------------ to add exercise nav link form "pop up message modal" ------------------
//     const [isShow, invokeModal] = React.useState(false)
//     const initModal = (item) => {
//         console.log(item);
//         invokeModal(!isShow)
//     }
//     const { register, handleSubmit, watch, formState: { errors } } = useForm();
//     const onSubmit = data => {
//         const form = new FormData();
//         form.append('exerciseName', data.exerciseName);
//         form.append('exBodyPart', data.exBodyPart);
//         form.append('exTools', data.exTools);
//         form.append('file', data.exStaticImage);
//         form.append('exAdditionNotes', data.exAdditionNotes);

//         axios.post('http://localhost:8000/api/v1/exercises/create', form).then((res)=>{
//             console.log(res)
//         })

//     }
//     // const schema = yup.object().shape({
//     //     exerciseName: yup.string().required('Required'),
//     //     exBodyPart: yup.string().required('Required'),
//     // });

//     // const formik = useFormik({
//     //     initialValues: {
//     //         exerciseName: "",
//     //         exBodyPart: "",
//     //         exTools: "",
//     //         exStaticImage:"",
//     //         exGifImage:"",
//     //         exAdditionNotes:"",

//     //     },
//     //     onSubmit: values => {
//     //         // alert(JSON.stringify(values));
//     const handleChange = (e) => {
//         // Destructuring
//         console.log(e);
//         e.preventDefault();
// console.log(e.target)
//         const form = new FormData(e.target);
//         form.append('exerciseName', form.get("exerciseName"));
//         form.append('exBodyPart', form.get("exBodyPart"));
//         form.append('exTools', form.get("exTools"));
//         form.append('file', form.get("exStaticImage"));
//         form.append('exAdditionNotes', form.get("exAdditionNotes"));

//         // form.set('exerciseName', form.get('exerciseName'));
//         // form.set('exBodyPart', form.get('exBodyPart').toUpperCase());
//         // form.set('exTools', form.get('exTools').toUpperCase());
//         // form.set('exStaticImage', form.get('exStaticImage'));
//         // form.set('exAdditionNotes', form.get('exAdditionNotes'));
//         for (var key of form.entries()) {
// 			console.log(key[0] + ', ' + key[1])
// 		}

//         var config={headers: { "Content-Type": "multipart/form-data" }};
//        console.log("sss")
//         axios.post('http://localhost:8000/api/v1/exercises/create', form, {
//             headers: {
//               'Content-Type': 'multipart/form-data'
//             }}).then(function (response) {
//         console.log(response);
//         // NavigateTo('/AllExercise');
//     })


//     };
//     // console.log(form)
//     // alert(`You are registered! email: ${values.email}. password: ${values.password}`);
//     // axios.post('http://localhost:8000/api/v1/exercises/create', values).then(function (response) {
//     //     console.log(response);
//     //     // NavigateTo('/AllExercise');
//     // })
//     //     },
//     //     validationSchema: schema
//     // });
//     // console.log(formik.errors)
//     return (
//         <>
//             <nav style={{ marginLeft: "30%", marginTop: "5%" }}>
//                 <ul>
//                     <li>
//                         <NavLink to="/AllExercise" className="nav-link active" aria-current="page" href="#">All Exercise</NavLink>
//                     </li>
//                     <li>
//                         <NavLink className="nav-link active" aria-current="page" href="#" onClick={() => { initModal() }}>Add Exercise</NavLink>
//                     </li>

//                     <Modal show={isShow} scrollable={true}>
//                         <Modal.Header closeButton onClick={initModal} style={{ background: "var(--onyx-darker)" }}>
//                             <Modal.Title style={{ color: "--basic-c-white" }}>Add New Exercise</Modal.Title>
//                         </Modal.Header>
//                         <Modal.Body style={{ background: "var(--onyx-darker)" }}>
//                             {/* form */}
//                             <Form method='Post'onSubmit={handleSubmit(onSubmit)} >
//                                 <Form.Group className="mb-2" >
//                                     <Form.Label style={{ color: "var(--prime)" }}>Exercise Name</Form.Label>
//                                     <input type="text" name='exerciseName' {...register("exerciseName")}/>
//                                 </Form.Group>

//                                 <Form.Group className="mb-2" >
//                                     <Form.Label style={{ color: "var(--prime)" }}>Exercise Body Part</Form.Label>
//                                     <input type="text" name='exBodyPart' {...register("exBodyPart")}/>
//                                 </Form.Group>

//                                 <Form.Group className="mb-2" >
//                                     <Form.Label style={{ color: "var(--prime)" }}>Exercise Tools</Form.Label>
//                                     <input type="text" name='exTools' {...register("exTools")}/>
//                                 </Form.Group>

//                                 <Form.Group controlId="formFile" className="mb-3">
//                                     <Form.Label style={{ color: "var(--prime)" }}>Exercise Static Image</Form.Label>
//                                     <input type="file" name='exStaticImage' accept="image/*" multiple {...register("exStaticImage")}/>
//                                 </Form.Group>

//                                 {/* <Form.Group controlId="formFile" className="mb-3">
//                                     <Form.Label style={{ color: "var(--prime)" }}>Exercise Gif Image</Form.Label>
//                                     <Form.Control type="file" name='exGifImage' onChange={formik.handleChange}
//                                         value={formik.values.exGifImage} multiple accept="image/*"/>
//                                 </Form.Group> */}

//                                 <Form.Group className="mb-2" >
//                                     <Form.Label style={{ color: "var(--prime)" }}>Exercise Notes</Form.Label>
//                                     <input type="text" name='exAdditionNotes' {...register("exAdditionNotes")}/>
//                                 </Form.Group>

//                                 <input to="/AllExercise" className='buttonApi' style={{ marginLeft: "10px" }} value='Add' type="submit"/>

//                                 {/* </NavLink> */}
//                             </Form>

//                         </Modal.Body>
//                     </Modal>

//                     <li>
//                         <NavLink to="/FavExercise" className="nav-link active" aria-current="page" href="#">Assigned Exercise</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/AllTrainee" className="nav-link active" aria-current="page" href="#">All Trainees</NavLink>
//                     </li>
//                     {/* <li>
//                         <NavLink to="/ToDoListExercise" className="nav-link active" aria-current="page" href="#">Exercise Assigned</NavLink>
//                     </li> */}
//                 </ul>
//             </nav>
//         </>
//     );
// }

// export default Bigcontainer;


//---------------------------------- ya rab nekhlas 2 nov - 4:12pm -----------------------------

import './Bigcontainer.css';
import Filtersidebar from '../sideBarFilter/Filtersidebar';
import ContainerExercises from '../mainContentExercise/ContainerExercises';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import FormData from 'form-data';
// import '../../../node_modules/source-map-loader/dist/cjs
// import './../../../node_modules/source-map-loader/dist/cjs'
// /media/My_Data/iti/front-end & cross platform/react js/untitled folder/day1-lab/node_modules/axios/node_modules/form-data/lib/browser.js

function Bigcontainer() {

    const NavigateTo = useNavigate();
    // ------------------ to add exercise nav link form "pop up message modal" ------------------
    const [isShow, invokeModal] = React.useState(false)
    const initModal = (item) => {
        console.log(item);
        invokeModal(!isShow)
    }

    const schema = yup.object().shape({
        exerciseName: yup.string().required('Required'),
        exBodyPart: yup.string().required('Required'),
    });

    const formik = useFormik({
        initialValues: {
            exerciseName: "",
            exBodyPart: "",
            exTools: "",
            exStaticImage: "",
            exGifImage: "",
            exAdditionNotes: "",

        },
        onSubmit: values => {
            // alert(JSON.stringify(values));

            const form = new FormData();
            form.append('exerciseName', values.exerciseName);
            form.append('exBodyPart', values.exBodyPart);
            form.append('exTools', values.exTools);
            // form.append('exStaticImage', .values.exerciseName);
            form.append('exStaticImage', values.file); //hossam ex[0]
            form.append('exAdditionNotes', values.exAdditionNotes);
            // for (let i = 0; i < values.exStaticImage.length; i++) {

            // }
            console.log(form)
            // alert(`You are registered! email: ${values.email}. password: ${values.password}`);
            axios.post('http://localhost:8000/api/v1/exercises/create', form).then(function (response) {
                console.log(response);
                // NavigateTo('/AllExercise');
            })
        },
        validationSchema: schema
    });
    console.log(formik.errors)
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
                                    <Form.Control type="file" name='file' onChange={(event) => {
                                        formik.setFieldValue("file", event.currentTarget.files[0]);
                                    }}
                                        value={formik.values.exStaticImage} />
                                </Form.Group>
                                {/* 
                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Label style={{ color: "var(--prime)" }}>Exercise Gif Image</Form.Label>
                                    <Form.Control type="file" name='exGifImage' onChange={formik.handleChange}
                                        value={formik.values.exGifImage} multiple accept="image/*" />
                                </Form.Group> */}

                                <Form.Group className="mb-2" >
                                    <Form.Label style={{ color: "var(--prime)" }}>Exercise Notes</Form.Label>
                                    <Form.Control type="text" name='exAdditionNotes' onChange={formik.handleChange}
                                        value={formik.values.exAdditionNotes} />
                                </Form.Group>

                                <Button className='buttonApi' style={{ marginLeft: "10px" }} type="submit">
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