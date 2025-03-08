import axios from 'axios';

const api = axios.create({
    baseURL: 'https://brapi.dev/api/',
});

const token = 'f5ekskn8wH7rRG87RGDPwK';

export async function getStocks() {
  // https://brapi.dev/api/quote/list?token=f5ekskn8wH7rRG87RGDPwK
    try {
        const response = await api.get(`quote/list?token=${token}`);
        return response.data.stocks.splice(0, 100); 
    } catch (error) {
        console.error('Erro ao buscar todas as ações:', error);
        throw error;
    }
}
