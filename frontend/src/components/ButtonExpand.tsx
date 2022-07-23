import React, { useState } from 'react';

const ButtonExpand = () => {

  
    const [ isExpanded, setExpanded ] = useState(false);
    
  
  function handleOnClick() {
        setExpanded(!isExpanded);
    }
  return (
        isExpanded ? 
            <div className="button-expanded">
                <button onClick={handleOnClick}>Close</button>
                <p>Tekst</p>
                <p>Lorem</p>
                <p>Tekst</p>
                <p>Lorem</p>
                <p>Tekst</p>
                <p>Lorem</p>
                <p>Tekst</p>
                <p>Lorem</p>
            </div> :
        
        <div className="button-collapsed">
            <button className='btn' onClick={handleOnClick}>Expand</button>
        </div>
        
    );
}

export default ButtonExpand;