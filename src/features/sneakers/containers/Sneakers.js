import { memo, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
    getSneakersThunk,
} from '../actions/sneakers';
import SneakerProfile from '../components/SneakerProfile';
import {
	Container,
	Row,
    Spinner,
    Button,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import labels from '../constants/labels';

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

const Sneakers = ({
    dispatch,
    sneakers,
    isLoadingSneakers,
    errorSneakers, // TODO: agregar alert en caso de errorServicio
}) => {
    const [sneakersToShow, setSneakersToShow] = useState(10);

    /**
     * Ejecuta método que setea las zapatillas en storage con redux
     */
    const initData = async () => {
        dispatch(getSneakersThunk());
    };

	useEffect(() => {
        initData();
    }, []);

    /**
     * Renderiza listado de zapatillas
     * En primera instancia carga 10 items que es el valor inicial de sneakersToShow
     * El state sneakersToShow va aumentando si el usuario lo necesita
     */
    const renderSneakersList = () => {
        if (sneakers?.length) {
            const filterSneakers = sneakers.slice(0, sneakersToShow);
            return (
                <Row>
                    {
                        filterSneakers.map((sneaker, index) => {
                            return (
                                <SneakerProfile
                                    sneaker={sneaker}
                                    key={index}
                                />)
                        })
                    }
                </Row>
            );
        }
    };

    /**
     * Renderiza el button que carga más contenido
     * @returns button que aumenta en 10 la cantidad de items a visualizar
     */
    const renderLoadMore = () => (
        <div className="d-flex justify-content-center mt-4 mb-4">
            <Button onClick={() => setSneakersToShow(sneakersToShow + 6)} variant="dark">
                {labels.BUTTONS.CARGAR_MAS}
            </Button>
        </div>
    );

    /**
     * Renderiza un loading si no ha cargado la data de la api
     * Cuando carga la data isLoading pasa a false y renderiza el contenido
     * @returns contenido de la vista de todas las zapatillas sneakers
     */
	const renderSneakersView = () => {
        if (isLoadingSneakers) {
            return (
                <Container className="App-content">
                    <Spinner animation="border" variant="primary"/>
                </Container>
            );
        }
        return (
            <Container>
                {renderSneakersList()}
                {sneakers.length > sneakersToShow && renderLoadMore()}
            </Container>
        );
    };

    return renderSneakersView();
};

export default connect(mapStateToProps)(memo(Sneakers));