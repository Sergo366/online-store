import {getPhotos, registration} from "../axios/axios";
import {
    SET_PRODUCTS,
    ADD_LIKE_PRODUCTS,
    ADD_PRODUCTS_TO_BASKET,
    SHOW_LIKE_PRODUCTS,
    SHOW_BASKET_PRODUCTS,
    AUTHORIZATION,
    LOG_OUT,
    GET_DATA_FROM_SERVER
} from "../constants/constants";
import {
    addLikeProductsType,
    addProductsToBasketType, getServerDataType,
    initialStateType, logoutUserType,
    productsType, registrationDataType, setAuthorizationType,
    setProductsType, showBasketProductsType, showLikeProductsType
} from "../types/types homePageReducer";


const initialState: initialStateType = {
    products: null,
    likeProducts: [],
    basketProducts: [],
    showLikeProduct: false,
    showBasketProduct: false,
    isAuthorizeUser: false,
    serverData: null
}

const homePageReducer = (state = initialState, action: any): initialStateType => {

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
        case GET_DATA_FROM_SERVER:
            return {
                ...state,
                serverData: action.data
            }
        default:
            return state;
    }
}
export default homePageReducer


export const setProducts = (data: productsType[]): setProductsType => ({type: SET_PRODUCTS, data})
export const addLikeProducts = (product: string): addLikeProductsType => ({type: ADD_LIKE_PRODUCTS, product})
export const addProductsToBasket = (product: string): addProductsToBasketType => ({type: ADD_PRODUCTS_TO_BASKET, product})
export const getServerData = (data: any): getServerDataType => ({type: GET_DATA_FROM_SERVER, data})
export const showLikeProducts = (): showLikeProductsType => ({type: SHOW_LIKE_PRODUCTS})
export const showBasketProducts = (): showBasketProductsType => ({type: SHOW_BASKET_PRODUCTS})
export const setAuthorization = (): setAuthorizationType => ({type: AUTHORIZATION})
export const logoutUser = (): logoutUserType => ({type: LOG_OUT})


export const getProducts: Function = () => async (dispatch: Function) => {
    let response = await getPhotos()
    dispatch(setProducts(response))
}

export const getDataFromServer: Function = (objectData: registrationDataType) => async (dispatch: Function) => {

    try {
        let response = await registration(objectData)
        console.log('resp',response)
    } catch (e) {
        console.log('error', e)
    }

    // dispatch(setAuthorization())

}
