import React from 'react';
import img from '../../../images/doctor-man.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Doctor = ({doctor}) => {
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
                <p>Informatiop{doctor.information}</p>
            </div>
            
       </div>
       
    );
};

export default Doctor;