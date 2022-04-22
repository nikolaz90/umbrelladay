import React, {useState} from 'react'
import Simulator1 from '../components/Simulator1';
import Simulator2 from '../components/Simulator2';
import InflationSimulator from '../components/InflationSimulator';


function Home() {

  const [simulator, setSimulator] = useState(0);
  const [activate, setActivate] = useState(null)

  const handleSimulatorChange = (simNumber)=>{
    setSimulator(simNumber);
    setActivate(simNumber)
  }



  return (
    <section className='section home-section'> 
      
        <h2>Welcome!</h2>
        <p className='home-paragraph'>
          The Savings Lobster is here to help you with personal finances.
          If you have little to no savings, this tool will help you realise that if you save a little, consistently, 
          you will be able to save up a considerable amount. If you haven't thought about your personal 
          finances, use this tool to help you think about the difference you could make for your future. 
        </p>
        <p className='home-paragraph'>
          Play around with the simulators to help you understand what you are capable of achieving in savings. 
          The simulators are designed to give you a rough idea of how much you can achieve, especially if you are consistant.
          Have a look at how interest rates can have an effect on the final goal over time. Although interest rates are actually
          really low at the moment, you may find some saving accounts are better than others and its worth shopping around. 
        </p>
        <p className='home-paragraph'>
          What you save could go towards a deposit on a property, 
          a wedding or the day your first born is ready to finally leave home, give you some peace and spread 
          their wings!
        </p>
        <p className='home-paragraph'>
          If you don't want to calculate interest, simply put a 0.
          Beware that wherever interest rates apply, banks often offer variable rates, which is important 
          to keep in mind as it is very difficult to know exactly what rate you will get over a number of years. 
          This is why these simulators only provide a rough estimate. 
        </p>
      
      
      <h3>Simmulators : </h3>
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
        <p>The Savings Lobster</p>
      </div>


    </section>
  )
}


export default Home
