export const signupreducer=(state,action)=>{
    switch (action.type) {
        case "SIGNUP_USER":
            return {...state, user:action.payload}          
        default:
            return state;
    }
}