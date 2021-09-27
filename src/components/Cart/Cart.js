import React from 'react';
import { Card, Col } from 'react-bootstrap';
const Cart = (props) => {
    const { title, description, urlToImage } = props.data

    return (

        <Col className="g-4">
            <Card >
                <Card.Img variant="top" src={urlToImage} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>



    );
};

export default Cart;