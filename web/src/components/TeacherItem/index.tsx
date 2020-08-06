import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg"
import "./style.css";

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/49557536?s=460&u=e9fcaed156e20cc63f2dbe2475e4d32cb5c71d1d&v=4" alt="george ravelly"/>
                <div className="user">
                    <strong>
                        George Ravelly
                    </strong>
                    <span>
                        Animador
                    </span>
                </div>
            </header>
            <p>
                Animadores podem trabalhar em uma variedade de campos, 
                incluindo filmes, televisão e videogames.
                <br /><br />
                Um animador é um artista que cria múltiplas imagens, 
                chamadas de quadros, que dão a ilusão de movimento chamada 
                animação quando mostrados em uma sequência rápida.
            </p>
            <footer>
                <p>
                    Preço/hora<strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;