import React from 'react';
import {Button} from './ButtonComponents';

const CalculatorRow2 = ({theme,handleClick,mode}) => {
    return (
        <div className='button-row'>
            <Button theme={theme} label={'4'} handleClick={handleClick} type='input' />
            <Button theme={theme} label={'5'} handleClick={handleClick} type='input' />
            <Button theme={theme} label={'6'} handleClick={handleClick} type='input' />
            <Button theme={theme} label={'-'} handleClick={handleClick} type='input' />
            {mode=='scientific'?<Button theme={theme} label={'sqrt'} handleClick={handleClick} type='action' />:''}
        </div>
    );
}

export default CalculatorRow2;
