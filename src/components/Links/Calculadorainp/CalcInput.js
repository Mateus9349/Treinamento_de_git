import { useState } from "react";
import estilo from './CalcInput.module.css';

export default function Calculadora() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState("");

  function somar() {
    setResultado(Number(num1) + Number(num2));
  }
  function subtrair() {
    setResultado(Number(num1) - Number(num2));

  }
  function multiplicar() {
    setResultado(Number(num1) * Number(num2));

  }
  function dividr() {
    if (Number(num2) === 0) {
      setResultado("Não é possível dividir por zero");
    } else {
      setResultado(Number(num1) / Number(num2));
    }
  }

  return (
    <div className={estilo.tudo}>

      <div>

        <h2 className={estilo.h2} >Calculadora Input</h2>
        <p>Primeiro Numero</p>
        <input type="text" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Digite o primeiro número" />
        <p>Segundo Numero</p>
        <input type="text" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Digite o segundo número" />

      </div>

      <div className={estilo.opera}>

        <button onClick={somar}>+</button>
        <button onClick={subtrair}>-</button >
        <button onClick={multiplicar}>*</button>
        <button onClick={dividr}>/</button>

      </div >

      <h3 className={estilo.resu}>Resultado: {resultado} </h3>

    </div>

  )
}
