import React, { Component } from 'react';

export const Button = (props) => {
    return (
        <input
            type="button"
            className={props.theme}
            onClick={props.handleClick}
            value={props.label}
        />
    );
}
