import React from 'react';
import Image from '../../../images/HeaderMain.jpg';
const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:'#3A4256'}}>Your New Smile <br /> Starts Here</h1>
                <p style={{color:'gray'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni voluptates, assumenda odit illo suscipit beatae?</p>
                <div className="btn btn-primary">GET APPOINTMENT</div>
            </div>
            <div className="col-md-6">
                <img src={Image} alt="" className="img-fluid rounded" />
            </div>
        </main>
    );
};

export default HeaderMain;