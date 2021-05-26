// // import axios from "axios";
// //
// //
// // const myMiddleware = dispatch => data => {
// //     console.log('hello')
// //     const { methodAxios, urlAxios, actionCreator } = data
// //
// //
// //
// //     axios
// //         .request(methodAxios, urlAxios )
// //         .then(response => {
// //             console.log(response)
// //             return response
// //         })
// //         .catch(error => console.log(error))
// // }
// //
// // export default myMiddleware
//
//
//
// //
// // export const middleware = (store) =>  (next) => (action) => {
// //     console.groupCollapsed(action.type)
// //     console.log('Action', action)
// //     console.log('Previous state', store.getState())
// //     console.log(next, action, 'next, action')
// //
// //         let result = next(action)
// //
// //     console.log('Next state', store.getState())
// //     console.groupEnd()
// //
// //     return result
// // }
//
// // inspired by https://leanpub.com/redux-book
// import axios from "axios"
// import { accessDenied, apiError, apiStart, apiEnd } from "../actions/api"
//
// export const API = "API"
//
// export const middleware = ({ dispatch }) => next => action => {
//     next(action);
//
//     if (action.type !== API) return;
//
//     const {url, method, data, accessToken, onSuccess, onFailure, label, headers} = action.payload
//
//     const dataOrParams = ["GET", "DELETE"].includes(method) ? "params" : "data"
//
//     // axios default configs
//     axios.defaults.baseURL = process.env.REACT_APP_BASE_URL || ""
//     axios.defaults.headers.common["Content-Type"] = "application/json"
//     axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`
//
//     if (label) {
//         dispatch(apiStart(label))
//     }
//
//     axios
//         .request({url, method, headers, [dataOrParams]: data})
//         .then(({ data }) => dispatch(onSuccess(data)))
//         .catch(error => {
//             dispatch(apiError(error))
//             dispatch(onFailure(error))
//
//             if (error.response && error.response.status === 403) dispatch(accessDenied(window.location.pathname))})
//         .finally(() => {
//             if (label) dispatch(apiEnd(label))
//         })
// }
