import React from 'react';
import './Team.css';
import logo from '../logo.svg';


const Team = () =>(
    <section className="Team">
        <header>
            <h1>Quem faz o ...</h1>
        </header>
        <ul>
            <li>
                <img src="#" alt="daw"/>
                <h3>dawdwa</h3>
            </li>

            <li>
                <img src="#" alt="daw"/>
                <h3>dawdwa</h3>
            </li>

            <li>
                <img src="#" alt="daw"/>
                <h3>dawdwa</h3>
            </li>

            <li>
                <img src="#" alt="daw"/>
                <h3>dawdwa</h3>
            </li>

            <li>
                <img src="#" alt="daw"/>
                <h3>dawdwa</h3>
            </li>
        </ul>
        
        <img className="logo" src={logo} alt="Logo"/>
    </section>
);

export default Team;