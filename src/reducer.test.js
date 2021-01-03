import {reducer} from "./Reducer";
import {unselect} from "./Actions";


test('verifica deselezione', () => {
    const oldState = {
        occupied: [],
        cart: [{seatID:"A1", price: 8.0}, {seatID:"A2", price: 6.4}],
        total: 0.0
    }
    const newState1 = reducer(oldState, unselect("A1"))
    expect(newState1.cart).toEqual([{seatID:"A2", price: 6.4}])
    expect(newState1.occupied).toEqual(oldState.occupied)
    expect(newState1.total).toEqual(oldState.total)
    const newState2 = reducer(oldState, unselect("A2"))
    expect(newState2.cart).toEqual([{seatID:"A1", price: 8.0}])
    expect(newState2.occupied).toEqual(oldState.occupied)
    expect(newState2.total).toEqual(oldState.total)
})