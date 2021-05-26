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

const mapState = (state) => {
    return {

    }
}


export default connect(mapState, null)(MyAccountContainer)