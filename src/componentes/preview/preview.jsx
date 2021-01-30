import React from 'react';
import Student from '../student/student';
import styles from './preview.module.css';

const Preview = ({students, onStudentClick}) => (
    <section className={styles.preview}>
        <button className={styles.title}>수강생 목록</button>
        <ul className={styles.students}>
        {
            Object.keys(students).map(key=>(<Student onStudentClick={onStudentClick} key={key} student={students[key]}/>))
        }
        </ul>
    </section>
);

export default Preview;