import React from 'react';
import {  BsGear, BsReverseLayoutTextSidebarReverse } from "react-icons/bs"
import { FaCross } from "react-icons/fa";

const StartupOptions = () => {
    return ( 
        <>
            <div className="wrapper">
                <div className="startup" id="dashboard"><BsGear/> Dashboard</div>
                <div className="startup"><FaCross/> Add Startup</div>
                <div className="startup"> <BsReverseLayoutTextSidebarReverse/> Startup Details</div>
            </div>
        </>
     );
}
 
export default StartupOptions;