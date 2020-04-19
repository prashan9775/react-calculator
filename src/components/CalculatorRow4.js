import React from 'react';
import {Button} from './ButtonComponents';

const CalculatortRow4 = ({theme,handleClick,mode}) => {
    return (
        <div className='button-row'>
            <Button theme={theme} label={'clear'} handleClick={handleClick} type='input' />
            <Button theme={theme} label={'0'} handleClick={handleClick} type='input' />
            <Button theme={theme} label={'='} handleClick={handleClick} type='input' />
            <Button theme={theme} label={'/'} handleClick={handleClick} type='input' />
        </div>
    );
}

export default CalculatortRow4;