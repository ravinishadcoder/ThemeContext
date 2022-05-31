import React,{ createContext,useContext} from 'react'
export const CartContext = createContext()
import { AuthContext } from '../context/AuthContext'




export const CartProvider = ({children})=>{
    const {isAuthorized}=useContext(AuthContext)

    const buy = ()=>{
        if(isAuthorized){
            console.log("user can buy")
        }else{
            console.log("user can not buy")
        }
        //check if user login or not
    }
    return <CartContext.Provider value={{buy}}>{children}</CartContext.Provider>
}