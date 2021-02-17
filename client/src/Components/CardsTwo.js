import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from 'react-bootstrap/CardDeck';
import { BsStopwatch,  } from "react-icons/bs";
import { IoFitnessOutline } from "react-icons/io5";
import {Fragment} from 'react';
import charlesBig from '../Assets/charlesBig.jpg';
import charlesSmall from '../Assets/charlesSmall.jpg';
import fullBig from '../Assets/fullBig.jpg';
import fullSmall from '../Assets/fullSmall.jpg';
import kafueBig from '../Assets/kafueBig.jpg';
import kafueSmall from '../Assets/kafueSmall.jpg';
import shredBig from '../Assets/shredBig.jpg';
import shredSmall from '../Assets/shredSmall.jpg';
import Image from 'react-bootstrap/Image';

const CardsTwo = () => {
  return (
<Fragment>
<CardDeck>

    <Card>
    <Card.Img variant="top" src={charlesBig} />
    <Card.Body>
        <Card.Title>Charles Race, Boston, Massachusetts {''} <Image src={charlesSmall} /></Card.Title>
        <Card.Text>
        <BsStopwatch/> 36:22 
        {' '}
        <IoFitnessOutline/> 8,648 M
        </Card.Text>
    </Card.Body>
    </Card>

    <Card>
    <Card.Img variant="top" src={fullBig} />
    <Card.Body>
        <Card.Title>Full-Body HIIT Series {''} <Image src={fullSmall} /> </Card.Title>
    </Card.Body>
    </Card>
    
    <Card>
    <Card.Img variant="top" src={kafueBig} />
    <Card.Body>
        <Card.Title> Kafue River, Zambia -- Power Stroke Pyramid {''} <Image src={kafueSmall} /> </Card.Title>
        <Card.Text>
            <BsStopwatch/> 22:22 
            {' '}
            <IoFitnessOutline/> 4,660 M
        </Card.Text>
    </Card.Body>
    </Card>

    <Card>
    <Card.Img variant="top" src={shredBig}/>
    <Card.Body>
        <Card.Title>Shred & Burn Series {''} <Image src={shredSmall} /> </Card.Title>
    </Card.Body>
    </Card>

</CardDeck>
</Fragment>

  );
};

export default CardsTwo;
