import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const BannerCarousel = () => {
  const imageStyle = {
    maxHeight: '500px',
    objectFit: 'cover',
    width: '100%',
  };

  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={3000}
      transitionTime={800}
    >
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/wledingimage1.jpeg`}
          alt="Precision Welding Services"
          style={imageStyle}
        />
        <p className="legend">Precision Welding Services</p>
      </div>
      <div>
<img
  src="https://drive.google.com/uc?export=view&id=1RMTYPWOFUYa1DbDBXXLS9Xg_q7wk63FO"
  alt="Welding Banner"
  onError={(e) => { e.target.src = '/images/default-banner.jpg'; }}
  style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
/>

  <p className="legend">Drive Image Banner</p>
</div>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/wledingimage12.jpeg`}
          alt="Custom Fabrication Solutions"
          style={imageStyle}
        />
        <p className="legend">Custom Fabrication Solutions</p>
      </div>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/welding-banner.png`}
          alt="Prem & Brothers Workshop"
          style={imageStyle}
        />
        <p className="legend">Prem & Brothers Workshop</p>
      </div>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/logo.png`}
          alt="Prem & Brothers Logo"
          style={imageStyle}
        />
        <p className="legend">Prem & Brothers Workshop Logo</p>
      </div>
    </Carousel>
  );
};

export default BannerCarousel;
