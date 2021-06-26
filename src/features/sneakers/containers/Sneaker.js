import { memo, useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
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

const Sneaker = ({
    dispatch,
    sneakers,
    isLoadingSneakers,
    errorSneakers,
}) => {
    const [loading, setLoading] = useState(true);
    const [sizes, setSize] = useState({});
    const { state } = useLocation();

    const initData = async () => {
        const sizesResp = await getSizes();
        setSize(sizesResp.data)
        setLoading(false);
    };

    useEffect(() => {
        initData();
    }, [])

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