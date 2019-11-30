import React from 'react';
import Header from '../Headers/Header';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const FullStateList = (props) => {

    const { linkProps, point } = props.location.state;
    const section = linkProps[point.point];
    console.log('FullStateList linkProps - ', linkProps[point.point]);

    return (
        <div>
            <Header />
            <div className="fullStateList">
                {linkProps[point.point].map(item => item.classiffication == 'cinema' ? 
                                                        <div className = "fullStateList__scene_name"> Кино</div>                
                    : item.classiffication == 'theatre' ? <div className = "fullStateList__scene_name"> Театры</div>
                    : item.classiffication == 'concert' ? <div className = "fullStateList__scene_name"> Концерты</div>
                    : item.classiffication == 'museum' ? <div className = "fullStateList__scene_name"> Музеи</div>
                    : item.classiffication == 'series' ? <div className = "fullStateList__scene_name"> Сериалы</div>
                    : item.classiffication == 'food' ? <div className = "fullStateList__scene_name"> Кафе</div> 
                    : <div></div>)
                }
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
            <Footer />
        </div>
    )
};

export default FullStateList;