import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from '../images/carousel1.jpg'
import carousel2 from '../images/carousel2.jpg'
import carousel3 from '../images/carousel3.jpg'


const Photo = () => {
  return (

    <div className='container my-4'>
        <Carousel fade>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={carousel1}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={carousel2}
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={carousel3}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default Photo
