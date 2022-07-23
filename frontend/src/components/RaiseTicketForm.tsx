import React from 'react'

const RaiseTicketForm = () => {
  return (
    <div className="ticket-form">
        <h1>Raise a Ticket</h1>
        <form>
            <label>Type:</label>
            <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <label>Description:</label>
            <textarea></textarea>
            <label>Location:</label>
            <div className="map">
                </div>
            <button>Submit</button>
        </form>
    </div>

  )
}

export default RaiseTicketForm;