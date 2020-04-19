import React, { Component } from 'react';

const ScienticCal = (props) => {
    return (
        <input
            type="button"
            className={props.theme}
            onClick={props.handleClick}
            value={props.label}
        />
    );
}
export default ScienticCal;