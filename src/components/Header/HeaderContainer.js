import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {logoutUser, showBasketProducts, showLikeProducts} from "../../Redux/homePageReducer";

const HeaderContainer = (props) => {

    return (
        <div>
            <Header toggleLikeProducts={props.toggleLikeProducts} showBasketProducts={props.showBasketProducts} authorization={props.authorization}
                    logoutUser={props.logoutUser} showActiveLikeProduct={props.showActiveLikeProduct} showActiveBasket={props.showActiveBasket}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        authorization: state.homePage.isAuthorizeUser,
        showActiveLikeProduct: state.homePage.showLikeProduct,
        showActiveBasket: state.homePage.showBasketProduct
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleLikeProducts: () => {
            dispatch(showLikeProducts())
        },
        showBasketProducts: () => {
            dispatch(showBasketProducts())
        },
        logoutUser: () => {
            dispatch(logoutUser())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)