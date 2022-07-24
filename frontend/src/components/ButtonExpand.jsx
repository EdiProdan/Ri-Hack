import { border } from '@mui/system';
import React, { useState } from 'react';
import { useGeolocated } from 'react-geolocated';


function ButtonExpand() {

    const [isExpanded, setExpanded] = useState(false);

    function handleOnClick() {
        setExpanded(!isExpanded);
    }
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: true,
            }
        });

    return (
        isExpanded ?
            <div className="button-expanded">
                <div className="ticket-form">
                    <div className='form-header'>
                        <h2 className='form-title'>Podnesi upit</h2>
                        <button onClick={handleOnClick} className="btn close">X</button>
                    </div>

                    <form onSubmit={async (event) => {
                        event.preventDefault();

                        let ticket = {mail: event.target[0].value,
                                    ticketType: event.target[1].value,
                                    description: event.target[2].value,
                                    locationLat: coords?.latitude,
                                    locationLong: coords?.longitude}

                        let res = await fetch("http://localhost:8080/api/tickets", {
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json'},

                                body: JSON.stringify(ticket),
                        });
                        const content = await res.json();

                        console.log(content);

                        setExpanded(false);
                    }}>
                        <label>Email:</label>
                        <input type="input" name="mail" id="mail" className='input' style={{width:"100%", height:"40px"}}/> <br></br>
                        <br/>

                        <label>Vrsta problema:</label>
                        <select name="trashType" id="trashType" className='input'>
                            <option value="TRASH">Previše je smeća</option>
                            <option value="DIRTY">Prljavo je</option>
                            <option value="DAMAGED">Oštećenje na infrastrukturi</option>
                            <option value="GENERAL">Ostalo...</option>
                        </select><br></br>
                        <br></br>

                        <label>Priložite sliku:</label><br></br>
                        <button className='camera' style={{width:"100%", height:"40px", backgroundColor:"transparent", border:"1px solid black" }}>+</button><br></br><br></br>

                        <label>Opis:</label><br/>
                        <textarea id="description" name="description"></textarea><br/>
                        <button className='btn submit' type="submit">Podnesi</button>
                    </form>
                </div>
            </div> :

            <div className="button-collapsed">
                <button className='btn collapsed' onClick={handleOnClick}>Podnesi novi upit</button>
            </div>

    );
}

export default ButtonExpand;