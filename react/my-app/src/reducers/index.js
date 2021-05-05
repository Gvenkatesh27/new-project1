import {combineReducers} from 'redux';



// Reducer for accounts
const accounts = (listOfAccount = [] , action) => {
    if(action.type === "CREATE_ACCOUNT"){
       return [...listOfAccount, action.payload] 
    }
    if (action.type == "DELETE_ACCOUNT"){
        return listOfAccount.filter(name => {
            console.log(name);
            return name.name != action.payload.name
            });
    }

    return listOfAccount;
}


// Reducer for amount
const amount = (totalAmount = 500 ,action) => {
    if(action.type === "AMOUNT_DRAW"){
       return totalAmount-action.payload.amount
    }else if(action.type === "CREATE_ACCOUNT"){
        return totalAmount+action.payload.amount
    }

    return totalAmount;
}

export default combineReducers({
    accounts : accounts,
    amount : amount
});
