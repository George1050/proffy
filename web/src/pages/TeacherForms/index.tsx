import React, { useState, FormEvent } from "react";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import warningIcon from "../../assets/images/icons/warning.svg"
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

import "./style.css";
import api from "../../service/api";
import { useHistory } from "react-router-dom";

function TeacherForms() {
    const [ name, setName ] = useState('');
    const [ avatar, setAvatar ] = useState('');
    const [ whatsapp, setWhatsapp ] = useState('');
    const [ bio, setBio ] = useState('');

    const [ subject, setSubject ] = useState('');
    const [ cost, setCost ] = useState('');

    const history = useHistory();

    const [ scheduleItems, setScheduleItems ] = useState([
        {week_day: 0, from: '', to: ''}
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems, 
            {week_day: 7, from: '', to: ''}
        ])
    }
    
    function handlerCreate(e: FormEvent){
        e.preventDefault();

        api.post('/classes',{
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            alert('Cadastro feito com sucesso!');
            history.push('/');
        }).catch(() => {
            alert('erro no cadastro')
        })
        
    }

    function setScheduleItemValue(position: Number, field: string, value: string){
         const newArray = scheduleItems.map((scheduleItem, index) => {
             if(position === index){
                 return {...scheduleItem, [field]: value}
             }
             return scheduleItem;
         });

         
         setScheduleItems(newArray);
         console.log(newArray);
    }
    
    return (
        <div id="page-teacher-form" className = "container">
            <PageHeader 
                title = "Que incrivel que você quer dar aulas!"
                description = "O primeiro passo é preencher este formulario de inscrição!"
            />

            <main>
                <form onSubmit={handlerCreate}>
                    <fieldset>
                        <legend>Seus Dados</legend>
                        <Input 
                            name="name" 
                            label="Nome Completo"
                            value={name}
                            onChange={(e) => {setName(e.target.value)}}
                        />
                        <Input 
                            name="avatar" 
                            label="Avatar"
                            value={avatar}
                            onChange={(e) => {setAvatar(e.target.value)}}
                        /> 
                    <Input 
                            name="whatsapp" 
                            label="Whatsapp"
                            value={whatsapp}
                            onChange={(e) => {setWhatsapp(e.target.value)}}
                        />                    
                        <Textarea 
                            name="bio" 
                            label="Biografia" 
                            value={bio}
                            onChange={(e) => {setBio(e.target.value)}}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a Aula</legend>
                        <Select 
                            name="subject" 
                            label="Matérias" 
                            value={subject}
                            onChange={(e) => {setSubject(e.target.value)}}
                            options={[
                                {value: 'Artes', label: 'Artes'},
                                {value: 'Biologia', label: 'Biologia'},
                                {value: 'Ciência', label: 'Ciência'},
                                {value: 'Educação Física', label: 'Educação Física'},
                                {value: 'Física', label: 'Física'},
                                {value: 'Geografia', label: 'Geografia'},
                                {value: 'História', label: 'História'},
                                {value: 'Matematica', label: 'Matematica'},
                                {value: 'Português', label: 'Português'},
                                {value: 'Química', label: 'Química'},
                            ]}
                        />
                        <Input 
                            name="cost" 
                            label="Custo por hora/aula."
                            value={cost}
                            onChange={(e) => {setCost(e.target.value)}}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>
                            horários Disponíveis
                            <button type="button" onClick={addNewScheduleItem}>
                                + Add Horário
                            </button>
                        </legend>
                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div className="schedule-item" key={scheduleItem.week_day}>
                                    <Select 
                                        name="week_day" 
                                        label="Dia da Semana" 
                                        value={scheduleItem.week_day}
                                        onChange={(e) => {setScheduleItemValue(index, 'week_day', e.target.value)}}
                                        options={[
                                            {value: '0', label: 'Domingo'},
                                            {value: '1', label: 'Segunda'},
                                            {value: '2', label: 'Terça'},
                                            {value: '3', label: 'Quarta'},
                                            {value: '4', label: 'Quinta'},
                                            {value: '5', label: 'Sexta'},
                                            {value: '6', label: 'Sabado'},
                                        ]}
                                    />

                                    <Input 
                                        name="from" 
                                        label="Das" 
                                        type="time" 
                                        value={scheduleItem.from}
                                        onChange={(e) => {setScheduleItemValue(index, 'from', e.target.value)}}
                                    />
                                    <Input 
                                        name="to" 
                                        label="Até" 
                                        type="time" 
                                        value={scheduleItem.to}
                                        onChange={(e) => {setScheduleItemValue(index, 'to', e.target.value)}}
                                    />
                                </div>
                            )
                        })}
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="icone de aviso"/>
                            Importante <br />
                            Preencha todos os dados.
                        </p>
                        <button type="submit">
                            Salvar cadastro
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForms;