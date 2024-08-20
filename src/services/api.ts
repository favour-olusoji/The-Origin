import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; 

export const signup = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/signup`, userData);
        return response.data;
    } catch (error) {
        console.error('Signup error:', error.response.data);
        throw error.response.data;
    }
};

export const signin = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/signin`, userData);
        return response.data;
    } catch (error) {
        console.error('Signin error:', error.response.data);
        throw error.response.data;
    }
};

