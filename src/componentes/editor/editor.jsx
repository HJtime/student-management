import React from 'react';
import AddForm from '../add_form/add_form';
import EditForm from '../edit_form/edit_form';
import styles from './editor.module.css';

const Editor = ({FileInput, addStudent, selected, updateStudent, deleteStudent}) => (
    <section className={styles.editor}>
        <button className={styles.title}>수강생 관리</button>
        <div>
            <AddForm FileInput={FileInput} onAdd={addStudent}/>
            {selected&&<EditForm FileInput={FileInput} student={selected} deleteStudent={deleteStudent} updateStudent={updateStudent}/>}
        </div>
    </section>
);

export default Editor;