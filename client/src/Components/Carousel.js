import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slideone from '../Assets/lakeBig.jpg';
import slidetwo from '../Assets/fullBig.jpg';
import slidethree from '../Assets/20Big.jpg';
// This lets us use the carousel in the Home page
const Section = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slideone}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Welcome To iFit</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slidetwo}
                        alt="Second Slide"
                    />

                    <Carousel.Caption>
                        <h3>Awesome Playlists!</h3>
                        <p>Workout with iFit</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slidethree}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3> Watch Anywhere</h3>
                        <p> Watch Anywhere With These iFit Apps</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Section;