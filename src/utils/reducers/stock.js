export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD": {
            return { active: true, option: "ADD" }
        }
        case "EDIT": {
            return { active: true, option: "EDIT" }
        }
        case "DELETE": {
            return { active: false, option: "DELETE" }
        }
        case "RETURN": {
            return { ...state, active: false }
        }
        default: return state
    }
}