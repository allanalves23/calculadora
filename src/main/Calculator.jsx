import React from 'react'
import './Calculator.css'

import Display from '../components/Display'
import Button from '../components/Button'

const initialState = {
    displayValue: '0',
    clearFlag: false,
    op: null,
    values: [0,0],
    currentIndex: 0
    
}

export default class Calculator extends React.Component {
    
    state = {...initialState}
    
    constructor(props){
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.addDigit = this.addDigit.bind(this)
        this.setOperation = this.setOperation.bind(this)
    }
    
    clearMemory(){
        this.setState({...initialState})
    }
    
    setOperation(operation){
        if(this.state.currentIndex === 0) {
            this.setState({currentIndex: 1, op: operation, clearFlag: true})
        }else{
            const equals = operation === '='
            const currentOperation = this.state.op
            const values = [...this.state.values]
            if(currentOperation !== null){
                switch(currentOperation){
                    case "+":
                    values[0] = values[0] + values[1]
                    break
                    case "-":
                    values[0] = values[0] - values[1]
                    break
                    case "/":
                    values[0] = values[0] / values[1]
                    break
                    case "*":
                    values[0] = values[0] * values[1]
                    break
                }
            }
            values[1] = 0
            
            this.setState({displayValue: values[0], op: equals ? null : operation,
                currentIndex: equals ? 0:1, clearFlag: !equals, values: values})
            }
        }
        
        
        
        addDigit(digit){
            if(digit === '.' && this.state.displayValue.includes('.')) return
            
            const clearDisplay = this.state.clearFlag || this.state.displayValue === '0'
            const currentValue = clearDisplay ? '' : this.state.displayValue
            const displayValue = currentValue + digit
            
            this.setState({displayValue, clearFlag: false})
            
            if(digit !== '.'){
                const index = this.state.currentIndex
                const newValue = parseFloat(displayValue)
                const values = [...this.state.values]
                values[index] = newValue
                this.setState({values: values})
                console.log(values)
            }
            
        }
        
        
        render(){
            
            
            
            return (
                <div className="calculator">
                <Display value={this.state.displayValue}/>
                <Button label="AC" click={this.clearMemory} triple />
                <Button label="/" click={this.setOperation} op />
                <Button label="7" click={this.addDigit}/>
                <Button label="8" click={this.addDigit}/>
                <Button label="9" click={this.addDigit}/>
                <Button label="*" click={this.setOperation} op />
                <Button label="4" click={this.addDigit}/>
                <Button label="5" click={this.addDigit}/>
                <Button label="6" click={this.addDigit}/>
                <Button label="-" click={this.setOperation} op />
                <Button label="1" click={this.addDigit}/>
                <Button label="2" click={this.addDigit}/>
                <Button label="3" click={this.addDigit}/>
                <Button label="+" click={this.setOperation} op />
                <Button label="0" click={this.addDigit} double/>
                <Button label="." click={this.addDigit}/>
                <Button label="=" click={this.setOperation} op />
                </div>
                )
            }
        }