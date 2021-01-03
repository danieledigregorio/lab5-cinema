export const SELECT = "select"
export const UNSELECT = "unselect"
export const CONFIRM = "confirm"
export const UNDO = "undo"
export const CHANGE = "change"

export function select(seatID, price) {
    return {type: SELECT, seatID, price}
}
export function unselect(seatID) {
    return {type: UNSELECT, seatID}
}
export function confirm() {
    return {type: CONFIRM}
}
export function undo() {
    return {type: UNDO}
}
export function change(seatID, price) {
    return {type: CHANGE, seatID, price}
}
