import React, {useEffect, useState} from 'react'

const Tickets = () => {
    let [tickets, setTickets] = useState([]);

    useEffect( () => {
        fetch("http://localhost:8080/api/tickets", {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin':'*'
            }
        })
            .then(response => response.json())
            .then(json => {
                setTickets(json.sort(ticket => ticket.id).reverse());
            })
    }, [])


    return (
        <>
        <h2>Žalbe: </h2>
        <div>
            {
                tickets.map(ticket => {
                
               return(
                    <div className='ticket'>
                        <h3>{ticket.mail} ({ticket.ticketType})</h3>
                        <p>
                            {ticket.description}
                        </p>
                    </div>
                )
            })}
        </div>
        </>
    );
}

export default Tickets