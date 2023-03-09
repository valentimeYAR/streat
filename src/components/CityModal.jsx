import React from 'react';
import s from './styles/cityModal.module.css'

const CityModal = ({closeModal, onSelectCity}) => {
    const cites = ['Ярославль', "Москва","Санкт-Петербург","Уфа","Сочи","Омск","Красноярск","Казань","Пермь"]
    const handleClick = (el) => {
        closeModal(false)
        onSelectCity(el)
    }
    return (
        <div className={s.container} onClick={e => e.target === e.currentTarget ? closeModal(false) : null}>
           <div className={s.wrapper}>
                <div className={s.top}>
                    <p className={s.city}>Выбор региона</p>
                    <p className={s.close} onClick={() => closeModal(false)}>X</p>
                </div>
                <div className={s.center}>
                    <input type="text" placeholder={'Поиск города'}/>
                </div>
                <div className={s.bottom}>
                    <ul>
                        {cites.map((el, i) => <li className={s.cityElement} onClick={() => handleClick(el)}>{el}</li>)}
                    </ul>
                </div>
           </div>
        </div>
    );
};

export default CityModal;