import React from "react";
import Slider from "react-slick";
import { Image } from 'astro:assets'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import galleryTaquile1 from '../../../public/images/gallery-taquile1.jpg';
import galleryTaquile2 from '../../../public/images/gallery-taquile2.jpg';
import galleryTaquile3 from '../../../public/images/gallery-taquile3.jpg';
import galleryTaquile4 from '../../../public/images/gallery-taquile4.jpg';
import galleryTaquile5 from '../../../public/images/gallery-taquile5.jpg';
import './style.scss'
const SliderComponent = !!Slider.default ? Slider.default : Slider

export default function AutoPlay() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    
  };

  return (
    <div className="slider-container mb-8">
      <SliderComponent {...settings}>
        <img className="p-3 rounded-lg" src={galleryTaquile1.src} alt="Galería Taquile 1" class="gallery-img-1" />
        <img className="p-3 rounded-lg" src={galleryTaquile2.src} alt='Galeria taquile 2' class='gallery-img-2' />
        <img className="p-3 rounded-lg" src={galleryTaquile3.src} alt='Galeria taquile 3' class='gallery-img-3' />
        <img className="p-3 rounded-lg" src={galleryTaquile4.src} alt='Galeria taquile 4' class='gallery-img-4' />
        <img className="p-3 rounded-lg" src={galleryTaquile5.src} alt='Galeria taquile 5' class='gallery-img-5' />
      </SliderComponent>
    </div>
  );
}
