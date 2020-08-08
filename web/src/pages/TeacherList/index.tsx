import React, { useState, FormEvent } from "react";

import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";

import "./style.css";
import api from "../../service/api";


function TeacherList() {

    const [ week_day, setWeekDay ] = useState('');
    const [ subject, setSubject ] = useState('');
    const [ time, setTime ] = useState('');

    const [ classItems, setClassItems ] = useState([])

    function searchTeacher(e: FormEvent) {
        e.preventDefault();
        api.get('/classes', {
            params: {
                subject,
                week_day,
                time
            }
        }).then(response => {
            setClassItems(response.data);
        })
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffy disponiveis!">
                <form id="search-teachers" onSubmit={searchTeacher}>

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

                    <Select 
                        name="week_day" 
                        label="Dia da Semana" 
                        value={week_day}
                        onChange={(e) => {setWeekDay(e.target.value)}}
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
                        type="time" 
                        label="Hora" 
                        name="time" 
                        value={time}
                        onChange={(e) => {setTime(e.target.value)}}
                    />
                    <button type="submit">
                        Buscar
                    </button>
                </form>
            </PageHeader>

            <main>
                {classItems.map(teacher => {
                    return  <TeacherItem teacher={teacher} />
                })}
            </main>
        </div>
    )
}

export default TeacherList;