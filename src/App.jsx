import React from "react";
import'./App.css';
import {IoIosArrowBack,IoIosArrowForward} from "react-icons/io";
import { HiX } from "react-icons/hi";

function Home(){
    return <div className="tela">
        <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"/>
        </head>
        <div className="cabecalho">
            <div id="logo"></div>           
            <button id="cancelar"><HiX id="close"/><a>Cancelar</a></button>
        </div>
        <div className="nome-social">
            <h3 id="nome">Nome Social</h3>
            <a>xxxxxxxxxxxx</a>
        </div>
        <div className="final">
            <a id ="como">Como gostaria que a gente lhe chame</a>
            <input id="input"type="text" placeholder="Seu nome"/>
            <br/>
            <div className="botoes">
                <button className="voltar"><IoIosArrowBack id="back"/>Voltar</button>
                <button className="proximo">Próximo<IoIosArrowForward id="prox"/></button>
            </div>
            
        </div>
    </div>
}

export default Home


