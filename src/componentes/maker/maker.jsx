import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({FileInput, authService, studentRepository}) => {
    const historyState=useHistory().state;
    const history=useHistory();
    const [students, setStudents]=useState({});
    const [selected, setSelected]=useState(null);
    const [value, setValue]=useState(null);
    const [userId, setUserId]=useState(historyState&&historyState.id);

    const onLogout=useCallback(()=>{
        authService.logout();
    },[authService]);

    useEffect(()=>{
        if(!userId){
            return;
        }
        const stopSync=studentRepository.syncStudents(userId, students=>{
            setStudents(students);
        })
        return()=>{stopSync();}
    },[userId])

    useEffect(()=>{
        authService.onAuthChange(user=>{
            if(user){
                setUserId(user.uid);
            }else{
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
        studentRepository.saveStudent(userId, student);
    }

    const deleteStudent=(student)=>{
        setStudents(students=>{
            const updated={...students};
            delete updated[student.id];
            return updated;
        });
        studentRepository.removeStudent(userId, student);
    }

    const onStudentClick=(student)=>{
        setSelected(student);
    }

    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout} onSearch={onSearch}/>
            <div className={styles.container}>
                <div className={styles.editor}>
                    <Editor selected={selected} FileInput={FileInput} addStudent={createOrUpdateStudent} deleteStudent={deleteStudent} updateStudent={createOrUpdateStudent}/>
                </div>
                <Preview value={value} onStudentClick={onStudentClick} students={students}/>
            </div>
        </section>
    );
};

export default Maker;