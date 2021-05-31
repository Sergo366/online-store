import React from "react";
import './App.css';
import NavBarContainer from "../NavBar/NavBar Container";
import {Route, withRouter, Redirect} from "react-router-dom";
import Computers from "../Computers/Computers";
import Telephones from "../Telephones/Telephones";
import Games from "../Games/Games";
import Technics from "../Technics/Technics";
import HouseProduct from "../HouseProduct/HouseProduct";
import Instruments from "../Instruments/Instruments";
import Remont from "../Remont/Remont";
import Health from "../Health/Health";
import Sport from "../Sport/Sport";
import Clothes from "../Clothes/Clothes";
import HomePageContainer from "../HomePage/HomePageContainer";
import FavouriteProductContainer from "../Header/FavouriteProduct/FavouriteProductContainer";
import {connect} from "react-redux";
import { showBasketProducts} from "../../Redux/homePageReducer";
import HeaderContainer from "../Header/HeaderContainer";
import BasketContainer from "../Header/Basket/BasketContainer";
import MyAccountContainer from "../MyAccount/MyAccountContainer";
import AuthorizationContainer from "../Authorization/AuthorizationContainer";


function App(props) {

    return (
        <div className='app-container'>
            <HeaderContainer />
            <div className='content'>
                <NavBarContainer/>
            </div>
            <div className='app-wrapper-content'>
                <Route path='/' exact component={HomePageContainer}/>
                <Route path={'/myaccount'} >
                    {props.isAuthorizeUser ? <MyAccountContainer/> : <Redirect to="/autharization" />}
                </Route>
                <Route path={'/autharization'} component={AuthorizationContainer}/>
                <Route path='/computers' component={Computers}/>
                <Route path='/telefony' component={Telephones}/>
                <Route path='/game' component={Games}/>
                <Route path='/bt' component={Technics}/>
                <Route path='/tovary-dlya-doma' component={HouseProduct}/>
                <Route path='/instrumenty-i-avtotovary' component={Instruments}/>
                <Route path='/santekhnika-i-remont' component={Remont}/>
                <Route path='/krasota-i-zdorovje' component={Health}/>
                <Route path='/sport-i-uvlecheniya' component={Sport}/>
                <Route path='/shoes_clothes' component={Clothes}/>
            </div>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        isAuthorizeUser: state.homePage.isAuthorizeUser
    }
}


const AppWithRouter = withRouter(App)
export default connect(mapStateToProps, {showBasketProducts})(AppWithRouter)
