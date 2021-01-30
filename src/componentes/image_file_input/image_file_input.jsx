import React, { useRef, useState } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({imageUploader, name, onFileChange}) => {
    const [loading, setLoading]=useState(false);
    const inputRef=useRef();
    const onButtonClick=(e)=>{
        e.preventDefault();
        inputRef.current.click();
    }

    const onChange=async event=>{
        setLoading(true);
        const uploded= await imageUploader.upload(event.target.files[0]);
        setLoading(false);
        onFileChange({
            name: uploded.original_filename,
            url: uploded.url
        })
    }

    return(
        <div className={styles.container}>
        <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}/>
        {!loading&&<button className={styles.button} onClick={onButtonClick}>{name||'No File'}</button>}
        {loading&&<div className={styles.loading}></div>}
    </div>
    );
};

export default ImageFileInput;