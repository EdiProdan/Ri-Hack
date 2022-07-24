import React from 'react'

const Ticket = ({mail, type, desc}) => {
  return (
    
        <div>
            <h2>{mail} - {type}</h2>
            <p>
                {desc}
            </p>
        </div>
    
  )
}

export default Ticket