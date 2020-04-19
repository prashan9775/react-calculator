import React, { Component } from 'react';
import './App.css';

import Expression from './components/Expression';
import {
  ScienticCal, CalculatorRow1,
  CalculatorRow3, CalculatorRow2,
  CalculatorRow4, ThemeButton
} from './components';


class App extends Component {
  constructor() {
    super();
    this.state = {
      output: '',
      expression: '',
      mode: '',
      theme: ''
    }
  }

  buttonClick = (event) => {
    const value = event.target.value;
    let { expression } = this.state;
    switch (value) {
      case '=': {
        const output = eval(expression).toString();
        this.setState({ expression: output });
        break;
      }
      case 'clear': {
        this.setState({ expression: '', output: '' });
        break;
      }
      case 'sqrt': {
        const output = eval(expression);
        const sqrt = Math.sqrt(output).toString();
        this.setState({ expression: sqrt });
        break;
      }
      case 'square': {
        const output = eval(expression);
        const square = Math.pow(output, 2).toString();
        this.setState({ expression: square });
        break;
      }
      case 'sign': {
        const output = -1 * eval(expression);
        this.setState({ expression: output.toString() });
        break;
      }
      default: {
        this.setState({ expression: expression += value })
        break;
      }
    }
  }

  handletheme = () => {
    let { theme, mode } = this.state;
    let css = '';
    if (theme && theme.indexOf('inputCSS') > 0 && mode) {
      css = theme.replace('inputCSS', '');
    } else if (theme && mode == '') {
      css = '';
    } else {
      css = theme + ' inputCSS'
    }
    this.setState({
      theme: css
    })
  }

  handleScienticCal = () => {
    let { mode, theme } = this.state;
    let modeValue = '';
    let css = '';
    if (theme && mode) {
      css = theme.replace('scientific', '');
      modeValue = '';
    } else if (theme && mode == '') {
      css = theme + ' scientific';
      modeValue = 'scientific';
    } else if (theme == '' && mode) {
      css = '';
      modeValue = '';
    } else {
      modeValue = 'scientific';
      css = theme + ' scientific';
    }
    this.setState({
      mode: modeValue,
      theme: css
    })
  }

  render() {
    let { expression, mode = '', theme = '' } = this.state;
    let css = `calculator-body ${theme}`;
    let themeButtonCss = (theme.indexOf('inputCSS') > 0) ? `calculator-body themeButton` : '';
    let ScienticCalCSS = (mode) ? `calculator-body ScienticCal` : '';
    return (
      <div>
        <div className={css}>
          <h1>React Calculator</h1>
          <Expression expression={expression} />
          <CalculatorRow1 theme={theme} handleClick={this.buttonClick} mode={mode} />
          <CalculatorRow2 theme={theme} handleClick={this.buttonClick} mode={mode} />
          <CalculatorRow3 theme={theme} handleClick={this.buttonClick} mode={mode} />
          <CalculatorRow4 theme={theme} handleClick={this.buttonClick} mode={mode} />
          <ThemeButton theme={themeButtonCss} label={'Theme'} handleClick={this.handletheme} type='action' />
          <ScienticCal theme={ScienticCalCSS} label={'Scientific'} handleClick={this.handleScienticCal} type='action' />
        </div>
      </div>
    );
  }
}

export default App;
