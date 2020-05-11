import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import 'nes.css/css/nes.min.css'



const Form = ({ addColor, color, handleColor }) => {
    
    return (
        <div className="row justify-content-center">
            <form action="">
                <input
                    className="m-2 col-4 nes-input"
                    value={ color }
                    onChange={(e) => handleColor(e)}
                    type="text"
                />  
                <button
                    onClick={(e) => addColor(e)}
                    className="m-2 col-4  nes-btn is-success">
                    add
                </button>
           </form>
        </div>
    );
}
export default Form;
