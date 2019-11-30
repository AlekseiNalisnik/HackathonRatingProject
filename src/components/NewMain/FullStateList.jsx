import React from 'react';
import Header from '../Headers/Header';
import { Link } from 'react-router-dom';

const FullStateList = (props) => {

    const { linkProps, point } = props.location.state;
    const section = linkProps[point.point];
    console.log('FullStateList linkProps - ', linkProps[point.point]);

    return (
        <div>
            <Header />
            <div className="fullStateList">
                {/* <div className="fullStateList_title">Лидеры проката</div> */}
                {section.map((item) => (
                    <div className="fullStateList_item" key={item.id}>
                        <Link to={{
                            pathname: `/single/${item.id}`,
                            state: {
                                linkProps: item
                            }
                        }} className="link_decorate">
                            <img className="fullStateList__image" src={item.photo} alt={item.name} />
                            <div className="fullStateList__name">{item.name}</div>
                            {point.point == 'cinema' ?
                                <div className="fullStateList__year">{item.year + ', ' + item.genre}</div>
                            : point.point == 'theatre' ?
                                <div className="fullStateList__year">{item.date + ', ' + item.time}</div>
                            : point.point == 'concert' ?
                                <div className="fullStateList__year">{item.date + ', ' + item.time}</div>
                            : point.point == 'series' ?
                                <div className="fullStateList__year">{item.year + ', ' + item.genre}</div>
                            : point.point == 'museum' ?
                                <div className="fullStateList__year">{item.address}</div>
                            : 
                                <div className="fullStateList__year">{item.address + ', ' + item.genre}</div>
                            }
                            <div className="fullStateList__rating">{item.rating}</div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default FullStateList;