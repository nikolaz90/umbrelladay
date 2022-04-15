function reducer(state, action) {

    if(action.type === 'GET_FROM_LOCAL'){
        let items = JSON.parse(localStorage.getItem('Savings Lobster'));
        return {...state, months: items.months, goals: items.goals, real:items.real, interest:items.interest}
    }

    if(action.type === 'SAVE_TO_LOCAL'){
        localStorage.setItem('Savings Lobster', JSON.stringify(action.payload))
        return {...state}
    }    

    if(action.type === "SET_START_MONTH"){
        let newMonths = state.months.slice(action.payload,12);
        let monthsFollowing = state.months.slice(0, action.payload); 
        return {...state, months: newMonths.concat(monthsFollowing)}
    }

    if(action.type === "SET_NEW_GOAL"){
        let latestGoals = state.goals.slice(); 
        latestGoals[action.payload.id] = parseInt(action.payload.val);
        return {...state, goals:latestGoals}
    }

    if(action.type ==="SET_NEW_REAL"){
        let latestReal = state.real.slice();
        latestReal[action.payload.id] = parseInt(action.payload.val);
        return {...state, real: latestReal}
    }

    if(action.type === "SET_12_GOALS"){
        let twelveGoals = []; 
        state.months.forEach(i => {
            twelveGoals.push(parseInt(action.payload))            
        });
        return {...state, goals:twelveGoals}
    }

    if(action.type === "SET_EXPECTED_INTEREST"){
        return {...state, interest:action.payload}
    }

    return state
}
export default reducer;

