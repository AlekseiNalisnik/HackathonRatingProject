import React, { Component } from 'react';

export default class Event extends Component {
    render() {
        const eventArray = this.props.event[3]; // получаем объект, в котором лежит массив

        return (
            <div>
                <div>Мероприятия</div>
                <div className="event">
                    {console.log('eventArray - ', eventArray)}
                    {eventArray.event.map((item) => 
                        <div className="event_item" key={item.id}>
                            <img className="event_item__image" src={item.photo} alt={item.name} />
                            <div className="event_item__name">{item.name}</div>
                            <div className="theatre_item__date">{item.date + ', ' + item.time}</div>
                            <div className="event_item__rating">{item.rating}</div>
                        </div>
                        )
                    }
                </div>
            </div>
        );
    };
}