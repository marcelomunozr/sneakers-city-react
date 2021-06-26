import axios from 'axios';

const getUsers = axios.create({
    baseURL: "/api/sneakers",
    headers: {
        withCredentials: false,
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
});

const getSneakers = async () => {
    const resp = await getUsers.get('/');
    console.log('response', resp);
    return resp;
}

const deleteSneaker = async (sneaker) => {
    const { id } = sneaker;
    const resp = await getSneakers.delete(`/${id}`);
    return resp;
}

export {
    getSneakers,
    deleteSneaker,
};