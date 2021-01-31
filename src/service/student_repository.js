import {firebaseDatabase} from './firebase';

class StudentRepository{
    syncStudents(userId, onUpdate){
        const ref=firebaseDatabase.ref(`${userId}/students`);
        ref.on('value', snapshot=>{
            const value=snapshot.val();
            value&&onUpdate(value);
        });
        return()=>ref.off();
    }
    saveStudent(userId, student){
        firebaseDatabase.ref(`${userId}/students/${student.id}`).set(student);
    }

    removeStudent(userId, student){
        firebaseDatabase.ref(`${userId}/students/${student.id}`).remove();
    }
}

export default StudentRepository;