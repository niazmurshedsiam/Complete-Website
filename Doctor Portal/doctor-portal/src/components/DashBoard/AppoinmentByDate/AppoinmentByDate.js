import React from 'react';

const AppoinmentByDate = ({appointments}) => {
    return (
        <div>
            <h1>Appoinment: {appointments.length}</h1>
            {
                appointments.map(app=> <li key={app._id}>{app.name}</li>)
            }
        </div>
    );
};

export default AppoinmentByDate;