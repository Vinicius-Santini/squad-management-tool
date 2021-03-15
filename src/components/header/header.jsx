import React from 'react'
import "./header.css"

const header = () => {
    return (
        <>
            <header className="appHeader">
                <a href='/'>
                    <img src='/img/venturus-white-logo.png' alt="Logo da Venturus" />
                    <span>Squad Management tool</span>
                </a>
            </header>
        </>
    );
};

export default header;
