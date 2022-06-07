import React from 'react'
import {useGlobalContext} from '../context'
import SummaryForm from '../components/SummaryForm'
import MonthlyGoals from '../components/MonthlyGoals'
import MonthlyReal from '../components/MonthlyReal'




function PersonalTargets() {
  const { months, goals, real, interest } = useGlobalContext();

  const goalsTotal = goals.reduce((acc, curr)=>{
    acc+= parseFloat(curr);
    return acc;
  }, 0);

  const realTotal = real.reduce((acc, curr)=>{
    acc+= parseFloat(curr);
    return acc;
  }, 0)

  const goalsWithInterest = parseFloat((goalsTotal*interest).toFixed(2))
  const realWithInterest = parseFloat((realTotal*interest).toFixed(2))

  return (
      <section className='section'>
        <h4 className='heading'>personal summary page</h4>
        <p className='personal-paragraph'>Use this page to outline some personal goals for the year.</p>
        <p className='personal-paragraph'>
          Set yourself some goals - these can change at any time, but it's probably best to give yourself
          a realistic 'minimum' target every month.
        </p>
        <p className='personal-paragraph'>
          Then, every month, add the actual savings you made. This will allow you to keep track over time and
          see if you are able to hit your target or not. 
        </p>
        <p className='personal-paragraph'>
          Data is stored locally in your browser, 
          so you can revisit this web page and change the data and keep track of your progress - 
          data does not leave your browser and is not stored by anyone.
        </p>
        <div className='summary-container'>
            <SummaryForm />
            <p>or set every month individually</p>
          <div className='goals-subsection'>
            <div className='months-subcontainer'>
              <p>month</p>
              <ul className='months'>
                {months.map((item, index)=>{
                  return (<li className='individual-month' key={index}> {item} </li>)
                })}
              </ul>
            </div>
            <div className='goals-subcontainer'>
            <p>goal</p>
              <MonthlyGoals />
            </div>
            <div className='real-subcontainer'>
            <p>actual</p>
              <MonthlyReal />
            </div>
          </div>
          <p>yearly target/goal plus expected interest : {goalsWithInterest}</p>
          <p className={`summary-real ${realWithInterest>=goalsWithInterest ? realWithInterest===goalsWithInterest ? 'on-target': 'above-target' : 'target-missed'}`} >actual/real total plus expected interest : {realWithInterest}</p>
        </div>
        <p className='personal-paragraph'>
          Your goal and your actual savings can change at any time. Use this to realise what you can actually save.
          If your goals are over ambitious or too low, you may want to either change your goals, or think about 
          whether you should be using or saving your money differently. Or perhaps, you might realise you want to make more 
          money. Hopefully this tool helps with making your potential to save clearer. 
        </p>
      </section>
  )
}


export default PersonalTargets
