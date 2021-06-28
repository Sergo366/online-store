import {registrationDataType} from "../types/types homePageReducer";
import axios from'axios'

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
    let response = await axios.post('http://localhost:5000/registration', {
        "username": data.username,
        "password": data.password
    })
    console.log('ressss',response)
    return response
}

// {
//     headers: {
//         'Content-Type': 'application/json',
//             "Access-Control-Allow-Origin": "*",
//     }
//}