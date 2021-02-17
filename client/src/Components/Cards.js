import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from 'react-bootstrap/CardDeck';
import { BsStopwatch,  } from "react-icons/bs";
import { IoFitnessOutline } from "react-icons/io5";
import {Fragment} from 'react';
import lakeBig from '../Assets/lakeBig.jpg';
import lakeSmall from '../Assets/lakeSmall.jpg';
import performanceBig from '../Assets/performanceBig.jpg';
import performanceSmall from '../Assets/performanceSmall.jpg';
import slowBig from '../Assets/slowBig.jpg';
import slowSmall from '../Assets/slowSmall.jpg';
import Big from '../Assets/20Big.jpg';
import Small from '../Assets/20Small.jpg';
import Image from 'react-bootstrap/Image';

const Cards = () => {
  return (
<Fragment>
<CardDeck>

    <Card>
    <Card.Img variant="top" src={lakeBig} />
    <Card.Body>
        <Card.Title>Lake Inniscarra, Ireland-- Pyramid {''} <Image src={lakeSmall}/> </Card.Title>
        <Card.Text>
        <BsStopwatch/> 0:53 
        {' '}
        <IoFitnessOutline/> 6,248 M
  
        </Card.Text>
        <Card.Link href="/">View Details</Card.Link>
    </Card.Body>
    </Card>

    <Card>
    <Card.Img variant="top" src={performanceBig} />
    <Card.Body>
        <Card.Title>Performance Series {''} <Image src={performanceSmall}/> </Card.Title>
    </Card.Body>
    </Card>
    
    <Card>
    <Card.Img variant="top" src={slowBig} />
    <Card.Body>
        <Card.Title> Slow Pulls and Fast Intervals {''} <Image src={slowSmall}/> </Card.Title>
        <Card.Text>
        <BsStopwatch/> 44:13 
        {' '}
        <IoFitnessOutline/> 9,948 M
        </Card.Text>
    </Card.Body>
    </Card>

    <Card>
    <Card.Img variant="top" src={Big} />
    <Card.Body>
        <Card.Title>20 Minutes to Toned {''} <Image src={Small}/> </Card.Title>
    </Card.Body>
    </Card>

</CardDeck>
</Fragment>

  );
};

export default Cards;
