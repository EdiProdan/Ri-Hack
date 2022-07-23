import React, { useState } from 'react';
const ButtonExpand = () => {


    const [isExpanded, setExpanded] = useState(false);


    function handleOnClick() {
        setExpanded(!isExpanded);
    }
    return (
        isExpanded ?
            <div className="button-expanded">
                <div className="ticket-form">
                    <div className='form-header'>
                        <h2 className='form-title'>Podnesi upit</h2>
                        <button onClick={handleOnClick} className="btn close">X</button>
                    </div>
                    <form>
                        <label>Email:</label>
                        <input type="email" name="mail" className='input'/> <br></br>
                        <br></br>

                        <label>Vrsta:</label>
                        <select className='input'>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select><br></br>
                        <br></br>

                        <label>Opis:</label><br></br>
                        <textarea></textarea><br></br>
                        <button className='btn submit'>Podnesi</button>
                    </form>
                </div>
            </div> :

            <div className="button-collapsed">
                <button className='btn' onClick={handleOnClick}>Podnesi novi upit</button>
            </div>

    );
}

export default ButtonExpand;