import React from "react"
import MyAccount from "./MyAccount";
import {connect} from "react-redux";

const MyAccountContainer = (props) => {

    return(
        <>
          <MyAccount />
        </>
    )
}

const mapDispatch = (dispatch) => {
    return {

    }
}


export default connect(null, mapDispatch)(MyAccountContainer)