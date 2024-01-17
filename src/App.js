import Input from './components/Input';
import Button from './components/Button';
import List from './components/List';

import { Container, Content, Row, Column } from "./styles";
import { useState } from 'react';


const results = [];

const App = () => {
  const[currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber,setFirstNumber] = useState('0');
  const [operation,setOperation] = useState('?');
  const [result,setResult] = useState('0');

  // Adiciona dado nos números atuais
  const handleAddNumber = (number) => {
    if(result!='0') handleClear();
    setCurrentNumber(prev => `${prev==='0' ? '' : prev}${number}`);
  }

  // Limpa os dados de números e operação
  const handleClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
    setResult('0');
  }

  // Adição
  const handleSumNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = Number(firstNumber)+Number(currentNumber);
      setResult(String(sum));
      results.push(`${firstNumber} ${operation} ${currentNumber} = ${sum}`);
    }
  }

  // Subtração
  const handleSubNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const sub = Number(firstNumber)-Number(currentNumber);
      setResult(String(sub));
      results.push(`${firstNumber} ${operation} ${currentNumber} = ${sub}`);
    }
  }
  
  // Divisão
  const handleDivNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    } else {
      const division = Number(firstNumber)/Number(currentNumber);
      setResult(String(division));
      results.push(`${firstNumber} ${operation} ${currentNumber} = ${division}`);
    }
  }

  // Multiplicação
  const handleMultiNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*');
    } else {
      const multiply = Number(firstNumber)*Number(currentNumber);
      setResult(String(multiply));
      results.push(`${firstNumber} ${operation} ${currentNumber} = ${multiply}`);
    }
  }

  // Igual à
  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch(operation) {
        case '+': handleSumNumbers(); break;
        case '-': handleSubNumbers(); break;
        case '/': handleDivNumbers(); break;
        case '*': handleMultiNumbers(); break;

        default: break;
      }
    }
    console.log(results);
  }

  return (
    <Container>
      <Content>
        <Input value={result > 0 ? result : currentNumber}/>
        
        <Row>
          <Button label="x" onClick={handleMultiNumbers}/>
          <Button label="/" onClick={handleDivNumbers}/>
          <Button label="C" onClick={handleClear}/>
          <Button label="."/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={handleSubNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
        </Row>

        <List values={results}/>
      </Content>
    </Container>
  );
}

export default App;
