import React from "react";
import Basket from "./Basket";
import {connect} from "react-redux";
import {showBasketProducts} from "../../../Redux/homePageReducer";

const BasketContainer = (props) => {

    return(
        <div>
            <Basket basketProducts={props.basketProducts} products={props.products} closeBasket={props.closeBasket} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        basketProducts: state.homePage.basketProducts,
        products: state.homePage.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeBasket: () => {
            dispatch(showBasketProducts())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasketContainer)