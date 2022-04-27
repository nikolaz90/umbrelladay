import React, {useState, useEffect} from 'react'
import data from '../inflationData'

function InflationSimulator() {
    const onsLink = 'https://www.ons.gov.uk/economy/inflationandpriceindices/timeseries/cdko/mm23'
    const boeLink = 'https://www.bankofengland.co.uk/monetary-policy/inflation/inflation-calculator'

    const dataKeys = Object.keys(data[0])
    const dataValues = Object.values(data[0])

    const [amount, setAmount] = useState(0);
    const [yearOne, setYearOne] = useState(0);
    const [yearTwo, setYearTwo] = useState(0); 
    const [inflationResult, setInflationResult] = useState(0)

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    const handleAmount = (e)=>{
        setAmount(parseFloat(e.target.value))
    }

    const handleYearOne = (e)=>{
        setYearOne(parseFloat(e.target.value))
    }

    const handleYearTwo = (e)=>{
        setYearTwo(parseFloat(e.target.value))
    }

    const calculateInflation =()=>{
        let ans = amount * (yearTwo/yearOne)
        setInflationResult(parseFloat(ans.toFixed(2)))
    }

    useEffect(()=>{
        if(amount===0 || yearOne===0 || yearTwo ===0) return setInflationResult(0);
        calculateInflation()
    }, [amount, yearOne, yearTwo])
    

  return (
    <div className='simulator inflation-simulator'>
            <form className='inflation-input' onSubmit={handleSubmit}>
                <p>
                    This simulator is aimed at giving you an idea of how the value of money changes over time. 
                    We call this change inflation. It's good to have an idea of how this can effect you and your 
                    personal finances. If your still not sure about inflation, you should understand that a ten pound
                    note could have been used to buy more in the past than today. For example, £10 in 2011 
                    would be worth £12,97 in 2021. So you would need to spend more in 2021 than in 2011 to buy the same thing(s).
                </p>
                <h5>The price of goods worth :</h5>
                <p>£ <input type='number' name='inflation-amount' placeholder='25' min={0} max={999999999} onChange={handleAmount} /></p>
                <p>in</p>
                <select onChange={handleYearOne}>
                    {dataKeys.map((item, index)=>{
                        return <option key={index} value={dataValues[index]}>{item}</option>
                    })}
                </select>
                <p>compared to</p>
                <select onChange={handleYearTwo}>
                    {dataKeys.map((item, index)=>{
                        return <option key={index} value={dataValues[index]}>{item}</option>
                    })}
                </select>
            </form>
            <div className='inflation-result'>
                <p>was £ {inflationResult}</p>
            </div>
            <p>
                This simulator is in pounds and the data used to create this is from the Office of National Statistics.
                The data is available by clicking <a href={onsLink} className='ons-link' target='_blank'>here</a>. 
                This simulator was inspired by the Bank of Englands simulator, which you can view by clicking <a href={boeLink} className='ons-link' target='_blank'>here</a>.
            </p>
    </div>
  )
}

export default InflationSimulator