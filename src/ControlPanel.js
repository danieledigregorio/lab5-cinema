import {useContext} from "react";
import {StateContext} from "./App";
import './ControlPanel.css'
import {change, undo, confirm} from "./Actions";


function ControlPanel() {

    const [state, dispatch] = useContext(StateContext)
    let totCarr = 0.0
    for(let i=0; i<state.cart.length; ++i){
        totCarr += state.cart[i].price
    }

    return(
        <div>
            <h1>Incassi totali: {state.total.toFixed(2)} €</h1>
            <h2 style={{marginTop: 100}}>Emissione Biglietti</h2>

            <div>
                <div className="Sezione">
                    <div className="Col01">
                        <p style={{fontWeight: "bold"}}>Posizione</p>
                    </div>
                    <div className="Col01">
                        <p style={{fontWeight: "bold"}}>Tariffa</p>
                    </div>
                    <div className="Col01">
                        <p style={{fontWeight: "bold"}}>Prezzo</p>
                    </div>
                </div>

                {state.cart.map(s => {
                    const tar = state.fares.filter(i => i.price===s.price)[0].tariffa;

                    return(
                            <div className="Sezione">
                                <div className="Col02">
                                    {s.seatID}
                                </div>
                                <div className="Col02">
                                    <select id={s.seatID}
                                            onChange={
                                                () => {
                                                    dispatch(change( s.seatID, state.fares.filter(i => i.tariffa===getVal(s.seatID))[0].price ))
                                                }
                                            }>
                                        {state.fares.map(t => {
                                            if(tar===t.tariffa) {
                                                return(<option value={t.tariffa} selected={"selected"}>{t.tariffa}</option>)
                                            }else{
                                                return(<option value={t.tariffa}>{t.tariffa}</option>)
                                            }
                                        })}
                                    </select>
                                </div>
                                <div className="Col02">
                                    {s.price.toFixed(2)} €
                                </div>
                            </div>
                    )
                })}
                <div style={{marginTop: 150}}>
                    <h3>Totale parziale: {totCarr.toFixed(2)} €</h3>
                    <div className="Sezione">
                        <div className="Col01">
                            <button onClick={() => dispatch(undo())}>Annulla</button>
                        </div>
                        <div className="Col01">
                            <button onClick={() => dispatch(confirm())}>Acquista</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
};


function getVal(id) {
    let e = document.getElementById(id)
    return e.value
}

export default ControlPanel