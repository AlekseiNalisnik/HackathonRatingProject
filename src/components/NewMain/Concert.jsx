import React, { Component } from 'react';

export default class Concert extends Component {
    render() {
        const concertArray = this.props.concert[2]; // получаем объект, в котором лежит массив

        return (
            <div className="concert">
                {console.log('concertArray - ', concertArray)}
                {concertArray.concert.map((item) => 
                    <div className="concert_item" key={item.id}>
                        <img className="concert_item__image" src={item.photo} alt={item.name} />
                        <div className="concert_item__name">{item.name}</div>
                        <div className="theatre_item__date">{item.date + ', ' + item.time}</div>
                        <div className="concert_item__rating">{item.rating}</div>
                    </div>
                    )
                }
            </div>
        );
    };
}