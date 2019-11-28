import React, { Component } from 'react';

export default class Cinema extends Component {
    render() {
        const cinemaArray = this.props.cinema[0]; // получаем объект, в котором лежит массив

        return (
            <div className="cinema">
                {cinemaArray.cinema.map((item) => 
                    <div className="cinema_item" key={item.id}>
                        <img className="cinema_item__image" src={item.photo} alt={item.name} />
                        <div className="cinema_item__name">{item.name}</div>
                        <div className="cinema_item__year">{item.year + ', ' + item.genre}</div>
                        <div className="cinema_item__rating">{item.rating}</div>
                    </div>
                    )
                }
            </div>
        );
    };
}