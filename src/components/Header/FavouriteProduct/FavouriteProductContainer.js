import FavouriteProduct from "./FavouriteProduct";
import {connect} from "react-redux";
import {addProductsToBasket} from "../../../Redux/homePageReducer";


const FavouriteProductContainer = (props) => {

    return (
        <FavouriteProduct products={props.products} likeProducts={props.likeProducts} addProductsToBasket={props.addProductsToBasket}/>
    )
}


const mapStateToProps = (state) => {
    return {
        products: state.homePage.products,
        likeProducts: state.homePage.likeProducts,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProductsToBasket: (idProduct) => {
            dispatch(addProductsToBasket(idProduct))
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteProductContainer)
