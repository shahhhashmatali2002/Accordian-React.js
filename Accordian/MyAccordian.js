import React, { useState } from 'react';
import './Accordian.css'

const MyAccordian = (props) =>{
    // Showing Answer 
    const [show,setshow] = useState(false);

    // Click funciton 
    const click = () =>{
        return prompt('')
    }
    
    return(
        <>
            <div className='question bg-light w-75 container'><button className='' onClick={() =>{ setshow(!show)}}>{show? <i class='bx bx-minus-circle'></i> :<i class='bx bxs-message-square-add'></i>}</button> {props.questions}</div>
            <div className='w-75 container h-auto'>{show && <p>Answer: {props.Answer}</p>}</div>
        </>        
    )
};

export default MyAccordian;