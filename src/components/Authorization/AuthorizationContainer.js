import React from "react"
import Authorization from "./Authorization";
import {connect} from "react-redux";
import {getDataFromServer, setAuthorization} from "../../Redux/homePageReducer";



const AuthorizationContainer = ({getDataFromServer, serverData, authorizationUser}) => {

    const getData = (data) => {
        console.log(data)
        getDataFromServer(data)
    }

    return (
        <Authorization authorizationUser={authorizationUser}  onSubmit={getData}/>
    )
}

const mapState = (state) => {
    return {
        serverData: state.homePage.serverData
    }
}


export default connect(mapState, {authorizationUser: setAuthorization, getDataFromServer})(AuthorizationContainer)