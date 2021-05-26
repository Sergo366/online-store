import React from "react"
import Authorization from "./Authorization";
import {connect} from "react-redux";
import {setAuthorization} from "../../Redux/homePageReducer";


const AuthorizationContainer = (props) => {

    return (
        <Authorization authorizationUser={props.authorizationUser}/>
    )
}


const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        authorizationUser: () => {
            dispatch(setAuthorization())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationContainer)