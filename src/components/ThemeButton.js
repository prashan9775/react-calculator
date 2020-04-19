import React, { Component } from 'react';

const ThemeButton = (props) => {
    return (
        <input
            type="button"
            className={props.theme}
            onClick={props.handleClick}
            value={props.label}
        />
    );
}
export default ThemeButton;