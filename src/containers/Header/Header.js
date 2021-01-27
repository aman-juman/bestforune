import React, {useState} from 'react';
import logo from '../../assets/img/logo.png';
import s from './Header.module.scss';

const Header = () =>{

    const [search, setSearch] = useState('search');

    const handleChange = e =>{
        setSearch(e.value)
    };

    return(
        <header>
            <div className={s.header__row}>
                <img src={logo} alt="logo" className={s.header__logo}/>
                <div className={s.header__search}>
                    <input onChange={handleChange} value={search} type="text"/>
                </div>
            </div> 
        </header>
    )
};

export default Header;