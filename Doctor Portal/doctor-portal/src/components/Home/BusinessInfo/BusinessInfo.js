import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faPhone , faMapMarker } from '@fortawesome/free-solid-svg-icons';


const BusinessInfo = () => {
    const infosData =[
        {
            title: 'Opening Hours',
            description: 'We are open 7 days',
            icon: faClock,
            background: 'primary'

        },
        {
            title: 'Visit Our Location',
            description: '7A/1GHA Dhanmondi, Bangladesh',
            icon: faMapMarker,
            background: 'dark'

        },
        {
            title: 'Call us now',
            description: '01676257279',
            icon: faPhone,
            background: 'primary'

        }
    ]
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
                {
                    infosData.map(info =><InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;