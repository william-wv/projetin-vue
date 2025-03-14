import axios from 'axios';

const api = axios.create({
    baseURL: 'https://brapi.dev/api/',
});

const token = 'f5ekskn8wH7rRG87RGDPwK';

export async function getAll() {
    try {
        const response = await api.get(`quote/list?=${token}`);
        return response.data.stocks;
    } catch (error) {
        console.error("Erro ao buscar ações:", error);
        throw error;
    }
}
export async function sortOrder( sortOrder = "asc") {

    try {
        const response = await api.get(`quote/list?sortOrder=${sortOrder}&token=${token}`);
    return response.data.stocks
    } catch (error) {
        console.error('Erro ao ordenar as ações:', error);
        throw error;
    }
}

export async function getStocks() {
    // https://brapi.dev/api/quote/list?token=f5ekskn8wH7rRG87RGDPwK
    try {
        const response = await api.get(`quote/list?type=stock&token=${token}`,);
        return response.data.stocks.splice(0, 500);
    } catch (error) {
        console.error('Erro ao buscar todas as ações:', error);
        throw error;
    }
}

export async function getBdr() {
    try {
        const response = await api.get(`quote/list?type=bdr&token=${token}`);
        return response.data.stocks.splice(0, 500);;
    } catch (error) {
        console.error('Erro ao ordenar as ações:', error);
        throw error;
    }
}

export async function getFund() {
    try {
        const response = await api.get(`quote/list?type=fund&token=${token}`);
        return response.data.stocks.splice(0, 500);;
    } catch (error) {
        console.error('Erro ao ordenar as ações:', error);
        throw error;
    }
}

