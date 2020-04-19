import React from 'react';
import {Button} from './ButtonComponents';

const CalculatorRow3 = ({theme,handleClick,mode}) => {
    return (
        <div className='button-row'>
            <Button theme={theme} label={'7'} handleClick={handleClick} type='input' />
            <Button theme={theme} label={'8'} handleClick={handleClick} type='input' />
            <Button theme={theme} label={'9'} handleClick={handleClick} type='input' />
            <Button theme={theme} label={'*'} handleClick={handleClick} type='input' />
            {mode=='scientific'?<Button theme={theme} label={'square'} handleClick={handleClick} type='action' />:''}
        </div>
    );
}

export default CalculatorRow3;


