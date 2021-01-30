import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './componentes/image_file_input/image_file_input';
import StudentRepository from './service/student_repository';

const authService=new AuthService();
const imageUploader=new ImageUploader();
const studentRepository=new StudentRepository();
const FileInput=props=>(
  <ImageFileInput {...props} imageUploader={imageUploader}/>
)
ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} studentRepository={studentRepository} FileInput={FileInput}/>
  </React.StrictMode>,
  document.getElementById('root')
);