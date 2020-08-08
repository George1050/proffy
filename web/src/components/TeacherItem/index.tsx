import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg"

import "./style.css";
import api from "../../service/api";

interface ClassesItemProps{
    teacher: {
        id: Number,
        name: string,
        avatar: string,
        whatsapp: string,
        bio: string,
        subject: string,
        cost: Number,
    }
}

const TeacherItem: React.FC<ClassesItemProps> = ({teacher}) => {
    function createNewConnection(){
        api.post('/connections',{
            user_id: teacher.id
        })
    }

    return(
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name}/>
                <div className="user">
                    <strong>
                        {teacher.name}
                    </strong>
                    <span>
                       {teacher.subject}
                    </span>
                </div>
            </header>
            <p>{teacher.bio}</p>
            <footer>
                <p>
                    Preço/hora
                    <strong>
                        {teacher.cost.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                    </strong>
                </p>
                <a 
                    onClick={createNewConnection}
                    href={`https://wa.me/${teacher.whatsapp}`} 
                    target="blank" 
                >
                    <img src={whatsappIcon} alt="whatsapp"/>
                    Entrar em contato
                </a>
            </footer>
        </article>
    )
}

export default TeacherItem;