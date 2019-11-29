import React from 'react';

const Single = (props) => {

    const { linkProps } = props.location.state;
    console.log('linkProps - ', linkProps);

    return (
        <div className="single">
            <img className="single__image" src={linkProps.photo} alt={linkProps.name} />
            <div className="single__name">{linkProps.name}</div>
            <div className="single__year">{linkProps.year}</div>
            <div className="single__genre">{linkProps.genre}</div>
            <div className="single__description">{linkProps.description}</div>
            <div className="single__address">{linkProps.address}</div>
            <div className="single__date">{linkProps.date}</div>
            <div className="single__time">{linkProps.time}</div>
            <div className="single__rating">{linkProps.rating}</div>
        </div>
    )
};

export default Single;