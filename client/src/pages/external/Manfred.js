import React, { useRef, useState } from 'react'
import ExternalHeader from '../../components/external/ExternalHeader'
import '../../styles/Manfred.scss'

export default function Manfred() {

    const StartButtonRef = useRef();
    const page_root = useRef();

    function ChangeToLightMode(){
        const page_root_temp = page_root.current;
        if(page_root_temp.classList.contains('light-mode')){
            page_root_temp.className = '';
            return;
        }
        page_root_temp.className = 'light-mode';
    }

    return (
        <div ref={page_root}>
            <ExternalHeader />
            <div className="Manfred">
                <div className="Manfred-container">
                    <section className="head-container">
                        <button onClick={ChangeToLightMode}>Lite light-mode experiment</button>

                        <h1>Learn about aktier ba</h1>
                        <h1>Earn money ba</h1>
                        <p>Hello here is some info about this thingy magiggy</p>
                        <span>Socials här ba</span>
                        <button ref={StartButtonRef} onClick={a => alert('abc123')}>Get startet ba buy a shrit ba</button>
                    </section>
                </div>
            </div>
        </div>
    )
}
