const HardBlockReducer = (hardblock = [], action) => {
    switch (action.type) {
        case "VIEW_HARD_BLOCK":
            return action.hardblock
        default:
            return hardblock
    }

}
export default HardBlockReducer;