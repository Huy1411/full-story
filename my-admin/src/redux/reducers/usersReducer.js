const initialState = {
    listUser: {
        users: [],
        loading: false
    },
}

export default function usersReducer(state = initialState, action = {}) {
    console.log("Action : ", action)
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                message: "",
                loading: true
            }
        default:
            break
    }
    return state
}