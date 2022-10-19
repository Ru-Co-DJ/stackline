import axios from "axios"

const baseUrl = "http://localhost:5000";


// please note that the following functions are not completely implemented, it is just the structure
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
