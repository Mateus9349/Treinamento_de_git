import { useState } from 'react';
import estilo from './CalcBotoes.module.css';

export default function Calculadora() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [opera, setOpera] = useState("");
  const [mensagem, setMensagem] = useState("");

  function armazena(numero) {
    if (opera === "") {
      const conver = Number(String(num1) + numero);
      setNum1(conver);
      setMensagem(conver);
    } else {
      const conver = Number(String(num2) + numero);
      setNum2(conver);
      setMensagem(conver);
    }
  }

  function calculo() {
    if (num2 !== null) {
      var resultado;

      switch (opera) {
        case "+": resultado = num1 + num2; break;
        case "-": resultado = num1 - num2; break;
        case "*": resultado = num1 * num2; break;
        case "/": resultado = num1 / num2; break;
        default: setMensagem("Falta a operação!!!"); return;
      }
      setMensagem(resultado);
    }
  }

  function limpar() {
    setNum1(0);
    setNum2(0);
    setOpera("");
    setMensagem("");
  }

  return (
    <>
      <div className={estilo.tudo}>
        <h2 className={estilo.h2}>Calculadora Botões</h2>
        <h3 className={estilo.h3}>{mensagem}</h3>

        <div className={estilo.botoes}>
          <button onClick={() => setOpera("+")}>+</button>
          <button onClick={() => setOpera("-")}>-</button>
          <button onClick={() => setOpera("*")}>*</button>
          <button onClick={() => setOpera("/")}>/</button>

          <button onClick={() => armazena("0")}>0</button>
          <button onClick={() => armazena("1")}>1</button>
          <button onClick={() => armazena("2")}>2</button>
          <button onClick={() => armazena("3")}>3</button>
          <button onClick={() => armazena("4")}>4</button>
          <button onClick={() => armazena("5")}>5</button>
          <button onClick={() => armazena("6")}>6</button>
          <button onClick={() => armazena("7")}>7</button>
          <button onClick={() => armazena("8")}>8</button>
          <button onClick={() => armazena("9")}>9</button>

          <button onClick={calculo} className={estilo.cor}>=</button>
          <button onClick={limpar} className={estilo.cor}>Limpar</button>
        </div>
      </div>
    </>
  );
}