import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const BannerCarousel = () => {
  return (
    <Carousel 
      autoPlay 
      infiniteLoop 
      showThumbs={false} 
      showStatus={false} 
      interval={2000}
    >
      <div>
        <img src="/wledingimage1.jpeg" alt="Welding Banner 1" className="banner-img" />
        <p className="legend">Precision Welding Services</p>
      </div>
      <div>
        <img src="/wledingimage12.jpeg" alt="Welding Banner 2" className="banner-img" />
        <p className="legend">Custom Fabrication Solutions</p>
      </div>
      <div>
        <img src="/welding-banner.png" alt="Welding Banner 3" className="banner-img" />
        <p className="legend">Prem & Brothers Workshop</p>
      </div>
    </Carousel>
  );
};

export default BannerCarousel;
