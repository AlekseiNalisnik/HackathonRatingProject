import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const AfterHeaderLinks = (props) => {
    const section = props.section;
    const links = [
        {
            name:'Кино',
            point: 'cinema'
        },
        {
            name:'Театр',
            point: 'theatre'
        },
        {
            name:'Концерты',
            point: 'concert'
        },
        {
            name:'Сериалы',
            point: 'series'
        },
        {
            name:'Музеи',
            point: 'museum'
        },
        {
            name:'Еда',
            point: 'food'
        },
    ];

    return (
        <div>
            <div className="move_to_label">
                {links.map((item, index) => 
                    <div className="label" key={item.name}>
                        <Link to={{
                            pathname: `/Pаздел/${item.name}`,
                            state: {
                                linkProps: section[index],  // это массив с объектом
                                point: item                 // это поле объекта передаваемого массива
                            }
                        }} >
                            {item.name}
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AfterHeaderLinks;