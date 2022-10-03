import axios from "axios"

const baseUrl = "http://localhost:5000";

export const getSales = async () => {
    try {
        const { data } = await axios.get(`${baseUrl}/sales/all`)
        return data
    } catch (error) {
        console.log(error);
        return null
    }

}
export const getStock = async () => {
    try {
        const { data } = await axios.get(`${baseUrl}/stock/all`)
        return data
    } catch (error) {
        console.log(error);
        return null
    }
}
export const getWorkers = async () => {
    try {
        const { data } = await axios.get(`${baseUrl}/workers/all`)
        return data
    } catch (error) {
        console.log(error);
        return null
    }
}
