import React from "react";
import CertificatesCard from "./CertificatesCard";
import { CertificatesData } from '../data/CertificatesData';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function Certificates() {

      const settings = {
          dots: true,
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,

          arrows: false,
          autoplay: true,
          autoplaySpeed: 5000,
        };
        const slider = React.useRef(null);
  return (
<section className="certificates">
    <div className="container">
      <p className="certificates__title">сертификаты</p>
      <ul className="certificates__list">
      {CertificatesData.map(({ title, content, picture }, index) => (
          <CertificatesCard key={index} title={title} content={content} picture={picture} />
        ))}
      </ul>
      <div className="certificates__slider">
                                    <Slider ref={slider} {...settings}>
                            {CertificatesData.map(({ title, content, picture }, index) => (
          <CertificatesCard key={index} title={title} content={content} picture={picture} />
        ))} 
                            </Slider>
                            <div className="certificates__button">
                            <button className="slick_prev" onClick={() => slider?.current?.slickPrev()}><svg width="97" height="63" viewBox="0 0 97 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1350_255)">
<rect x="10" y="10.0005" width="76.3636" height="42.2727" rx="21.1364" fill="white" shape-rendering="crispEdges"/>
<path d="M40.874 31.1367H55.8736" stroke="#008082" stroke-linecap="round"/>
<path d="M43.9514 36.137L40.49 31.1371L43.9514 26.1372" stroke="#008082" stroke-linecap="round"/>
</g>
<defs>
<filter id="filter0_d_1350_255" x="0" y="0.000488281" width="96.3635" height="62.2729" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1350_255"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1350_255" result="shape"/>
</filter>
</defs>
</svg>
</button>
                            <button className="slick_next" onClick={() => slider?.current?.slickNext()}><svg width="97" height="63" viewBox="0 0 97 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1350_260)">
<rect x="87" y="52.2729" width="76.3636" height="42.2727" rx="21.1364" transform="rotate(-180 87 52.2729)" fill="white" shape-rendering="crispEdges"/>
<path d="M56.126 31.1367L41.1264 31.1367" stroke="#008082" stroke-linecap="round"/>
<path d="M53.0486 26.1365L56.51 31.1364L53.0486 36.1362" stroke="#008082" stroke-linecap="round"/>
</g>
<defs>
<filter id="filter0_d_1350_260" x="0.636475" y="0" width="96.3635" height="62.2729" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1350_260"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1350_260" result="shape"/>
</filter>
</defs>
</svg></button>   
                            </div>

      </div>

    </div>
</section>
    );
}

export default Certificates;