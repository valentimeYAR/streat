import React, {useState} from 'react';
import cityList from "../../data/cityes.json";

const Test = ({setSearchValue, searchVale}) => {

    const filterSearch = cityList.filter(el => el.name.toLocaleLowerCase().includes(searchVale.toLocaleLowerCase()))
    return (
        <div>
            {filterSearch}
        </div>
    );
};

export default Test;