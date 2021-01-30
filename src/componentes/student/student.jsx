import React from 'react';
import styles from './student.module.css';

const DEFAULT_IMAGE=process.env.PUBLIC_URL+'/images/default_profile.png';
const Student = ({student, onStudentClick}) => {
    const {name, birth, sex, job, fileURL}=student;
    const url=fileURL||DEFAULT_IMAGE;

    const onClick=()=>{
        onStudentClick(student);
    }
    
    return(
        <li className={styles.student} onClick={onClick}>
            <img className={styles.profileimg} src={url} alt="profile"/>
            <span className={styles.info}>{name}</span>
            <span className={styles.info}>{birth}</span>
            <span className={styles.info}>{sex}</span>
            <span className={styles.info}>{job}</span>
        </li>
    );
};

export default Student;