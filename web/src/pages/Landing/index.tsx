import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../service/api";

import logoImg from "../../assets/images/logo.svg";
import landing from "../../assets/images/landing.svg";

import studyIcon from "../../assets/images/icons/study.svg";
import giveIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import "./style.css";

function Landing() {

    const [ totalConnections, setTotalConnnections ] = useState(0);

    useEffect(() => {
        api.get('connections').then(response => {
            const { total } = response.data;
            setTotalConnnections(total)
        })
    }, [])

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online!</h2>
                </div>
                <img 
                    src={landing} 
                    alt="plataforma de estudos" 
                    className="hero-image"
                />

                <div className="buttons-container">
                    <Link to="study" className="study">
                        <img src={studyIcon} alt="Estudar" />
                        Estudar
                    </Link>

                    <Link to="give-classes" className="give-classes">
                        <img src={giveIcon} alt="Estudar" />
                        Dar aulas
                    </Link>
                </div>

                <span className="total-connections">
                    Total de {totalConnections} conexões já realizadas
                    <img src={purpleHeartIcon} alt="coração roxo"/>
                </span>
            </div>
        </div>
    )
}

export default Landing;