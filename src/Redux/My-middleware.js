
// Middleware

// import {API} from "./homePageReducer";
//
// const BASE_URL = 'https://jsonplaceholder.typicode.com';
//
// const apiMiddleware = ({dispatch}) => next => async action => {
//     if (action && action.type === API) {
//
//         let {endpoint, auth, method, body, onSuccess, onFailure} = action.payload;
//
//         let config = {method};
//
//         if (auth) {
//             let token = localStorage.getItem('access-token') || null;
//
//             if (token) config.headers = {'x-access-token': token}
//             else throw "No token saved!"
//         }
//
//         if (body) {
//             config.headers = {...config.headers, "Content-Type": "application/json"};
//             config.body    = JSON.stringify(body);
//         }
//
//         const response          = await fetch(BASE_URL + endpoint, config);
//         const formattedResponse = await response.json();
//
//         if (!response.ok) {
//             await onFailure(formattedResponse.message)
//
//         } else {
//             await onSuccess(formattedResponse, dispatch);
//         }
//
//         return formattedResponse
//
//     } else return next(action)
//
// }
//
// export default apiMiddleware;




// Использование моего Middleware!
// Так выглядит запрос с редьюсера
// export const getProducts = () => {
//     const url = '/albums/1/photos'
//
//     return {
//         type: API,
//         payload: {
//             endpoint: url,
//             method: GET,
//             body: null,
//             isAuthorizeUser: false,
//             onSuccess: (data, dispatch) => {
//                 console.log('Success')
//                 dispatch(setProducts(data))
//                 return {data};
//             },
//             onFailure: (errors) => {
//                 if (!errors) console.error('Unknown error, please go home')
//                 else console.log(errors)
//
//                 return {errors}
//             }
//         }
//     }
// }

