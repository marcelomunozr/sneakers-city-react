import React from 'react'
import {
	Col,
	Card,
	Button,
    Row,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Sneakers.css';
import labels from '../constants/labels';

const SneakerProfile = ({
    sneaker,
    handleDeleteSneaker,
}) => {
    const {
        img,
        modelo,
        marca,
        fechaLanzamiento,
        precio,
        descripcion,
    } = sneaker;
    return (
        <Col sm={6} md={4} lg={3}>
            <Card className="mb-4">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{modelo}</Card.Title>
                    <Card.Text className="mb-1">{`${labels.SNEAKER.MARCA}: ${marca}`}</Card.Text>
                    <Card.Text className="mb-1">{`${labels.SNEAKER.FECHA}: ${fechaLanzamiento}`}</Card.Text>
                    <Card.Text className="mb-1">{`${labels.SNEAKER.VALOR}: ${precio}`}</Card.Text>
                    <Card.Text className="mb-4 descnike">{descripcion}</Card.Text>
                    <Row>
                        <Col xs="auto">
                            <Button
                                variant="dark"
                                onClick={handleDeleteSneaker(sneaker)}
                            >
                                {labels.BUTTONS.DELETE}
                            </Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default SneakerProfile;
