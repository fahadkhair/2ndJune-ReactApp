import React, { useState } from 'react';

function Input() {

    return (
        <div className="input-container">
            <h5> Please Enter Your Details Below: </h5>
            <input placeholder='Email' />
            <br />
            <input placeholder='Password' />
        </div>
    );
}

export default Input;
