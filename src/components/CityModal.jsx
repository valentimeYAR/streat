import React, {useEffect, useState} from 'react';
import s from './styles/cityModal.module.css'
import cityList from '../data/cityes.json'



const CityModal = ({closeModal, onSelectCity}) => {
    const cites = ['Ярославль', "Москва","Санкт-Петербург","Уфа","Сочи","Омск","Красноярск","Казань","Пермь"]
    const citiesMain = cites.map((el, i) => <li key={i} className={s.cityElement} onClick={() => handleClick(el)}>{el}</li>)

    const [searchValue, setSearchValue] = useState('')

    const handleClick = (el) => {
        closeModal(false)
        onSelectCity(el)
    }
    const filterSearch = () => {
        return cityList.filter(el => el.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
    }
    const filterRes = filterSearch().map((el, i) => <li key={i} className={s.cityElement} onClick={() => handleClick(el)}>{el.name}</li>)


    return (
        <div className={s.container} onClick={e => e.target === e.currentTarget ? closeModal(false) : null}>
           <div className={s.wrapper}>
                <div className={s.top}>
                    <p className={s.city}>Выбор региона</p>
                    <p className={s.close} onClick={() => closeModal(false)}>X</p>
                </div>
                <div className={s.center}>
                    <input type="text" placeholder={'Поиск города'} value={searchValue} onChange={e => setSearchValue(e.currentTarget.value)}/>
                </div>
                <div className={s.bottom}>
                    <ul>
                        {searchValue ? filterRes.slice(0, 10, 1) : citiesMain}
                    </ul>
                </div>
           </div>
        </div>
    );
};

export default CityModal;