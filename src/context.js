import React, {useEffect, useContext, useReducer} from "react";
import reducer from './reducer'


const AppContext = React.createContext(); 

const initialState = {
    months: ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'septembre', 'octobre', 'novembre', 'decembre'],
    goals: [0,0,0,0,0,0,0,0,0,0,0,0],
    interest: 1,
    real: [0,0,0,0,0,0,0,0,0,0,0,0],
    simOneResults: {years:0,months:0}
}

const AppProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState);   

    const setStartMonth = (index)=>{
        dispatch({type:'SET_START_MONTH', payload:index});
    }

    const setNewGoal = (value) =>{
        dispatch({type:'SET_NEW_GOAL', payload:value})
    }

    const setNewReal = (value) =>{
        dispatch({type:'SET_NEW_REAL', payload:value})
    }

    const set12Goals = (value) =>{
        dispatch({type:'SET_12_GOALS', payload:value})
    }

    const setExpectedInterest = (value)=>{
        dispatch({type:'SET_EXPECTED_INTEREST', payload:value})
    }

    const simulateOne = (values)=>{
        dispatch({type:'SIMULATE_ONE', payload:values})
    }

    const setSimGoals= (value)=>{
        dispatch({type: 'SET_SIM_GOALS', payload:value})
    }

    const saveToLocalStorage = (value)=>{
        dispatch({type: 'SAVE_TO_LOCAL', payload:value})
    }

    const getFromLocal= ()=>{
        dispatch({type:'GET_FROM_LOCAL'})
    }

    useEffect(()=>{
      saveToLocalStorage(state)
    }, [state.months, state.goals, state.interest, state.real])

    return <AppContext.Provider 
    value={{
        ...state,
        setStartMonth,
        setNewGoal,
        setNewReal,
        set12Goals,
        setExpectedInterest,
        simulateOne,
        setSimGoals,
        saveToLocalStorage,
        getFromLocal,
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {AppContext, AppProvider}