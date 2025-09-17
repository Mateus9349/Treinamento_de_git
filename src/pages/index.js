import { useState } from 'react';
import Navbar from "@/components/Navbar/Navbar";
import CalcBotoes from '../components/Links/Calculadorabot/CalcBotoes';
import CalcInput from '../components/Links/Calculadorainp/CalcInput';

export default function Home() {
  const [pagina, setPagina] = useState("");

  return (
    <>
      <Navbar setPagina={setPagina} />

      <main>
        {pagina === 'botoes' && <CalcBotoes />}
        {pagina === 'input' && <CalcInput />}
      </main>
      
    </>
  );
}