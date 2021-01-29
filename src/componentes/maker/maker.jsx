import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../header/header';
import styles from './maker.module.css';

const Maker = ({authService}) => {
    const history=useHistory();

    const onLogout=useCallback(()=>{
        authService.logout();
    },[authService]);

    useEffect(()=>{
        authService.onAuthChange(user=>{
            if(!user){
                history.push('/');
            }
        })
    })

    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
        </section>
    );
};

export default Maker;