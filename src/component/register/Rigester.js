
import { useEffect } from 'react';
import './Rigester.css';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useFormik } from 'formik';
import * as yup from 'yup';

function Register() {
    // -------------------- to toggle between sign in and sign up forms ---------------------
    let signinBtn;
    let signupBtn;
    let formBox;
    let formSignupForm
    let formSigninForm;

    useEffect(() => {
        signinBtn = document.querySelector('.signinBtn');
        signupBtn = document.querySelector('.signupBtn');
        formBox = document.querySelector('.formBox');
        formSignupForm = document.querySelector('.form.signupForm');
        formSigninForm = document.querySelector('.form.signinForm');

    });
    function changeToSignUpForm() {
        formBox.classList.add('active');
        formSignupForm.style.display = "block";
        formSigninForm.style.display = "none";
    }
    function changeToSignInForm() {
        formBox.classList.remove('active');
        formSigninForm.style.display = "block";
        formSignupForm.style.display = "none";
    }

    // ---------------------------------- validation yup ----------------------------------
    const schema = yup.object().shape({
        email: yup.string()
            .required('Required').email('must be valid email'),
        password: yup.string().required('Required'),
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: values => {
            alert(JSON.stringify(values));
            // alert(`You are registered! email: ${values.email}. password: ${values.password}`);
        },
        validationSchema: schema
    });
    console.log(formik.errors)

    return (
        <div className="signUpSection">
            <div className="container">
                <div className="blueBg">
                    <div className="box signin">
                        <h2>Already have an account?</h2>
                        <button className="signinBtn" onClick={changeToSignInForm}>Sign in</button>
                    </div>
                    <div className="box signup">
                        <h2>Don't have an account?</h2>
                        <button className="signupBtn" onClick={changeToSignUpForm}>Sign up</button>
                    </div>
                </div>

                <div className="formBox">
                    <div className="form signinForm">

                        <form onSubmit={formik.handleSubmit}>
                            <h3>Sign In</h3>
                            <div className="leftContact">
                                <div className="inputBox">
                                    <span>Email</span>
                                    <input type="text" onChange={formik.handleChange}
                                        value={formik.values.email} name="email" />
                                    {/* <small onChange={formik.errors}></small> */}
                                </div>
                                <div className="inputBox">
                                    <span>Password</span>
                                    <input type="password" onChange={formik.handleChange}
                                        value={formik.values.password} name="password" />
                                    {/* <small onChange={formik.errors}></small> */}
                                </div>
                                <div className="bottomContact">
                                    {/* <button type="submit" >
                                                Submit
                                            </button> */}
                                    <div className="inputBox w100">
                                        <input type="submit" value="Sign Up" name="" />
                                        {/* disabled={isSubmitting} */}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="form signupForm" style={{ display: "none" }}>
                        <form action="">
                            <h3>Sign Up</h3>
                            <div className="leftContact">
                                <div className="formLevel">
                                    <div className="inputBox">
                                        <span>First Name</span>
                                        <input type="text" name="" required />

                                    </div>
                                    <div className="inputBox">
                                        <span>Last Name</span>
                                        <input type="text" name="" required />

                                    </div>
                                </div>
                                <div className="formLevel">
                                    <div className="inputBox">
                                        <span>Email</span>
                                        <input type="text" name="" required />

                                    </div>
                                    <div className="inputBox">
                                        <span>Password</span>
                                        <input type="password" name="" required />

                                    </div>
                                </div>
                                <div className="formLevel">
                                    <div className="inputBox">
                                        <span>Code of Country</span>
                                        <select name="CountriesRegister" id="CountriesRegister">
                                            <option value="Egypt" className="optionFormStyle">Egypt</option>
                                            <option value="German" className="optionFormStyle">German</option>
                                            <option value="France" className="optionFormStyle">France</option>
                                            <option value="Other" className="optionFormStyle">Put code before number</option>
                                        </select>

                                    </div>
                                    <div className="inputBox">
                                        <span>Phone Number</span>
                                        <input type="text" name="" required />

                                    </div>
                                </div>
                                <div className="bottomContact">
                                    <div className="inputBox w100">
                                        <input type="submit" value="Sign Up" name="" required />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Register;