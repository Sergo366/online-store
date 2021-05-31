const  axios  =  require ( 'axios' )


export const getPhotos = async () =>  {
    let response =  await axios.get('https://jsonplaceholder.typicode.com/albums/1/photos')
    return response.data
}


export const getData = async () =>  {
    let response =  await axios.get('http://localhost:3000')
    return response.data
}

export const postData = async (data) =>  {
    const options = {
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin': '*',
            'Content-Security-Policy': "default-src 'none'",
            'X-Content-Type-Options': 'nosniff',
            'Content-Type': 'text/html; charset=utf-8',
            'Content-Length': 1273,
            'Connection': 'keep-alive',
            'Keep-Alive': 'timeout=5'
        },
        data: {'login': data.login, 'password': data.password},
    }

    let response =  await axios.post('http://localhost:3000', options)
    return response.data
}
