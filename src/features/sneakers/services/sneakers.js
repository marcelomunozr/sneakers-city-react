import axios from 'axios';

const getSneakerReq = axios.create({
    baseURL: "/api/sneakers",
});

const getSizeReq = axios.create({
    baseURL: "/api/sizes",
});

const getSneakers = async () => {
    const resp = await getSneakerReq.get('/');
    return resp;
}

const getSizes = async () => {
    const resp = await getSizeReq.get('/');
    console.log('responseSizes', resp);
    return resp;
}

const deleteSneaker = async (sneaker) => {
    const { id } = sneaker;
    const resp = await getSneakers.delete(`/${id}`);
    return resp;
}

export {
    getSneakers,
    getSizes,
    deleteSneaker,
};