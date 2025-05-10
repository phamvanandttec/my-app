'use client';

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function KmSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <Slider {...settings}>
      <div>
      <Image src="/img1.jpg" alt="Product 1" width={400} height={100} />
      </div>
      <div>
      <Image src="/img2.jpg" alt="Product 1" width={400} height={100} />
      </div>
      <div>
      <Image src="/img3.jpg" alt="Product 1" width={400} height={100} />
      </div>
      <div>
      <Image src="/img4.jpg" alt="Product 1" width={400} height={100} />
      </div>
      <div>
      <Image src="/img1.jpg" alt="Product 1" width={400} height={100} />

      </div>
      <div>
      <Image src="/img2.jpg" alt="Product 1" width={400} height={100} />
      </div>
    </Slider>
  );
}