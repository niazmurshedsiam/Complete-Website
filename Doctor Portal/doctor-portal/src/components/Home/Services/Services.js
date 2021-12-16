import React from "react";
import Surgery from '../../../images/Surgery.png';
import cavity from '../../../images/cavity.png';
import Medicine from '../../../images/Medicine.png';
import ServicesDetails from "../ServicesDetails/ServicesDetails";

const Services = () => {
    const serviceData = [
        {
          name: "Surgery",
          image: Surgery,
          description: "",
        },
        {
          name: "Cavity Protection",
          image: cavity,
          description: "",
        },
        {
          name: "Medicine",
          image: Medicine,
          description: "",
        },
      ];
  return (
    <section className="services-container mt-5">
      <div className="text-center">
        <h5 style={{ color: "#1cc7c1" }}>Our Service</h5>
        <h2 style={{ color: "#3a4256" }}>Services We Provides</h2>
      </div>
      <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    serviceData.map(Service => <ServicesDetails Service={Service}></ServicesDetails>)
                }
            </div>
        </div>
    </section>
  );
};

export default Services;
