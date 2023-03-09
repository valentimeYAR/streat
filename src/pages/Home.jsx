import React from 'react';
import s from './styles/home.module.css'
import Card from "../components/Card";

const Home = () => {
    return (
        <div className={s.container}>
            <Card style={{backgroundImage: "url('https://static.street-beat.ru/upload/resize_cache/iblock/a02/840_1000_1/a025b618649f75db3ce815596412189f.jpg')"}}/>
            <Card style={{backgroundImage: "url('')"}/>
            <Card/>
        </div>
    );
};

export default Home;