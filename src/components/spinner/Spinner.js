import React, { useState } from 'react'
import { AuthState } from '../../context/AuthProvider';
import './Spinner.css';



const Spinner = () => {



    return (

        <div className="text-center  sweet-loading  py-12">

            <div class="loader--spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

    )
}

export default Spinner
