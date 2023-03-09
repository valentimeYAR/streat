import React, {useState} from 'react';
import s from './card.module.css'
import CardCategories from "./CardCategories";

const Card = ({style, title}) => {
    const [mouse, setMouse] = useState(false)
    return (
        <div className={s.container}
             onMouseEnter={() => setMouse(true)}
             onMouseLeave={() => setMouse(false)}
             style={{...style}}
        >
            <h2 className={s.title}>{title}</h2>
            <div className={s.categories}>
                {mouse && <CardCategories/>}
            </div>
        </div>
    );
};

export default Card;