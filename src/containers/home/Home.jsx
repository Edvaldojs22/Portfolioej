import React, { useEffect, useState } from 'react';
import './Home.css'
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import User from '../projects/user/User';
import AcerteAlvo from '../projects/acerteAlvo/AcerteAlvo';
import Barbearia from '../projects/barbearia/Barbearia';
import Mercado from '../projects/mercado/Mercado';
export default function Home() {

    const [vary, setVary] = useState('User');

    const mostraComponente = (componente) => {
        setVary(componente);
        
          
            if (componente === 'User') {
                document.documentElement.style.setProperty('--cor-gray', '#666666');
            }
            else if (componente === 'AcerteAlvo') {
                document.documentElement.style.setProperty('--cor-gray', '#f34b58');
            }
            else if (componente === 'Barbearia') {
                document.documentElement.style.setProperty('--cor-gray', '#e2d600');
            }
            else if (componente === 'Mercado') {
                document.documentElement.style.setProperty('--cor-gray', '#004c8e');
            }
    
    }

    
    useEffect(() => {
        const interval = setInterval(() => {
            const componentes = ['User', 'AcerteAlvo', 'Barbearia', 'Mercado'];
            const proximoComponenteIndex = (componentes.indexOf(vary) + 1) % componentes.length;
            const proximoComponente = componentes[proximoComponenteIndex];
            mostraComponente(proximoComponente);
        }, 13000); 

        return () => clearInterval(interval);
    }, [vary]); 


    return (

        <main className="home">

            <nav className='icon_links' >
                <a href="mailto:jonas.edvaldo.10@gmail.com" target="_blank">
                    <MdEmail />
                </a>
                <a href="https://github.com/Edvaldojs22" target="_blank">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/edvaldo-jonas-1b1899255/" target="_blank">
                    <FaLinkedin />
                </a>
            </nav>

            <p className='text_desenvolvedor'>Desenvolvedo de Software</p>

            <div className='painel_img_texto_sobre'>
                {vary === 'User' && <User />}
                {vary === 'AcerteAlvo' && <AcerteAlvo />}
                {vary === 'Barbearia' && <Barbearia />}
                {vary === 'Mercado' && <Mercado />}
            </div>

            <div className='painel_projetos'>
                <h2>PROJETOS</h2>

                <div className='projetos'>
                    <p onClick={() => mostraComponente('User')}>Home</p>
                    <p onClick={() => mostraComponente('AcerteAlvo')}>Acerte o Alvo</p>
                    <p onClick={() => mostraComponente('Barbearia')}>Barbearia</p>
                    <p onClick={() => mostraComponente('Mercado')}>Carrinho API</p>
                </div>
            </div>


            <div className='painel_nome_data'>
                <p>[EdvaldoJonas 2024.]</p>
            </div>

        </main>
    )
}