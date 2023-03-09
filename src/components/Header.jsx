import React, {useState} from 'react';
import s from './styles/header.module.css'
import CityModal from "./CityModal";

const Header = () => {
    const [modal, setModal] = useState(false)
    const [activeCity, setActiveCity] = useState('Москва')
    return (
        <div className={s.container}>
            <div className={s.top}>
                <div className={s.left} onClick={() => setModal(!modal)}>
                    <p className={s.city}>{activeCity}</p>
                </div>
                <div className={s.center}>
                    <a href="#" >Магазины</a>
                    <a href="#">Доставка и оплата</a>
                    <a href="#">Где мой заказ?</a>
                    <a href="#">Обмен и возврат</a>
                    <a href="#">Подарочный сертификат</a>
                </div>
                <div className={s.right}>8 (800) 700-82-60</div>
            </div>
            <div className={s.bottom}>
                <div className={s.bLeft}>
                    <a href="#">Мужчинам</a>
                    <a href="#">Женщинам</a>
                    <a href="#">Детям</a>
                </div>
                <div className={s.bCenter}>
                    <img src="https://street-beat.ru/local/templates/streetbeat_vue/frontend/dist/images/logo.svg?id=99b1f282" alt="" className={s.logo}/>
                </div>
                <div className={s.bRight}>
                    <a href="!#">Сникер-блог</a>
                    <a href="!#">Новости</a>
                    <a href="!#">Бонусная карта</a>
                </div>
            </div>
            {modal && <CityModal closeModal={setModal} modal={modal} value={activeCity} onSelectCity={(i) => setActiveCity(i)}/>}
        </div>
    );
};

export default Header;