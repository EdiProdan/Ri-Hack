import ButtonExpand from './ButtonExpand';
import ViewMap from './ViewMap';
import SideBar from "./SideBar.jsx";
import React from 'react'

const User = () => {
    return (
        <div id="user">
            {<SideBar pageWrapId={"container"} outerContainerId={"user"} />}
            <div id='container'>
                <ViewMap />
                <ButtonExpand />
            </div>
        </div>
    )
}

export default User