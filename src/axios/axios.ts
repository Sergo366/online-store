import {registrationDataType} from "../types/types homePageReducer";

const axios = require('axios')

export const getPhotos = async () => {
    try {
        let response = await axios.get('https://jsonplaceholder.typicode.com/albums/1/photos')
        return response.data

    } catch (e) {
        console.log('error', e)
    }
}

export const registration = async (data: registrationDataType) => {
    const JsonData = JSON.stringify(data)
    let response

    try {
        response = await axios.post('http://localhost:5000/registration', JsonData, {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            }
        })
        return response
    } catch (e) {
        console.log('error', e)
    }


}
