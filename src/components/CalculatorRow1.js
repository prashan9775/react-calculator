import React from 'react';
import {Button} from './ButtonComponents';

const CalculatorRow1 = ({theme,handleClick,mode}) => {
    return (
        <div className='button-row'>
            <Button theme={theme} label={'1'} handleClick={handleClick} type='input' />
            <Button theme={theme} label={'2'} handleClick={handleClick} type='input' />
            <Button theme={theme} label={'3'} handleClick={handleClick} type='input' />
            <Button theme={theme} label={'+'} handleClick={handleClick} type='action' />
            {mode === 'scientific'?<Button theme={theme} label={'sign'} handleClick={handleClick} type='action' />:''}
        </div>
    );
}

export default CalculatorRow1;

