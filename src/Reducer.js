import {SELECT, UNSELECT, UNDO, CONFIRM, CHANGE} from "./Actions";

export const initialState = {
    cart: [],
    occupied: [],
    total: 0.0,
    fares: [
        {tariffa: "Intero", price: 8},
        {tariffa: "Ridotto anziani", price: 6.4},
        {tariffa: "Ridotto giovani", price: 5.6},
        {tariffa: "Omaggio", price: 0},
    ]
}

export function reducer(state, action) {

    switch(action.type) {
        case SELECT:
            return {
                ...state,
                cart: [...state.cart, {seatID:action.seatID, price:action.price}],
            }
        case UNSELECT:
            return {
                ...state,
                cart: state.cart.filter(s => action.seatID!==s.seatID),
            }
        case CONFIRM:
            let tot = 0.0
            for(let i=0; i<state.cart.length; ++i){
                tot += state.cart[i].price
            }
            return {
                ...state,
                occupied: state.occupied.concat(state.cart),
                cart: [],
                total: state.total + tot,
            }
        case UNDO:
            return {
                ...state,
                cart: [],
            }
        case CHANGE:
            return {
                ...state,
                cart: state.cart.map(s => {
                    if(s.seatID===action.seatID) {
                        return ({seatID: action.seatID, price: action.price})
                    }else{
                        return ({seatID: s.seatID, price: s.price})
                    }
                }),
            }
        default :
            return state;
    }
}