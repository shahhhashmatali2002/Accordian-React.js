import React, { useState } from 'react'
import './Accordian.css'
import questions from './AccordianApi';
import MyAccordian from './MyAccordian'
const Accordian = () =>{
    // Data fetching
    const [Data,setData] = useState(questions);

    return(
        <>
            <div className='main-div'>
                <div className='center-div'>
                    <h1 className='mt-4'>JavaScript questions {'&'} Answer</h1>
                    {Data.map((currElement) =>{
                        return(
                            <>
                                <MyAccordian questions={currElement.question} Answer={currElement.answer}/>
                            {/* <div>{currElement.question}</div>
                            <div>{currElement.Answer}</div> */}
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Accordian;