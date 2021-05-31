import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {logoutUser, showBasketProducts, showLikeProducts} from "../../Redux/homePageReducer";

const HeaderContainer = (props) => {
    let activeIconMyAccount = window.location.pathname === '/myaccount'


    return (
        <div>
            <Header toggleLikeProducts={props.toggleLikeProducts} showBasketProducts={props.showBasketProducts} authorization={props.authorization}
                    logoutUser={props.logoutUser} showActiveLikeProduct={props.showActiveLikeProduct} showActiveBasket={props.showActiveBasket}
                    activeIconMyAccount={activeIconMyAccount} stateShowLikeProduct={props.stateShowLikeProduct} stateShowBasketProduct={props.stateShowBasketProduct}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        authorization: state.homePage.isAuthorizeUser,
        showActiveLikeProduct: state.homePage.showLikeProduct,
        showActiveBasket: state.homePage.showBasketProduct,
        stateShowLikeProduct: state.homePage.showLikeProduct,
        stateShowBasketProduct: state.homePage.showBasketProduct,
    }
}


export default connect(mapStateToProps,
    {toggleLikeProducts: showLikeProducts, showBasketProducts, logoutUser})(HeaderContainer)