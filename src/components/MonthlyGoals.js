import React from 'react';
import {useGlobalContext} from '../context'


 function MonthlyGoals() {

    const { setNewGoal, goals} = useGlobalContext();

    const handleSubmit=(e)=>{
        e.preventDefault();
    }

    const handleChangeGoal=(e)=>{
        setNewGoal({val:e.target.value, id:e.target.id});
    }
    

  return (
      <>
      {goals.map((item, index)=>{
          return (
            <form key={`goal-${index}`} onSubmit={handleSubmit}>
                <input id={index} name='goal' type='number' className='goal-input' min={0} step={50} value={item} onChange={handleChangeGoal}/>
            </form>
          )
      })
    }
      </>     
  )
}



export default MonthlyGoals