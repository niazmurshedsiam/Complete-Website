import React from 'react';

const ServicesDetails = ({Service}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height:'70px'}} src={Service.image} alt=""/>
            <h5 className="mt-4 mb-4">{Service.name}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, perferendis.</p>
        </div>
    );
};

export default ServicesDetails;