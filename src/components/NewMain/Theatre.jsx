import React, { Component } from 'react';

export default class Theatre extends Component {
    render() {
        const theatreArray = this.props.theatre[1]; // получаем объект, в котором лежит массив

        return (
            <div className="theatre">
                {console.log('theatreArray - ', theatreArray)}
                {theatreArray.theatre.map((item) => 
                    <div className="theatre_item" key={item.id}>
                        <img className="theatre_item__image" src={item.photo} alt={item.name} />
                        <div className="theatre_item__name">{item.name}</div>
                        <div className="theatre_item__date">{item.date + ', ' + item.time}</div>
                        <div className="theatre_item__rating">{item.rating}</div>
                    </div>
                    )
                }
            </div>
        );
    };
}