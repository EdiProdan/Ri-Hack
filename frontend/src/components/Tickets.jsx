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
            .then(json => setTickets(json))
    }, [])


    return (
        <div>
            {tickets.map(ticket => {
                return(
                    <div>
                        <h2>{ticket.mail} ({ticket.ticketType})</h2>
                        <p>
                            {ticket.description}
                        </p>
                    </div>
                )
            })}
        </div>
    );
}

export default Admin