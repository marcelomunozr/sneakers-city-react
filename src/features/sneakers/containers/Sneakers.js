import { memo, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
    getSneakersThunk,
    deleteSneakerThunk,
} from '../actions/sneakers';
import {
    getSizes
} from '../services/sneakers';
import SneakerProfile from '../components/SneakerProfile';
// import InputSearch from '../components/InputSearch';
import {
	Container,
	Row,
    Spinner,
    Alert,
    Button,
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

const Sneakers = ({
    dispatch,
    sneakers,
    isLoadingSneakers,
    errorSneakers,
}) => {
    const [searchSneaker, setSearchSneaker] = useState('');

    const initData = async () => {
        dispatch(getSneakersThunk());
        await getSizes();
    };

    const filteredSneakers = () => {
        if (sneakers.length && searchSneaker) {
            const sneakerFilter = sneakers.filter(sneaker => {
                return sneaker.name.first.toLowerCase().includes( searchSneaker.toLowerCase() );
            })
            return sneakerFilter;
        }
        return sneakers;
    };

    const handleDeleteSneaker = (sneakerToDelete) => () => {
        dispatch(deleteSneakerThunk(sneakerToDelete, sneakers));
    };

	useEffect(() => {
        initData();
    }, []);

    // const renderFormSearch = () => {
    //     return (
    //         <InputSearch
    //             searchSneaker={searchSneaker}
    //             setSearchSneaker={setSearchSneaker}
    //         />
    //     );
    // };

    const renderSneakersList = () => {
        if (sneakers?.length) {
            const filterSneakers = filteredSneakers();
            return (
                <Row>
                    {
                        filterSneakers.map((sneaker, index) => {
                            return (
                                <SneakerProfile
                                    sneaker={sneaker}
                                    key={index}
                                    handleDeleteSneaker={handleDeleteSneaker}
                                />)
                        })
                    }
                </Row>
            );
        }
    };

	const renderSneakersView = () => {
        /* TODO:
         * controlar error al obtener datos
        if (errorSneakers) {
            <Container className="App-content">
                <Alert variant="danger" onClose={() => initData()} dismissible>
                    <Alert.Heading>Error al buscar datos</Alert.Heading>
                    <p>
                        Puede que los servicios esten presentando intermitencia. Por favor, intente nuevamente
                    </p>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Button onClick={() => initData()} variant="success">
                            Reintentar
                        </Button>
                    </div>
                </Alert>
            </Container>
        }
        */
        if (isLoadingSneakers) {
            return (
                <Container className="App-content">
                    <Spinner animation="border" variant="primary"/>
                </Container>
            );
        }
        return (
            <Container>
                {/* {renderFormSearch()} */}
                {renderSneakersList()}
            </Container>
        );
    };

    return renderSneakersView();
};

export default connect(mapStateToProps)(memo(Sneakers));