import './App.css';
import Header from "../Header/Header";
import NavBarContainer from "../NavBar/NavBar Container";
import React, {useState} from "react";
import {Route, withRouter} from "react-router-dom";
import HomePage from "../Products/HomePage";
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
import FavouriteProduct from "../Header/FavouriteProduct/FavouriteProduct";

function App() {

    const [state, setState] = useState(false)

    let idPeople = []
    if (idPeople) {
        let data = JSON.parse(localStorage.getItem('idPeople'))
        data ? idPeople.push(...data) : idPeople = []
    }

    let addNewFavouriteProduct = (id) => {
        // console.log(idPeople)
        if (idPeople.indexOf(id) >= 0 ) {
            idPeople.splice(idPeople.indexOf(id), 1)
        } else {
            idPeople.push(id)
            }
        localStorage.clear()
        localStorage.setItem('idPeople', JSON.stringify(idPeople))
    }

    return (
            <div className='app-container'>
                <Header setState={setState} state={state} />
                <div className='content'>
                    <NavBarContainer/>
                </div>
                <div className='app-wrapper-content'>
                    {state ? <FavouriteProduct />  : null}
                    <Route path='/' exact render={() => <HomePage addNewFavouriteProduct={addNewFavouriteProduct}/>}/>
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

const AppWithRouter = withRouter(App)
export default AppWithRouter
