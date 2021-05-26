import React from "react";
import Basket from "./Basket";
import {connect} from "react-redux";

const BasketContainer = (props) => {

    return(
        <div>
            <Basket basketProducts={props.basketProducts} products={props.products} />
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

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasketContainer)