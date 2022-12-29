import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import galleryPhoto1 from '../images/galeri/galeri1.jpg'
import galleryPhoto2 from '../images/galeri/galeri2.jpg'
import galleryPhoto3 from '../images/galeri/galeri3.jpg'
import galleryPhoto4 from '../images/galeri/galeri4.jpg'
import galleryPhoto5 from '../images/galeri/galeri5.jpg'

const Gallery = () => {
  return (
    <>
        <div className="container-fluid py-5 text-light text-center dark-bg img-fluid vh30">
            <div className="d-flex flex-column  justify-content-center h-100">
            <h1 className="display-5 "> FOTOĞRAF GALERİSİ</h1>
            </div>
        </div>

        <div className='container py-4'>
        
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={galleryPhoto1}
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
                src={galleryPhoto2}
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
                src={galleryPhoto3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={galleryPhoto4}
                alt="Fourth slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={galleryPhoto5}
                alt="Fifth slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    </>
  )
}
 export default Gallery
