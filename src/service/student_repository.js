import firebaseApp from './firebase';

class StudentRepository{
    syncStudents(userId, onUpdate){
        const ref=firebaseApp.database().ref(`${userId}/students`);
        ref.on('value', snapshot=>{
            const value=snapshot.val();
            value&&onUpdate(value);
        });
        return()=>ref.off();
    }
    saveStudent(userId, student){
        firebaseApp.database().ref(`${userId}/students/${student.id}`).set(student);
    }

    removeStudent(userId, student){
        firebaseApp.database().ref(`${userId}/students/${student.id}`).remove();
    }
}

export default StudentRepository;