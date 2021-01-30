import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({FileInput, authService}) => {
    const history=useHistory();
    const [students, setStudents]=useState({
        '1':{
            id:'1',
            name: '김상균',
            sex: '남성',
            birth: '1995-01-01',
            job: '가수'
        },
        '2':{
            id:'2',
            name: '김현진',
            sex: '여성',
            birth: '1997-08-06',
            job: '대학생'
        },
    });
    const [selected, setSelected]=useState(null);
    const [value, setValue]=useState(null);

    const onLogout=useCallback(()=>{
        authService.logout();
    },[authService]);

    useEffect(()=>{
        authService.onAuthChange(user=>{
            if(!user){
                history.push('/');
            }
        })
    })

    const onSearch=(value)=>{
        setValue(value);
    }

    const createOrUpdateStudent=(student)=>{
        setStudents(students=>{
            const updated={...students};
            updated[student.id]=student;
            return updated;
        });
    }

    const deleteStudent=(student)=>{
        setStudents(students=>{
            const updated={...students};
            delete updated[student.id];
            return updated;
        });
    }

    const onStudentClick=(student)=>{
        setSelected(student);
    }

    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout} onSearch={onSearch}/>
            <div className={styles.container}>
                <Editor selected={selected} FileInput={FileInput} addStudent={createOrUpdateStudent} deleteStudent={deleteStudent} updateStudent={createOrUpdateStudent}/>
                <Preview value={value} onStudentClick={onStudentClick} students={students}/>
            </div>
        </section>
    );
};

export default Maker;