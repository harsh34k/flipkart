// src/components/Carousel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styleSubComponent/Crousel.css';

const images = [
    { url: "https://rukminim1.flixcart.com/flap/3376/560/image/7760adba4cdde874.jpg?q=50", alt: 'Image 1' },
    { url: 'https://rukminim1.flixcart.com/flap/1688/280/image/90cdb794821102c8.jpg?q=50', alt: 'Image 2' },
    { url: 'https://rukminim1.flixcart.com/flap/3376/560/image/374a88846acf16b2.jpg?q=50', alt: 'Image 3' },
];

const MyCarousel = () => {
    return (
        <div className="carousel-container" style={{ maxWidth: "100%" }}>
            <Carousel showArrows={true} showThumbs={false} swipeable={true} autoPlay={true} infiniteLoop={true} interval={2500} >
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image.url} alt={image.alt} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default MyCarousel;
