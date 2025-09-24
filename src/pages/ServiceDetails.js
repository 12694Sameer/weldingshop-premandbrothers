import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';


export default function ServiceDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const serviceImages = {
    'railing': [
      `${process.env.PUBLIC_URL}/railing.png`,
      `${process.env.PUBLIC_URL}/railing2.png`,
      `${process.env.PUBLIC_URL}/railing3.png`,
      `${process.env.PUBLIC_URL}/railing4.png`,
    ],
    'slider-gate': [
      `${process.env.PUBLIC_URL}/gate.png`,
      `${process.env.PUBLIC_URL}/gate1.jpeg`,
      `${process.env.PUBLIC_URL}/gate1.jpeg`,
      `${process.env.PUBLIC_URL}/gate1.jpeg`,
    ],
    'grill': [
      `${process.env.PUBLIC_URL}/grill.png`,
      `${process.env.PUBLIC_URL}/grill2.jpeg`,
      `${process.env.PUBLIC_URL}/grill3.png`,
      `${process.env.PUBLIC_URL}/grill4.png`,
      `${process.env.PUBLIC_URL}/grill5.png`,
      `${process.env.PUBLIC_URL}/grill6.png`,
      `${process.env.PUBLIC_URL}/grill7.png`,
      `${process.env.PUBLIC_URL}/grill8.png`,
    ],
    'channel-gate': [
      `${process.env.PUBLIC_URL}/chanelgate.png`,
      `${process.env.PUBLIC_URL}/chanelgate1.png`,
      `${process.env.PUBLIC_URL}/chanelgate2.png`,
      `${process.env.PUBLIC_URL}/chanelgate3.png`,
      `${process.env.PUBLIC_URL}/chanelgate4.png`,
    ],
    'shutter': [
      `${process.env.PUBLIC_URL}/shutter.png`,
      `${process.env.PUBLIC_URL}/shutter1.png`,
      `${process.env.PUBLIC_URL}/shutter2.png`,
      `${process.env.PUBLIC_URL}/shutter3.png`,
      `${process.env.PUBLIC_URL}/shutter4.png`,
      `${process.env.PUBLIC_URL}/shutter5.png`,
    ],
    'custom-fabrication': [
      `${process.env.PUBLIC_URL}/customfab.png`,
      `${process.env.PUBLIC_URL}/customfab1.png`,
      `${process.env.PUBLIC_URL}/customfab2.png`,
      `${process.env.PUBLIC_URL}/customfab3.png`,
    ],
    // Add more services as needed
  };

  const images = serviceImages[slug] || [];

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4 text-capitalize">{slug.replace('-', ' ')}</h2>
<button
  className="btn btn-outline-primary mb-4"
  onClick={() => navigate('/services')}
>
  ← Back to Services
</button>

      <div className="row">
        {images.length > 0 ? (
          images.map((img, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img src={img} className="card-img-top" alt={`Design ${index + 1}`} />
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-muted">No designs available for this service.</div>
        )}
      </div>
    </div>
  );
}
