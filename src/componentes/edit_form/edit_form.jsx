import React, { useEffect, useRef, useState } from 'react';
import Button from '../button/button';
import styles from './edit_form.module.css';

const EditForm = ({student, FileInput, updateStudent, deleteStudent}) => {
    const formRef=useRef();
    const nameRef=useRef();
    const sexRef=useRef();
    const birthRef=useRef();
    const jobRef=useRef();
    const [file, setFile]=useState({fileName:null, fileURL: null});
    
    useEffect(()=>{
        formRef.current.reset();
    }, [student])

    const {name, sex, birth, job}=student;

    const onFileChange=file=>{
        updateStudent({
            ...student,
            fileName:file.name,
            fileURL: file.url
        })

        setFile({
            fileName: file.name,
            fileURL: file.url
        })
    }

    const onChange=(event)=>{
        if(event.currentTarget==null){
            return;
        }
        event.preventDefault();
        const _student={
            id: student.id,
            name: nameRef.current.value||'',
            sex: sexRef.current.value||'',
            birth: birthRef.current.value||'',
            job: jobRef.current.value||'',
            fileName: file.fileName||'',
            fileURL: file.fileURL||'',
        }
        updateStudent(_student);
    }
    const onSubmit=(event)=>{
        event.preventDefault();
        deleteStudent(student);
    }

    return(
        <form className={styles.form} ref={formRef}>
            <div className={styles.inputbox}>
                <span className={styles.title}>이름</span>
                <input
                className={styles.input}
                type="text"
                name="name"
                ref={nameRef}
                defaultValue={name}
                onChange={onChange}/>
            </div>
            <div className={styles.inputbox}>
                <span className={styles.title}>성별</span>
                <select
                name="sex"
                className={styles.select}
                ref={sexRef}
                value={sex}
                onChange={onChange}>
                    <option placeholder="여성">여성</option>
                    <option placeholder="남성">남성</option>
                </select>
            </div>
            <div className={styles.inputbox}>
                <span className={styles.title}>생년월일</span>
                <input
                className={styles.input}
                type="date"
                name="birth"
                ref={birthRef}
                defaultValue={birth}
                onChange={onChange}/>
            </div>
            <div className={styles.inputbox}>
                <span className={styles.title}>직업</span>
                <input
                className={styles.input}
                type="text"
                name="job"
                ref={jobRef}
                defaultValue={job}
                onChange={onChange}/>
            </div>
            <div className={styles.buttonbox}>
                <div className={styles.fileInput}>
                    <FileInput name={file.fileName} onFileChange={onFileChange}/>
                </div>
                <Button className={styles.button} name="Delete" onClick={onSubmit}/>
            </div>
        </form>
    );
};

export default EditForm;