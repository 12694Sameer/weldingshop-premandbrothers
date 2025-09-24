import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';


export default function ServiceDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const serviceImages = {
    'railing': [
      `${process.env.PUBLIC_URL}/railing.JFIF`,
      `${process.env.PUBLIC_URL}/railing2.JFIF`,
      `${process.env.PUBLIC_URL}/railing3.JFIF`,
      `${process.env.PUBLIC_URL}/railing4.JFIF`,
    ],
    'slider-gate': [
      `${process.env.PUBLIC_URL}/gate.JFIF`,
      `${process.env.PUBLIC_URL}/gate1.jpeg`,
      `${process.env.PUBLIC_URL}/gate1.jpeg`,
      `${process.env.PUBLIC_URL}/gate1.jpeg`,
    ],
    'grill': [
      `${process.env.PUBLIC_URL}/grill.JFIF`,
      `${process.env.PUBLIC_URL}/grill2.jpeg`,
      `${process.env.PUBLIC_URL}/grill3.JFIF`,
      `${process.env.PUBLIC_URL}/grill4.JFIF`,
      `${process.env.PUBLIC_URL}/grill5.JFIF`,
      `${process.env.PUBLIC_URL}/grill6.JFIF`,
      `${process.env.PUBLIC_URL}/grill7.JFIF`,
      `${process.env.PUBLIC_URL}/grill8.JFIF`,
    ],
    'channel-gate': [
      `${process.env.PUBLIC_URL}/chanelgate.JFIF`,
      `${process.env.PUBLIC_URL}/chanelgate1.JFIF`,
      `${process.env.PUBLIC_URL}/chanelgate2.JFIF`,
      `${process.env.PUBLIC_URL}/chanelgate3.JFIF`,
      `${process.env.PUBLIC_URL}/chanelgate4.JFIF`,
    ],
    'shutter': [
      `${process.env.PUBLIC_URL}/shutter.JFIF`,
      `${process.env.PUBLIC_URL}/shutter1.JFIF`,
      `${process.env.PUBLIC_URL}/shutter2.JFIF`,
      `${process.env.PUBLIC_URL}/shutter3.JFIF`,
      `${process.env.PUBLIC_URL}/shutter4.JFIF`,
      `${process.env.PUBLIC_URL}/shutter5.JFIF`,
    ],
    'custom-fabrication': [
      `${process.env.PUBLIC_URL}/customfab.JFIF`,
      `${process.env.PUBLIC_URL}/customfab1.JFIF`,
      `${process.env.PUBLIC_URL}/customfab2.JFIF`,
      `${process.env.PUBLIC_URL}/customfab3.JFIF`,
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
