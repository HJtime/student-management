import React, { memo, useRef } from 'react';
import styles from './header.module.css';

const Header = memo(({onLogout, onSearch}) => {
    const inputRef=useRef();

    const handleSearch=()=>{
        const value=inputRef.current.value;
        onSearch(value);
    }

    const onKeyPress=(event)=>{
        if(event.key==='Enter'){
            handleSearch();
        }
    }

    return(
        <header className={styles.header}>
            <h1 className={styles.title}>수강생 관리</h1>
            <div className={styles.search}>
                <input ref={inputRef} onKeyPress={onKeyPress} className={styles.searchbar} type="search" placeholder="Search.."/>
            </div>
            {onLogout&&(<button onClick={onLogout} className={styles.logout}>Logout</button>)}
        </header>
    );
});

export default Header;