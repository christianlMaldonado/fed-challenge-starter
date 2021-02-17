import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'

// This is the Jumbotron in the Home page
const JumbotronOne = () => {
    return (
        <div>
            <Jumbotron>
                <h1> Welcome To The iFit Code Challenge </h1>
                <p> This Challenge Was Made Using React.js And Node.js</p>
            </Jumbotron>
        </div>
    );
}

//exporting to be used as a component
export default JumbotronOne;