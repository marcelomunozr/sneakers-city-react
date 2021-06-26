import React, { useState } from 'react'
import {
    Row,
	Col,
	Card,
    Button,
    Form,
    Badge,
} from 'react-bootstrap';
import {
    Link,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Sneakers.css';
import labels from '../constants/labels';

/**
 * Componente funcional que se reutiliza en 2 secciones:
 * - para el listado de zapatillas del home
 * - para el detalle de zapatilla
 * @param {props} props que llegan al componente 
 * @returns componente SneakerProfile detalle de la zapatilla
 */
const SneakerProfile = ({
    sneaker,
    sneakerSelected,
    sizes,
}) => {
    const [units, setUnits] = useState(null);
    const isSingleSneaker = typeof sneakerSelected !== "undefined";
    const theSneakerSelected = sneaker || sneakerSelected.sneaker;
    const {
        img,
        modelo,
        marca,
        fechaLanzamiento,
        precio,
        descripcion,
    } = theSneakerSelected;
    const formatPrice = precio?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    const goToSneakerParams = {
        pathname: `/sneaker/${sneaker?.id}`,
        state: { sneaker }
    };

    /**
     * Setea la cantidad de zapatilla dependiendo de la talla seleccionada y estás tallas están divididas por zapatilla
     * @param {object} event opción del select tamaño zapatilla
     * @param {object} sizesOfSneaker obj tamaños de las zapatillas
     */
    const selectedSize = (event, sizesOfSneaker) => {
        const { cantidad } = sizesOfSneaker.find(unit => event.target.value === unit.id);
        setUnits(cantidad);
    }

    /**
     * Método que retorna la imagen junto con link o sola dependiendo si es la vista detalle de una zapatilla o el listado 
     * @returns Link o Img dependiendo de la vista que se encuentra
     */
    const renderImageSneaker = () => {
        const image = (<Card.Img variant="top" src={img} />);
        if (!isSingleSneaker) {
            return (
                <Link to={goToSneakerParams}>
                    {image}
                </Link>
            );
        }
        return image;
    }

    /**
     * Renderiza opciones de formulario seleccionadas por el usuario
     * Esté método solo aparece cuando es la pantalla detalle de zapatilla
     */
    const renderSingleOptions = () => {
        const sizesOfSneaker = sizes.filter(size => size.sneaker === theSneakerSelected.id);
        return (
            <Form>
                <Form.Row className="align-items-center">
                    <Row className="mb-4">
                        <Col xs="auto">
                            <Form.Control
                                as="select"
                                className="mr-sm-2 custom-select"
                                id="inlineFormCustomSelect"
                                custom
                                onChange={e => selectedSize(e, sizesOfSneaker)}
                            >
                                <option value="0" key="0">{labels.SNEAKER.TALLAS}</option>
                                {
                                    sizesOfSneaker.map((size) => {
                                        return (
                                            <option value={size.id} key={size.id}>{size.talla}</option>
                                        );
                                    })
                                }
                            </Form.Control>
                        </Col>
                        {units &&
                            <Col xs="auto">
                                <Button variant="primary" className="custom-tag">
                                    <Badge>{units} {labels.SNEAKER.UNIDADES_DISPONIBLES}</Badge>
                                </Button>
                            </Col>
                        }
                    </Row>
                    <Row>
                        <Col xs="auto">
                            <Button
                                variant="dark"
                                // onClick={}
                            >
                                {labels.BUTTONS.ADD}
                            </Button>
                        </Col>
                    </Row>
                </Form.Row>
            </Form>
        );
    };

    /**
     * Renderiza contenido que se muestra en la card para listado de todas las zapatillas y vista detalle de una
     * Muestra contenido dependiendo del valor de la constante isSingleSneaker
     * @returns CardBody
     */
    const renderBody = () => (
        <Card.Body>
            <Card.Title>{modelo}</Card.Title>
            <Card.Text className="mb-1">{`${labels.SNEAKER.MARCA}: ${marca}`}</Card.Text>
            <Card.Text className="mb-1">{`${labels.SNEAKER.FECHA}: ${fechaLanzamiento}`}</Card.Text>
            {isSingleSneaker && <Card.Text className="mb-4">{descripcion}</Card.Text>}
            <Card.Text className="mb-4 txt-price">$ {formatPrice}</Card.Text>
            {isSingleSneaker && renderSingleOptions()}
        </Card.Body>
    );

    /**
     * Renderiza cuando es la vista detalle
     * @returns deatlle zapatilla
     */
    const renderSingleSneaker = () => (
        <Row>
            <Col sm={6} md={4} lg={4}>
                <Card className="mb-4">
                    {renderImageSneaker()}
                </Card>
            </Col>
            <Col sm={6} md={8} lg={8}>
                <Card className="mb-4">
                    {renderBody()}
                </Card>
            </Col>
        </Row>
    );

    /**
     * Renderiza cuando es la vista detalle
     * @returns Todas las zapatillas dependiendo de la validacion isSingleSneaker
     */
    const renderSneakerProfile = () => {
        if (isSingleSneaker) {
            return renderSingleSneaker();
        }
        return(
            <Col sm={6} md={4} lg={4}>
                <Card className="mb-4">
                    {renderImageSneaker()}
                    {renderBody()}
                </Card>
            </Col>
        );
    };

    return renderSneakerProfile();
};

export default SneakerProfile;
