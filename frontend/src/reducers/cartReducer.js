import React from 'react'
import {CART_ADD_ITEM,CART_REMOVE_ITEM} from '../constants/cartConstants'


export const cartReducer = (state={cartItems:[]},action) => {
    if(action.type===CART_ADD_ITEM){
        const item=action.payload;

        const existItem=state.cartItems.find((x)=>{
            return x.product===item.product;
        })

        if(existItem){
            return {
                ...state,
                cartItems:state.cartItems.map((x)=>{
                    return x.product===item.product?item:x
                })
            }
        }else{
            return {
                ...state,
                cartItems:[...state.cartItems,item]
            }
        }
    } else if(action.type===CART_REMOVE_ITEM){
        return {
            ...state,
            cartItems:state.cartItems.filter((x)=>{
                return x.product!==action.payload   
            })
        }
    }

    return state;
}
