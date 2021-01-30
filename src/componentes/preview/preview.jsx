import React from 'react';
import Student from '../student/student';
import styles from './preview.module.css';

const Preview = ({students, value, onStudentClick}) => {
    let searchValue=null;

    if(value!=null){
        searchValue=Object.values(students).filter(student=>student.name===value);
        console.log(searchValue);
        console.log(value);
    }

    return(
        <section className={styles.preview}>
            <button className={styles.title}>수강생 목록</button>
            <ul className={styles.students}>
            {!value&&Object.keys(students).map(key=>(<Student onStudentClick={onStudentClick} key={key} student={students[key]}/>))}
            {searchValue&&searchValue.map(key=>(<Student onStudentClick={onStudentClick} key={key.id} student={students[key.id]}/>))}
            </ul>
        </section>
    );
};

export default Preview;