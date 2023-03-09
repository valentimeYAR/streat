import React, {useState} from 'react';
import s from './styles/card.module.css'
import CardCategories from "./CardCategories";

const Card = ({style}) => {
    const [mouse, setMouse] = useState(false)
    return (
        <div className={s.container}
             onMouseEnter={() => setMouse(true)}
             onMouseLeave={() => setMouse(false)}
             style={{...style}}
        >
            <h2 className={s.title}>Мужчинам</h2>
            <div className={s.categories}>
                {mouse && <CardCategories/>}
            </div>
        </div>
    );
};

export default Card;