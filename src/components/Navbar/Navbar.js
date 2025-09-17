import { useState } from "react";
import estilo from './Navbar.module.css';

export default function Navbar({ setPagina }) {
    const [mostrarLinks, setMostrarLinks] = useState(false);

    return (
        <nav className={estilo.nav}>
            <button onClick={() => setMostrarLinks(!mostrarLinks)} className={estilo.textcalcu}>
                Calculadoras
            </button>

            {mostrarLinks && (
                <div>
                    <button onClick={() => setPagina('botoes')} className={estilo.botoes}>Calculadora Botões</button>
                    <button onClick={() => setPagina('input')} className={estilo.botoes}>Calculadora Input</button>
                </div>
            )}
        </nav>
    );
}