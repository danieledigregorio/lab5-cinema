import {useContext} from "react";
import {StateContext} from "./App";
import {select, unselect} from "./Actions";


const seats = [
    { seatID: "A1", x: 5, y:20, size: 20 },
    { seatID: "A2", x: 25, y:20, size: 20 },
    { seatID: "A3", x: 45, y:20, size: 20 },
    { seatID: "A4", x: 65, y:20, size: 20 },
    { seatID: "A5", x: 85, y:20, size: 20 },
    { seatID: "A6", x: 105, y:20, size: 20 },
    { seatID: "A7", x: 125, y:20, size: 20 },
    { seatID: "A8", x: 145, y:20, size: 20 },
    { seatID: "A9", x: 165, y:20, size: 20 },
    { seatID: "A10", x: 185, y:20, size: 20 },
    { seatID: "A11", x: 205, y:20, size: 20 },
    { seatID: "A12", x: 225, y:20, size: 20 },

    { seatID: "B1", x: 15, y:55, size: 20 },
    { seatID: "B2", x: 35, y:55, size: 20 },
    { seatID: "B3", x: 55, y:55, size: 20 },
    { seatID: "B4", x: 75, y:55, size: 20 },
    { seatID: "B5", x: 95, y:55, size: 20 },
    { seatID: "B6", x: 115, y:55, size: 20 },
    { seatID: "B7", x: 135, y:55, size: 20 },
    { seatID: "B8", x: 155, y:55, size: 20 },
    { seatID: "B9", x: 175, y:55, size: 20 },
    { seatID: "B10", x: 195, y:55, size: 20 },
    { seatID: "B11", x: 215, y:55, size: 20 },
    { seatID: "B12", x: 235, y:55, size: 20 },

    { seatID: "C1", x: 5, y:90, size: 20 },
    { seatID: "C2", x: 25, y:90, size: 20 },
    { seatID: "C3", x: 45, y:90, size: 20 },
    { seatID: "C4", x: 65, y:90, size: 20 },
    { seatID: "C5", x: 85, y:90, size: 20 },
    { seatID: "C6", x: 105, y:90, size: 20 },
    { seatID: "C7", x: 125, y:90, size: 20 },
    { seatID: "C8", x: 145, y:90, size: 20 },
    { seatID: "C9", x: 165, y:90, size: 20 },
    { seatID: "C10", x: 185, y:90, size: 20 },
    { seatID: "C11", x: 205, y:90, size: 20 },
    { seatID: "C12", x: 225, y:90, size: 20 },

    { seatID: "D1", x: 15, y:125, size: 20 },
    { seatID: "D2", x: 35, y:125, size: 20 },
    { seatID: "D3", x: 55, y:125, size: 20 },
    { seatID: "D4", x: 75, y:125, size: 20 },
    { seatID: "D5", x: 95, y:125, size: 20 },
    { seatID: "D6", x: 115, y:125, size: 20 },
    { seatID: "D7", x: 135, y:125, size: 20 },
    { seatID: "D8", x: 155, y:125, size: 20 },
    { seatID: "D9", x: 175, y:125, size: 20 },
    { seatID: "D10", x: 195, y:125, size: 20 },
    { seatID: "D11", x: 215, y:125, size: 20 },
    { seatID: "D12", x: 235, y:125, size: 20 },

    { seatID: "E1", x: 5, y:160, size: 20 },
    { seatID: "E2", x: 25, y:160, size: 20 },
    { seatID: "E3", x: 45, y:160, size: 20 },
    { seatID: "E4", x: 65, y:160, size: 20 },
    { seatID: "E5", x: 85, y:160, size: 20 },
    { seatID: "E6", x: 105, y:160, size: 20 },
    { seatID: "E7", x: 125, y:160, size: 20 },
    { seatID: "E8", x: 145, y:160, size: 20 },
    { seatID: "E9", x: 165, y:160, size: 20 },
    { seatID: "E10", x: 185, y:160, size: 20 },
    { seatID: "E11", x: 205, y:160, size: 20 },
    { seatID: "E12", x: 225, y:160, size: 20 },

    { seatID: "F1", x: 15, y:195, size: 20 },
    { seatID: "F2", x: 35, y:195, size: 20 },
    { seatID: "F3", x: 55, y:195, size: 20 },
    { seatID: "F4", x: 75, y:195, size: 20 },
    { seatID: "F5", x: 95, y:195, size: 20 },
    { seatID: "F6", x: 115, y:195, size: 20 },
    { seatID: "F7", x: 135, y:195, size: 20 },
    { seatID: "F8", x: 155, y:195, size: 20 },
    { seatID: "F9", x: 175, y:195, size: 20 },
    { seatID: "F10", x: 195, y:195, size: 20 },
    { seatID: "F11", x: 215, y:195, size: 20 },
    { seatID: "F12", x: 235, y:195, size: 20 },

    { seatID: "G1", x: 5, y:230, size: 20 },
    { seatID: "G2", x: 25, y:230, size: 20 },
    { seatID: "G3", x: 45, y:230, size: 20 },
    { seatID: "G4", x: 65, y:230, size: 20 },
    { seatID: "G5", x: 85, y:230, size: 20 },
    { seatID: "G6", x: 105, y:230, size: 20 },
    { seatID: "G7", x: 125, y:230, size: 20 },
    { seatID: "G8", x: 145, y:230, size: 20 },
    { seatID: "G9", x: 165, y:230, size: 20 },
    { seatID: "G10", x: 185, y:230, size: 20 },
    { seatID: "G11", x: 205, y:230, size: 20 },
    { seatID: "G12", x: 225, y:230, size: 20 },

    { seatID: "H1", x: 15, y:265, size: 20 },
    { seatID: "H2", x: 35, y:265, size: 20 },
    { seatID: "H3", x: 55, y:265, size: 20 },
    { seatID: "H4", x: 75, y:265, size: 20 },
    { seatID: "H5", x: 95, y:265, size: 20 },
    { seatID: "H6", x: 115, y:265, size: 20 },
    { seatID: "H7", x: 135, y:265, size: 20 },
    { seatID: "H8", x: 155, y:265, size: 20 },
    { seatID: "H9", x: 175, y:265, size: 20 },
    { seatID: "H10", x: 195, y:265, size: 20 },
    { seatID: "H11", x: 215, y:265, size: 20 },
    { seatID: "H12", x: 235, y:265, size: 20 },

    { seatID: "I1", x: 5, y:300, size: 20 },
    { seatID: "I2", x: 25, y:300, size: 20 },
    { seatID: "I3", x: 45, y:300, size: 20 },
    { seatID: "I4", x: 65, y:300, size: 20 },
    { seatID: "I5", x: 85, y:300, size: 20 },
    { seatID: "I6", x: 105, y:300, size: 20 },
    { seatID: "I7", x: 125, y:300, size: 20 },
    { seatID: "I8", x: 145, y:300, size: 20 },
    { seatID: "I9", x: 165, y:300, size: 20 },
    { seatID: "I10", x: 185, y:300, size: 20 },
    { seatID: "I11", x: 205, y:300, size: 20 },
    { seatID: "I12", x: 225, y:300, size: 20 },

    { seatID: "J1", x: 15, y:335, size: 20 },
    { seatID: "J2", x: 35, y:335, size: 20 },
    { seatID: "J3", x: 55, y:335, size: 20 },
    { seatID: "J4", x: 75, y:335, size: 20 },
    { seatID: "J5", x: 95, y:335, size: 20 },
    { seatID: "J6", x: 115, y:335, size: 20 },
    { seatID: "J7", x: 135, y:335, size: 20 },
    { seatID: "J8", x: 155, y:335, size: 20 },
    { seatID: "J9", x: 175, y:335, size: 20 },
    { seatID: "J10", x: 195, y:335, size: 20 },
    { seatID: "J11", x: 215, y:335, size: 20 },
    { seatID: "J12", x: 235, y:335, size: 20 },
]

function InteractiveMap() {

    return(
        <svg width="90%" height="90%" viewBox="0 0 260 400">
            <Map seats={seats} />
        </svg>
    )
}

function Map({seats}) {

    const [state, dispatch] = useContext(StateContext)

    return(
        seats.map(s => {
            const cart = state.cart.filter(i => i.seatID===s.seatID)
            const occupied = state.occupied.filter(i => i.seatID===s.seatID)
            const price = state.fares.filter(i => i.tariffa==="Intero")[0].price


            if(cart.length===0 && occupied.length===0) {
                return(<Seat seatID={s.seatID} size={s.size} x={s.x} y={s.y}
                             occupied={false} selected={false} onClick={() => dispatch(select(s.seatID, price))} />)
            }else if(cart.length===1) {
                return(<Seat seatID={s.seatID} size={s.size} x={s.x} y={s.y}
                             occupied={false} selected={true} onClick={() => dispatch(unselect(s.seatID))} />)
            }else {
                return(<Seat seatID={s.seatID} size={s.size} x={s.x} y={s.y}
                             occupied={true} selected={false} onClick={() => {}} />)
            }
        })
    )
}

function Seat({seatID, size, x, y, occupied, selected, onClick}) {
    let xx = x
    let yy = y + 10
    let back = "gray"
    let text = "black"

    if(occupied) {
        back = "red"
        text = "white"
    }else if(selected) {
        back = "darkorange"
        text = "white"
    }

    return(
        <g key={seatID} fill={back} stroke="lightgrey" strokeWidth="0.7"  onClick={onClick}>
            <ellipse cx={xx + size/2} cy={yy} rx={size/2} ry={size/4} />
            <rect key={seatID} width={size} height={size} x={xx} y={yy} />
            <text stroke="none" fill={text} fontSize="8" textAnchor="middle" x={xx + size/2} y={yy + 2*size/3}>{seatID}</text>
        </g>
    )
}

export default InteractiveMap