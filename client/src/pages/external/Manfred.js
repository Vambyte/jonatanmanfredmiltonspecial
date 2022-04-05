import React, { useRef, useState } from 'react'
import ExternalHeader from '../../components/external/ExternalHeader'
import '../../styles/Manfred.scss'

export default function Manfred() {

    const StartButtonRef = useRef();

    function GetStarted(){
        alert(StartButtonRef.current.value);
    }

    return (
        <div>
            <ExternalHeader />
            <div className="Manfred">
                <div className="Manfred-container">
                    <div className="head-container">
                        <h1>Learn about aktier ba</h1>
                        <h1>Earn money ba</h1>
                        <p>Hello here is some info about this thingy magiggy</p>
                        <span>Socials här ba</span>
                        <button ref={StartButtonRef} onClick={GetStarted} value="hellos">Get startet ba buy a shrit ba</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
