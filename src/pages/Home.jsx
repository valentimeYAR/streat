import React from 'react';
import s from './styles/home.module.css'
import Card from "../components/cards/Card";

const Home = () => {
    return (
        <div className={s.container}>
            <div className={s.cards}>
                <Card
                    style={{backgroundImage: "url('https://thypix.com/wp-content/uploads/2021/11/nike-mobile-wallpaper-57.jpg')"}}
                    title={'Мужчинам'}
                />
                <Card
                    style={{backgroundImage: "url('https://static.street-beat.ru/upload/iblock/6c1/6c16ceee2e6604c756793cb7a30154b6.jpg')"}}
                    title={'Женщинам'}
                />
                <Card
                    style={{backgroundImage: "url('https://static.street-beat.ru/upload/iblock/383/3833f5ac768adfd5de7292ad1348c521.jpg')"}}
                    title={'Детям'}/>
            </div>

        </div>
    );
};

export default Home;