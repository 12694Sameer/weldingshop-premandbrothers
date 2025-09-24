import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      title: 'Slider Gate',
      slug: 'slider-gate',
      description: 'Custom-built sliding gates with smooth operation, durable tracks, and secure locking systems.',
      image: `${process.env.PUBLIC_URL}/sliding gate.JFIF`
    },
    {
      title: 'Channel Gate',
      slug: 'channel-gate',
      description: 'Heavy-duty channel gates designed for industrial and residential use with reinforced steel channels.',
      image: `${process.env.PUBLIC_URL}/chanelgate.JFIF`
    },
    {
      title: 'Shutter',
      slug: 'shutter',
      description: 'Manual and automatic shutters for shops and garages, built with rust-resistant materials.',
      image: `${process.env.PUBLIC_URL}/shutter1.JFIF`
    },
    {
      title: 'Grill',
      slug: 'grill',
      description: 'Decorative and security grills for windows and balconies, available in modern and traditional styles.',
      image: `${process.env.PUBLIC_URL}/grill.JFIF`
    },
    {
      title: 'Custom Fabrication',
      slug: 'custom-fabrication',
      description: 'Tailored metalwork including frames, partitions, and support structures built to your specifications.',
      image: `${process.env.PUBLIC_URL}/customfab.JFIF`
    },
    {
      title: 'Railing',
      slug: 'railing',
      description: 'Elegant and durable railings for balconies, staircases, and terraces. Available in modern, classic, and custom designs with powder-coated finishes.',
      image: `${process.env.PUBLIC_URL}/railing.JFIF`
    }
  ];

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Our Services</h2>
      <div className="row">
        {services.map((service, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-4">
            <Link to={`/services/${service.slug}`} className="text-decoration-none text-dark">
              <div className="card h-100 shadow-sm">
                <img src={service.image} className="card-img-top" alt={service.title} />
                <div className="card-body">
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
