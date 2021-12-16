import React, { useState } from 'react';
import Sidebar from '../DashBoard/Sidebar/Sidebar'
const AddDoctor = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        console.log(info);
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);
        formData.append('phone', info.phone);
        formData.append('jobLocation', info.jobLocation);
        formData.append('cadetBatch', info.cadetBatch);
        formData.append('information', info.information);

        fetch('http://localhost:5000/addDoctor', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 style={{color:'#10d0e6'}}>Add a Doctor</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Name</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Phone</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="phone" placeholder="Phone" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Job Location</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="jobLocation" placeholder="Job Location" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Cadet Batch</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="cadetBatch" placeholder="Cadet Batch" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Doctor Information</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="information" placeholder="Doctor Information" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Upload a image</label>
                        <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddDoctor;