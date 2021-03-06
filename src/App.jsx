import React, { useState } from "react";
import'./App.css';
import { HiX } from "react-icons/hi";
import Back from "./Vector.svg";
import Prox from "./Vector2.svg";


function abrirModal(){        
    document.getElementById('modal').style.top="380px";
}

function fecharModal(){        
    document.getElementById('modal').style.top="-100%";
}
function abrirConcluido(){
    document.getElementById('concluido').style.top="195px";
} 
function Home(){
    
    const[password,setPassword]= useState("");

    const handlePassword = (e) => {
        console.log(e);
        const regExp = /[0-9]/g;
        e = e.replaceAll(regExp, '*');
        setPassword(e)
      }

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
            <h3 id="nome">Nome social</h3>
            <a>xxxxxxxxxxxxxxx</a>
        </div>
        <div className="final">
            <a id ="como">Como gostaria que a gente lhe chame</a>
            <input id="input"type="text" placeholder="Seu nome"/>
            <br/>
            <div className="botoes">
                <button className="voltar"><img src={Back}/><a>Voltar</a></button>
                <button onClick={abrirModal} className="proximo"><a>Próximo</a><img src={Prox}/></button>
            </div>            
        </div>
        <div className="bg-modal" id="modal">
            <div>
            <button onClick={fecharModal} id="fechar"><HiX id="close"/><a>Fechar</a></button>

            <h4>Digite sua senha</h4>
            <p>Para altenticar a operação</p>

                <div>
                    <input value={password} maxlength="1" className="cpmSenha" onChange={(e) => handlePassword(e.currentTarget.value)} inInputNum></input>
                    <input value={password} maxlength="1" className="cpmSenha" onChange={(e) => handlePassword(e.currentTarget.value)} inInputNum></input>
                    <input value={password} maxlength="1" className="cpmSenha" onChange={(e) => handlePassword(e.currentTarget.value)} inInputNum></input>
                    <input value={password} maxlength="1" className="cpmSenha" onChange={(e) => handlePassword(e.currentTarget.value)} inInputNum></input>
                </div>

            
                <div className="confirmar" >    
                    <button onClick={abrirConcluido} id="pop-confirmar">Confirmar</button>              
                    <svg id="dtlh-confirmar" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.6203 0.390625H4.76834C2.51833 0.390625 0.694336 2.22219 0.694336 4.48153V14.2997C0.694336 16.5591 2.51833 18.3906 4.76834 18.3906H14.6203C16.8703 18.3906 18.6943 16.5591 18.6943 14.2997V4.48153C18.6943 2.22219 16.8703 0.390625 14.6203 0.390625Z" fill="#5F82A6"/>
                        <path d="M9.67371 12.8255C11.5969 12.8255 13.156 11.26 13.156 9.32878C13.156 7.39758 11.5969 5.83203 9.67371 5.83203C7.75049 5.83203 6.19141 7.39758 6.19141 9.32878C6.19141 11.26 7.75049 12.8255 9.67371 12.8255Z" fill="#333750"/>
                        <path d="M9.77235 14.7103C12.7322 14.7103 15.1316 12.3009 15.1316 9.32876C15.1316 6.35664 12.7322 3.94727 9.77235 3.94727C6.81251 3.94727 4.41309 6.35664 4.41309 9.32876C4.41309 12.3009 6.81251 14.7103 9.77235 14.7103Z" stroke="white" stroke-width="1.29334" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.87695 8.32031L9.79917 10.2505L16.0783 3.94531" stroke="white" stroke-width="1.29334" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>

                <div id="concluido">
                    <svg width="286" height="165" viewBox="0 0 286 165" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                            <rect width="285" height="164" transform="translate(0.695312 0.390625)" fill="white"/>
                            <rect x="0.695312" y="0.390625" width="285" height="164" fill="#F2F2F2"/>
                            <path d="M106.127 120.654C106.016 122.184 105.45 123.389 104.428 124.268C103.412 125.146 102.071 125.586 100.404 125.586C98.5814 125.586 97.1458 124.974 96.0977 123.75C95.056 122.52 94.5352 120.833 94.5352 118.691V117.822C94.5352 116.455 94.776 115.251 95.2578 114.209C95.7396 113.167 96.4264 112.37 97.3184 111.816C98.2168 111.257 99.2585 110.977 100.443 110.977C102.084 110.977 103.406 111.416 104.408 112.295C105.411 113.174 105.99 114.408 106.146 115.996H103.217C103.145 115.078 102.888 114.414 102.445 114.004C102.009 113.587 101.342 113.379 100.443 113.379C99.4668 113.379 98.7344 113.73 98.2461 114.434C97.7643 115.13 97.5169 116.214 97.5039 117.686V118.76C97.5039 120.296 97.735 121.419 98.1973 122.129C98.666 122.839 99.4017 123.193 100.404 123.193C101.309 123.193 101.983 122.988 102.426 122.578C102.875 122.161 103.132 121.52 103.197 120.654H106.127ZM107.426 120.01C107.426 118.962 107.628 118.027 108.031 117.207C108.435 116.387 109.014 115.752 109.77 115.303C110.531 114.854 111.413 114.629 112.416 114.629C113.842 114.629 115.004 115.065 115.902 115.938C116.807 116.81 117.312 117.995 117.416 119.492L117.436 120.215C117.436 121.836 116.983 123.138 116.078 124.121C115.173 125.098 113.959 125.586 112.436 125.586C110.912 125.586 109.695 125.098 108.783 124.121C107.878 123.145 107.426 121.816 107.426 120.137V120.01ZM110.248 120.215C110.248 121.217 110.437 121.986 110.814 122.52C111.192 123.047 111.732 123.311 112.436 123.311C113.119 123.311 113.653 123.05 114.037 122.529C114.421 122.002 114.613 121.162 114.613 120.01C114.613 119.027 114.421 118.265 114.037 117.725C113.653 117.184 113.113 116.914 112.416 116.914C111.726 116.914 111.192 117.184 110.814 117.725C110.437 118.258 110.248 119.089 110.248 120.215ZM121.771 114.824L121.859 116.045C122.615 115.101 123.627 114.629 124.896 114.629C126.016 114.629 126.85 114.958 127.396 115.615C127.943 116.273 128.223 117.256 128.236 118.564V125.391H125.414V118.633C125.414 118.034 125.284 117.601 125.023 117.334C124.763 117.061 124.33 116.924 123.725 116.924C122.93 116.924 122.335 117.262 121.938 117.939V125.391H119.115V114.824H121.771ZM134.779 123.311C135.3 123.311 135.723 123.167 136.049 122.881C136.374 122.594 136.544 122.214 136.557 121.738H139.203C139.197 122.454 139.001 123.112 138.617 123.711C138.233 124.303 137.706 124.766 137.035 125.098C136.371 125.423 135.635 125.586 134.828 125.586C133.318 125.586 132.126 125.107 131.254 124.15C130.382 123.187 129.945 121.859 129.945 120.166V119.98C129.945 118.353 130.378 117.054 131.244 116.084C132.11 115.114 133.298 114.629 134.809 114.629C136.13 114.629 137.188 115.007 137.982 115.762C138.783 116.51 139.19 117.51 139.203 118.76H136.557C136.544 118.213 136.374 117.77 136.049 117.432C135.723 117.087 135.294 116.914 134.76 116.914C134.102 116.914 133.604 117.155 133.266 117.637C132.934 118.112 132.768 118.887 132.768 119.961V120.254C132.768 121.341 132.934 122.122 133.266 122.598C133.598 123.073 134.102 123.311 134.779 123.311ZM143.793 125.391H140.961V110.391H143.793V125.391ZM152.455 124.316C151.758 125.163 150.795 125.586 149.564 125.586C148.432 125.586 147.566 125.26 146.967 124.609C146.374 123.958 146.072 123.005 146.059 121.748V114.824H148.881V121.65C148.881 122.751 149.382 123.301 150.385 123.301C151.342 123.301 151.999 122.969 152.357 122.305V114.824H155.189V125.391H152.533L152.455 124.316ZM160.365 125.391H157.543V114.824H160.365V125.391ZM159.535 110.537H162.611L159.906 113.564H157.611L159.535 110.537ZM162.367 120.029C162.367 118.382 162.735 117.07 163.471 116.094C164.213 115.117 165.225 114.629 166.508 114.629C167.536 114.629 168.386 115.013 169.057 115.781V110.391H171.889V125.391H169.34L169.203 124.268C168.5 125.146 167.595 125.586 166.488 125.586C165.245 125.586 164.245 125.098 163.49 124.121C162.742 123.138 162.367 121.774 162.367 120.029ZM165.189 120.234C165.189 121.224 165.362 121.982 165.707 122.51C166.052 123.037 166.553 123.301 167.211 123.301C168.083 123.301 168.699 122.933 169.057 122.197V118.027C168.705 117.292 168.096 116.924 167.23 116.924C165.87 116.924 165.189 118.027 165.189 120.234ZM173.637 120.01C173.637 118.962 173.839 118.027 174.242 117.207C174.646 116.387 175.225 115.752 175.98 115.303C176.742 114.854 177.624 114.629 178.627 114.629C180.053 114.629 181.215 115.065 182.113 115.938C183.018 116.81 183.523 117.995 183.627 119.492L183.646 120.215C183.646 121.836 183.194 123.138 182.289 124.121C181.384 125.098 180.17 125.586 178.646 125.586C177.123 125.586 175.906 125.098 174.994 124.121C174.089 123.145 173.637 121.816 173.637 120.137V120.01ZM176.459 120.215C176.459 121.217 176.648 121.986 177.025 122.52C177.403 123.047 177.943 123.311 178.646 123.311C179.33 123.311 179.864 123.05 180.248 122.529C180.632 122.002 180.824 121.162 180.824 120.01C180.824 119.027 180.632 118.265 180.248 117.725C179.864 117.184 179.324 116.914 178.627 116.914C177.937 116.914 177.403 117.184 177.025 117.725C176.648 118.258 176.459 119.089 176.459 120.215Z" fill="black"/>
                            <circle cx="139.695" cy="63.3906" r="30" fill="#323751"/>
                            <path d="M125.695 58.3145L140.96 72.3906L172.695 35.3906" stroke="white" stroke-width="8"/>
                            <path d="M163.695 45.8906L172.695 35.3906" stroke="#323751" stroke-width="8"/>
                        </g>
                        <defs>
                            <clipPath id="clip0">
                            <rect width="285" height="164" fill="white" transform="translate(0.695312 0.390625)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    </div>
}

export default Home


