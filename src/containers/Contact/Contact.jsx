import React from 'react';
import s from './Contact.module.scss';


const Contact = ({contact}) => {
    return (
        <div className={s.main}>
            <div className='container'>
                <div className={s.cart}>
                    <h2>Bestfortune</h2>
                    <div className={s.contentFirst}>
                        <div className={s.contentText}><span>Телефон</span>
                            <p>{contact.phone}</p>
                        </div>
                        <div className={s.contentText}><span>Адрес</span>
                            <p>{contact.address}</p>
                        </div>
                    </div>
                    <div className={s.contentSecond}>
                        <div className={s.contentText}><span>Email</span>
                            <p>{contact.email}</p>
                        </div>
                        <div className={s.contentText}><span>Social networks</span>
                            <p>info@bestfortune.kz</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contact;