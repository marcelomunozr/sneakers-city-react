import { memo, useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { connect } from 'react-redux';
import {
    getSizes
} from '../services/sneakers';
import SneakerProfile from '../components/SneakerProfile';
import {
	Container,
    Spinner,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const mapStateToProps = (state) => {
    const {
        sneakers: {
            sneakers,
            isLoadingSneakers,
            errorSneakers,
        },
    } = state;
    return {
        state,
        sneakers,
        isLoadingSneakers,
        errorSneakers,
    };
};

const Sneaker = () => {
    const [loading, setLoading] = useState(true);
    const [sizes, setSize] = useState({});
    const { state } = useLocation();

    /**
     * Método que inicializa data necesaria para la vista detalle de una zapatilla
     * Obtiene los tamaños y cantidades por tamaño de zapatillas
     * Se guarda la respuesta en un state
     */
    const initData = async () => {
        const sizesResp = await getSizes();
        setSize(sizesResp.data)
        setLoading(false);
    };

    useEffect(() => {
        initData();
    }, [])

    /**
     * Renderiza el contenido de la vista individual con detalle de la zapatilla que se envia por state
     * @returns conteindo vista
     */
	const renderSneakerView = () => {
        if (loading){
            return (
                <Container className="App-content">
                    <Spinner animation="border" variant="primary"/>
                </Container>
            );
        }
        return (
            <Container className="App-content">
                <SneakerProfile sneakerSelected={state} sizes={sizes} />
            </Container>
        );
    };

    return renderSneakerView();
};

export default connect(mapStateToProps)(memo(Sneaker));