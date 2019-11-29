import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Concert = (props) => {

    const concertArray = props.concert[2];
    const slides = concertArray.concert;
    const [slideIndex, setSlideIndex] = useState(5);
    const slidesItem = slides.slice(slideIndex - 5, slideIndex);

    const plusSlides = (n) => {
        if(slideIndex < slides.length - 1) {
            setSlideIndex(n);
        }
    };

    const minusSlides = (n) => {
        if(slideIndex > 5) {
            setSlideIndex(n);
        }
    };

    return (
        <div>
            <div className="concert">
                <div className="concert_title">Концерты</div>
                {slidesItem.map((item) => (
                    <div className="concert_item" key={item.id}>
                        <Link to={{
                            pathname: `/single/${item.id}`,
                            state: {
                                linkProps: item
                            }
                        }} className="link_decorate">
                            <img className="concert_item__image" src={item.photo} alt={item.name} />
                            <div className="concert_item__name">{item.name}</div>
                            <div className="concert_item__date">{item.date + ', ' + item.time}</div>
                            <div className="concert_item__rating">{item.rating}</div>
                        </Link>
                    </div>
                ))}
                <button onClick={() => plusSlides(slideIndex + 2)} className="button_ahead">
                    <img 
                        src="data:image/svg+xml,%3Csvg width='8px' height='14px' viewBox='0 0 8 14' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink%27%3E %3Cdefs%3E%3C/defs%3E %3Cg id='current' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='ui' transform='translate(-633.000000, -2143.000000)' fill='%23FFFFFF'%3E %3Cg id='arrow' transform='translate(612.000000, 2126.000000)'%3E %3Cg transform='translate(15.000000, 15.000000)'%3E %3Cpolygon transform='translate(10.000000, 9.000000) scale(-1, 1) translate(-10.000000, -9.000000) ' points='12.72 2 6 8.99936126 12.7193846 16 14 14.6707729 8.53661538 8.99936126 14 3.32858837' fill='%23000'%3E%3C/polygon%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E" 
                        alt="кнопка1"
                    />
                </button>
                <button onClick={() => minusSlides(slideIndex - 2)} className="button_behind" >
                    <img 
                        src="data:image/svg+xml,%3Csvg width='8px' height='14px' viewBox='0 0 8 14' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink%27%3E %3Cdefs%3E%3C/defs%3E %3Cg id='current' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='ui' transform='translate(-633.000000, -2143.000000)' fill='%23FFFFFF'%3E %3Cg id='arrow' transform='translate(612.000000, 2126.000000)'%3E %3Cg transform='translate(15.000000, 15.000000)'%3E %3Cpolygon transform='translate(10.000000, 9.000000) scale(-1, 1) translate(-10.000000, -9.000000) ' points='12.72 2 6 8.99936126 12.7193846 16 14 14.6707729 8.53661538 8.99936126 14 3.32858837' fill='%23000'%3E%3C/polygon%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E" 
                        alt="кнопка2"
                    />
                </button>
            </div>
        </div>
    );
}

export default Concert;