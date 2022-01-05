import React from 'react';

const Todolist = (props) => {

    const deleteitem=() =>{
        
    }
    return(
    <>
    <div className='style'>
    
    <i class="fa fa-trash" aria-hidden="true" 
    
    onClick={()=>{
        props.onSelect(props.id); 
    }}>
        
    </i>

    <li className='itemname'>{props.text}</li>

    </div>
    
    </>
    );
};


export default Todolist;