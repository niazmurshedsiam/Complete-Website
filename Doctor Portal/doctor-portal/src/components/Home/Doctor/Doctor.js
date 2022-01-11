import React from 'react';
import img from '../../../images/doctor-man.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Doctor = ({doctor}) => {
    function deleteDoctor(id) {

        console.log("delete", id)
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log("deleted successfully")
                if (result) {
                    window.location.reload();
                }

            })
    }
    return (
        <div className="card shadow-sm" style={{marginLeft:'30px',marginBottom:'5px'}}>
            <div className="card-header d-flex  align-items-center">
                {
                    doctor.image ? <img style={{height: '200px',width:'300px'}} src={`data:image/png;base64,${doctor.image.img}`}/>
                    :
                    <img style={{height: '200px',width:'300px'}} className="img-fluid mb-3" src={`http://localhost:5000/${doctor.img}`} alt=""/>
                }
                
            </div>
            <div className="card-body">
                <p>Name: {doctor.name}</p>
                <p>Email: {doctor.email}</p>
                <p>Phone: <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> {doctor.phone}</p>
                <p>Job: {doctor.jobLocation}</p>
                <p>Batch: {doctor.cadetBatch}</p>
                <p>Information: {doctor.information}</p>
                <button type="button" class="btn btn-outline-primary" onClick={() => deleteDoctor(doctor._id)}>Delete</button>
                <button type="button" class="btn btn-outline-primary">Update</button>
            </div>
            
       </div>
       
    );
};

export default Doctor;