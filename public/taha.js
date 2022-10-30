import React from "react";
import { render } from "react-dom";
import { Formik } from "formik";
import yup from "yup";
import Dropzone from "react-dropzone";

import Thumb from "./Thumb";

const dropzoneStyle = {
    width: "100%",
    height: "auto",
    borderWidth: 2,
    borderColor: "rgb(102, 102, 102)",
    borderStyle: "dashed",
    borderRadius: 5
};

const App = () => (
    <div className="container">
        <Formik
            initialValues={{
                files: []
            }}
            onSubmit={(values) => {
                alert(
                    JSON.stringify(
                        {
                            files: values.files.map((file) => ({
                                fileName: file.name,
                                type: file.type,
                                size: `${file.size} bytes`
                            }))
                        },
                        null,
                        2
                    )
                );
            }}
            validationSchema={yup.object().shape({
                recaptcha: yup.array()
            })}
            render={({ values, handleSubmit, setFieldValue }) => (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Multiple files</label>
                        <Dropzone
                            style={dropzoneStyle}
                            accept="image/*"
                            onDrop={(acceptedFiles) => {
                                // do nothing if no files
                                if (acceptedFiles.length === 0) {
                                    return;
                                }

                                // on drop we add to the existing files
                                setFieldValue("files", values.files.concat(acceptedFiles));
                            }}
                        >
                            {({
                                isDragActive,
                                isDragReject,
                                acceptedFiles,
                                rejectedFiles
                            }) => {
                                if (isDragActive) {
                                    return "This file is authorized";
                                }

                                if (isDragReject) {
                                    return "This file is not authorized";
                                }

                                if (values.files.length === 0) {
                                    return <p>Try dragging a file here!</p>;
                                }

                                return values.files.map((file, i) => (
                                    <Thumb key={i} file={file} />
                                ));
                            }}
                        </Dropzone>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        submit
                    </button>
                </form>
            )}
        />
    </div>
);

render(<App />, document.getElementById("root"));





onSubmit: (values) => {

    console.log(values);
    const formData = new FormData()
    formData.append('jobImage', values.photo);
    formData.append('title', values.title);
    formData.append('address', values.address);
    formData.append('category', values.category);
    formData.append('city', values.city);
    formData.append('description', values.description);

    axios.post("http://localhost:7000/jobs/postjob", formData, { headers: headers }).then(
        (result) => {
            console.log(result)
        }
    ).catch((err) => {
        console.log(err)
    });
},

    <input
        type="file"
        {...formik.getFieldProps("jobImage")}
        //   onChange={uploadimage}
        style={{ display: "none" }}
        name="jobImage"
        // defaultValue="upload"
        id="upload-files"
        accept="image/*"
        multiple
        onChange={(e) =>
            formik.setFieldValue('photo', e.currentTarget.files[0])
        }
    />
