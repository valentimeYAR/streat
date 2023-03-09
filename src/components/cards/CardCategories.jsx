import React from 'react';
import s from './cardcategories.module.css'
const CardCategories = () => {
    return (
        <ul className={s.list}>
            <li>Кросовки</li>
            <li>Ботинки</li>
            <li>Брюки</li>
            <li>Толстовки</li>
            <li>Одежда</li>
        </ul>
    );
};

export default CardCategories;