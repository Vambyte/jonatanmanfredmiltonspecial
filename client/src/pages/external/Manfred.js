import React, { useRef, useState } from 'react'
import ExternalHeader from '../../components/external/ExternalHeader'
import ExternalFooter from '../../components/external/ExternalFooter'
import '../../styles/Manfred.scss'

export default function Manfred() {

    const StartButtonRef = useRef();
    const page_root = useRef();

    function ChangeToDarkMode(){
        const page_root_temp = page_root.current;
        if(page_root_temp.classList.contains('dark-mode')){
            page_root_temp.className = '';
            return;
        }
        page_root_temp.className = 'dark-mode';
    }

    return (
        <div ref={page_root}>
            <ExternalHeader />
            <div className="Manfred">
                {/* Allt innehåll för just denna sida bör ligga inom 'Manfred-container' */}
                <div className="Manfred-container">
                    <section className="head-container">
                        <button onClick={ChangeToDarkMode}>Lite dark-mode experiment</button>

                        <h1>Learn about aktier ba</h1>
                        <h1>Earn money ba</h1>
                        <p>Hello here is some info about this thingy magiggy</p>
                        <span>Socials här ba</span>
                        <button ref={StartButtonRef} onClick={a => alert('abc123')}>Get startet ba buy a shrit ba</button>
                    </section>

                    {/* Test div med min-height: 100vh; som visar hur det ser ut när sidan är större en 1 sida */}
                    <div id="test-container">
                        <p>hej</p>
                    </div>

                </div>
            </div>
            <ExternalFooter />
        </div>
    )
}
