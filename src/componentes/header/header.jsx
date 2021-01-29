import React from 'react';
import styles from './header.module.css';

const Header = ({onLogout}) => (
    <header className={styles.header}>
        <h1 className={styles.title}>수강생 관리</h1>
        <div className={styles.search}>
            <input className={styles.searchbar} type="search" placeholder="Search.."/>
        </div>
        {onLogout&&(<button onClick={onLogout} className={styles.logout}>Logout</button>)}
    </header>
);

export default Header;