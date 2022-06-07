import React, {useState} from 'react'
import Simulator1 from '../components/Simulator1';
import Simulator2 from '../components/Simulator2';
import InflationSimulator from '../components/InflationSimulator';


function Home() {

  const [simulator, setSimulator] = useState(0);
  const [activate, setActivate] = useState(0)

  const handleSimulatorChange = (simNumber)=>{
    setSimulator(simNumber);
    setActivate(simNumber)
  }



  return (
    <section className='section home-section'> 
      
        <h2>Welcome!</h2>
        <p className='home-paragraph'>Have little to no savings?</p>
        <p className='home-paragraph'>
          If you haven't thought about your personal 
          finances, use these tools to help you think about the difference you could make for your future. 
        </p>
        <p className='home-paragraph'>
          Play around with the simulators to help you understand what you are capable of achieving in savings. 
          The simulators are designed to give you a rough idea of how much you can achieve, especially if you are consistant.
          Have a look at how interest rates can have an effect on the final goal over time. 
        </p>
      
      
      <h3>Simulators : </h3>
      <div className='simulators-container'>
        
        <button className={`btn-sim-select ${activate===0 && 'btn-active'}`} onClick={()=>handleSimulatorChange(0)}>How long</button>
        <button className={`btn-sim-select ${activate===1 && 'btn-active'}`} onClick={()=>handleSimulatorChange(1)}>How much</button>
        <button className={`btn-sim-select ${activate===2 && 'btn-active'}`} onClick={()=>handleSimulatorChange(2)}>Inflation</button>
      </div>
      <div>
          {simulator === 0 && <Simulator1/>}
          {simulator === 1 && <Simulator2/>}
          {simulator === 2 && <InflationSimulator/>}
        </div>
      <div>
      <p className='home-paragraph'>
          What you save could go towards a deposit on a property, 
          a wedding or the day your first born is ready to finally leave home, give you some peace and spread 
          their wings!
        </p>
        <p className='home-paragraph'>
          Beware that wherever interest rates apply, banks often offer variable rates, which is important 
          to keep in mind as it is very difficult to know exactly what rate you will get over a number of years. 
          This is why these simulators only provide a rough estimate. 
        </p>
      </div>


    </section>
  )
}


export default Home
