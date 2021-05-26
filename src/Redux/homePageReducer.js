import {getPhotos} from "../axios/axios";
import myMiddleware from "../custom-middleware/myMiddleware";

const SET_PRODUCTS = 'SET_PRODUCTS'
const ADD_LIKE_PRODUCTS = 'ADD_PRODUCTS'
const ADD_PRODUCTS_TO_BASKET = 'ADD_PRODUCTS_TO_BASKET'
const SHOW_LIKE_PRODUCTS = 'SHOW_LIKE_PRODUCTS'
const SHOW_BASKET_PRODUCTS = 'SHOW_BASKET_PRODUCTS'
const AUTHORIZATION = 'AUTHORIZATION'
const LOG_OUT = 'LOG_OUT'

const initialState = {
    products: null,
    likeProducts: [],
    basketProducts: [],
    showLikeProduct: false,
    showBasketProduct: false,
    isAuthorizeUser: false

}

const homePageReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_PRODUCTS:
            return {...state, products: action.data}

        case ADD_LIKE_PRODUCTS:
            const likeProd = [...state.likeProducts]

            if (likeProd.indexOf(action.product) >= 0) {
                likeProd.splice(likeProd.indexOf(action.product), 1)
                return {...state, likeProducts: likeProd}
            } else {
                likeProd.push(action.product)
                return {...state, likeProducts: likeProd}
            }
        case ADD_PRODUCTS_TO_BASKET:
            const basketProd = [...state.basketProducts]
            basketProd.push(action.product)
            return {...state, basketProducts: basketProd}

        case SHOW_LIKE_PRODUCTS:
            return {
                ...state,
                showLikeProduct: !state.showLikeProduct,
                showBasketProduct: false
            }
        case SHOW_BASKET_PRODUCTS:
            return {
                ...state,
                showBasketProduct: !state.showBasketProduct,
                showLikeProduct: false
            }
        case AUTHORIZATION:
            return {
                ...state,
                isAuthorizeUser: true
            }
        case LOG_OUT:
            return {
                ...state,
                isAuthorizeUser: false
            }
        default:
            return state;
    }
}


export const setProducts = (data) => ({type: SET_PRODUCTS, data})
export const addLikeProducts = (product) => ({type: ADD_LIKE_PRODUCTS, product})
export const addProductsToBasket = (product) => ({type: ADD_PRODUCTS_TO_BASKET, product})
export const showLikeProducts = () => ({type: SHOW_LIKE_PRODUCTS})
export const showBasketProducts = () => ({type: SHOW_BASKET_PRODUCTS})
export const setAuthorization = () => ({type: AUTHORIZATION})
export const logoutUser = () => ({type: LOG_OUT})


export const getProducts = () => async (dispatch) => {
    // let response = await getPhotos().then(response => response)
    // dispatch(setProducts(response))
}


export default homePageReducer