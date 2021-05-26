import React from 'react'
import HomePage from "./HomePage";
import {connect} from "react-redux";
import {addLikeProducts, getProducts} from "../../Redux/homePageReducer";

const HomePageContainer = (props) => {


    // useEffect(() => {
    //     getPhotos().then(r => {
    //         if (!state) {
    //             setState(r)
    //         }
    //     })
    // })

    return (
        <HomePage addProducts={props.addProducts} products={props.products} addNewLikeProducts={props.addNewLikeProducts}

                />
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.homePage.products
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
      addProducts: () => {
          dispatch(getProducts())
      },
      addNewLikeProducts: (product) => {
          dispatch(addLikeProducts(product))
      }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer)