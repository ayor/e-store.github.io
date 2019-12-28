import axios from 'axios';


export const databaseAPI = axios.create(
    {
        baseURL: 'https://localhost:44351/api/v1',
        
    }
)

export const countriesAPI = axios.create({
    baseURL: 'https://restcountries.eu/rest/v2/all'

})
