// Create Account Action 
 export const createAccount = (name,amount) =>{
    return {
        type:"CREATE_ACCOUNT",
        payload:{
            name: name,
            amount: amount
        }
    }
}
// Delete Account Action
 export const deleteAccount = (name) => {
    return {
        type:"DELETE_ACCOUNT",
        payload : {
            name: name
        }
    }
}

// Amount withdraw Action
export const amountDraw = (name,amount) => {
    return {
        type:"AMOUNT_DRAW",
        payload : {
            name: name,
            amount: amount
        }
    }
}
