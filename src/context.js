import React, { Component } from 'react'
import {storeProducts,detailProduct} from './data';

const ProductContext = React.createContext();
//provider
//Consumer

class ProductProvider extends Component {
    state={
        products:storeProducts,
        detailProduct:detailProduct
    }

    handleDetail = () =>{
        console.log("hello from Detail");
    }

    addToCart = () =>{
        console.log("hello from add to cart");
    }
    render() {
        return (
            <ProductContext.Provider value = {{
                  ...this.state,
                  handleDetail:this.handleDetail,
                  addToCart:this.addToCart,
            }}>
                    {this.props.children}    
            </ProductContext.Provider>
        )
    }
}


const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};