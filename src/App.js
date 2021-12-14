import { useState } from "react/cjs/react.development";
import Botao from "./components/buttonCalc/buttonCalc";

import * as math from "mathjs"; //Biblioteca que faz funções matemáticas

import './styled.css'

const arrOperacoes = ['*', '/', '+', '.', '-'] //Array com as operações

export default function App() {
  const [input, setInput] = useState ("") //Hook que guarda o estado de uma variável

  function insereNum(val){ //Função a qual pega o valor apertado pelo children do botão
    setInput(input + val); //Concatenação do estado atual com o valor apertado 
  }

  function insereOperacao(val){ //A função verifica se o primeiro valor começou com uma operação ou se está vazia e retornada nada caso sim.
    if (input === "" || (arrOperacoes.includes(input[input.lenght - 1]) && arrOperacoes.includes(val))
    ){
      return;
    } else {
      setInput(input + val);
    }
  }

  function calcular(){ //Função que verifica se o igual foi pressionado e se sim, retorna o calculo a partir da biblioteca.
    if (input === "" || arrOperacoes.includes(input[input.lenght - 1])){
      return input; //Retorna apenas o input já inserido se o campo estiver vazio ou se uma das operações estiver pressionada
    } else {
      setInput(math.evaluate(input)); //caso não, efetua e exibe o calculo por meio do hook
    }
  }

 return (
    <div className="App">
      <h1>Calculadora Com react</h1>
      <div className="calc-wrapper">
        <Botao isInput>{input}</Botao>
        <div className="linha">
          <Botao onClick={insereNum}>7</Botao>
          <Botao onClick={insereNum}>8</Botao>
          <Botao onClick={insereNum}>9</Botao>
          <Botao onClick={insereOperacao}>/</Botao>
        </div>
        <div className="linha">
          <Botao onClick={insereNum}>4</Botao>
          <Botao onClick={insereNum}>5</Botao>
          <Botao onClick={insereNum}>6</Botao>
          <Botao onClick={insereOperacao}>*</Botao>
        </div>
        <div className="linha">
          <Botao onClick={insereNum}>1</Botao>
          <Botao onClick={insereNum}>2</Botao>
          <Botao onClick={insereNum}>3</Botao>
          <Botao onClick={insereOperacao}>+</Botao>
        </div>
        <div className="linha">
          <Botao onClick={insereOperacao}>.</Botao>
          <Botao onClick={insereNum}>0</Botao>
          <Botao onClick={() => setInput("")}>C</Botao>
          <Botao onClick={insereOperacao}>-</Botao>
        </div>
        <div className="linha">
          <Botao onClick={calcular}>=</Botao>
        </div>
      </div>
    </div>
  );
}

 
