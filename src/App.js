import './App.css';
import InteractiveMap from "./InteractiveMap";
import {createContext, useReducer} from "react";
import {reducer, initialState} from "./Reducer.js";
import ControlPanel from "./ControlPanel";

export const StateContext = createContext()

function App() {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            <div className="App">
                <div className="Col1">
                    <InteractiveMap />
                </div>
                <div className="Col2">
                    <ControlPanel />
                </div>
            </div>
        </StateContext.Provider>
    );
}

export default App;
