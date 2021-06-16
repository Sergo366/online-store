import {
    ADD_LIKE_PRODUCTS,
    ADD_PRODUCTS_TO_BASKET, AUTHORIZATION,
    GET_DATA_FROM_SERVER, LOG_OUT,
    SET_PRODUCTS, SHOW_BASKET_PRODUCTS,
    SHOW_LIKE_PRODUCTS
} from "../constants/constants";

export interface productsType {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
    error?: any
}

export interface initialStateType {
    products: null | productsType[]
    likeProducts: string[]
    basketProducts: string[]
    showLikeProduct: boolean
    showBasketProduct: boolean
    isAuthorizeUser: boolean
    serverData: any
}

export interface registrationDataType {
    username: string
    password: string
}

export type setProductsType = {
    type: typeof SET_PRODUCTS
    data: productsType[]
}

export type addLikeProductsType = {
    type: typeof ADD_LIKE_PRODUCTS
    product: string
}

export type addProductsToBasketType = {
    type: typeof ADD_PRODUCTS_TO_BASKET
    product: string
}

export type getServerDataType = {
    type: typeof GET_DATA_FROM_SERVER
    data: string
}

export type showLikeProductsType = {
    type: typeof SHOW_LIKE_PRODUCTS
}
export type showBasketProductsType = {
    type: typeof SHOW_BASKET_PRODUCTS
}
export type setAuthorizationType = {
    type: typeof AUTHORIZATION
}
export type logoutUserType = {
    type: typeof LOG_OUT
}