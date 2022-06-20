import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        style={{height: '600px', width: '600px'}}
                        className="d-block w-100"
                        src="https://i.ibb.co/vsqkwcn/pexels1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        style={{height: '600px', width: '600px'}}
                        className="d-block w-100"
                        src="https://i.ibb.co/g4MhFB2/pexels2.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{height: '600px', width: '600px'}}
                        className="d-block w-100"
                        src="https://i.ibb.co/mNf26S6/pexels3.jpg"
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

        </>
    );
};

export default Banner;