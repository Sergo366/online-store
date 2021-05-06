const  axios  =  require ( 'axios' )

export const getPosts = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.data)
}

export const getPhotos = async () =>  {
    let response =  await axios.get('https://jsonplaceholder.typicode.com/albums/1/photos')
    return response.data
}