import React from "react"
import Authorization from "./Authorization";
import {connect} from "react-redux";
import {getDataFromServer, setAuthorization} from "../../Redux/homePageReducer";



const AuthorizationContainer = ({getDataFromServer, serverData, authorizationUser}) => {



    return (
        <Authorization authorizationUser={authorizationUser} getDataFromServer={getDataFromServer}/>
    )
}

const mapState = (state) => {
    return {
        serverData: state.homePage.serverData
    }
}


export default connect(mapState, {authorizationUser: setAuthorization, getDataFromServer})(AuthorizationContainer)