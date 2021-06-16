import * as actionTypes from "./actionTypes"

//increaseCounter=() bu bi fonksiyon demek ve => () dediğimiz zaman da başka bi fonksiyona eşitlemiş oluyoruz
export const increaseCounter=()=>({
    type:actionTypes.INCREASE_COUNTER,
    payload:1
})

export const decreaseCounter=()=>({
    type:actionTypes.DECREASE_COUNTER,
    payload:1
})

export const increaseByTwoCounter=()=>({
    type:actionTypes.INCREASE_BY_TWO_COUNTER,
    payload:2
})
