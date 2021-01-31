import React, { memo, useRef, useState } from 'react';
import Button from '../button/button';
import styles from './add_form.module.css';

const AddForm =memo(({FileInput, onAdd}) => {
    const formRef=useRef();
    const nameRef=useRef();
    const sexRef=useRef();
    const birthRef=useRef();
    const jobRef=useRef();
    const [file, setFile]=useState({fileName:null, fileURL: null});

    const onFileChange=(file)=>{
        setFile({
            fileName: file.name,
            fileURL: file.url
        })
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        const student={
            id: Date.now(),
            name: nameRef.current.value||'',
            sex: sexRef.current.value||'',
            birth: birthRef.current.value||'',
            job: jobRef.current.value||'',
            fileName: file.fileName||'',
            fileURL: file.fileURL||'',
        }

        formRef.current.reset();
        setFile({fileName:null, fileURL: null});
        onAdd(student);
    }

    return(
        <form className={styles.form} ref={formRef}>
            <div className={styles.inputbox}>
                <span className={styles.title}>이름</span>
                <input className={styles.input} type="text" name="name" ref={nameRef}/>
            </div>
            <div className={styles.inputbox}>
                <span className={styles.title}>성별</span>
                <select name="sex" className={styles.select} ref={sexRef}>
                    <option placeholder="여성">여성</option>
                    <option placeholder="남성">남성</option>
                </select>
            </div>
            <div className={styles.inputbox}>
                <span className={styles.title}>생년월일</span>
                <input className={styles.input} type="date" name="birth" ref={birthRef}/>
            </div>
            <div className={styles.inputbox}>
                <span className={styles.title}>직업</span>
                <input className={styles.input} type="text" name="job" ref={jobRef}/>
            </div>
            <div className={styles.buttonbox}>
                <div className={styles.fileInput}>
                    <FileInput name={file.fileName} onFileChange={onFileChange}/>
                </div>
                <Button className={styles.button} name="Add" onClick={onSubmit}/>
            </div>
        </form>
    );
});

export default AddForm;