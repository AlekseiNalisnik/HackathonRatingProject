import React, { useState } from 'react';

const Cinema = (props) => {

    const cinemaArray = props.cinema[0];
    const slides = cinemaArray.cinema;
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
            <div className="cinema">
                <div className="cinema_title">Кино</div>
                    {slidesItem.map((item) => (
                        <div className="cinema_item" key={item.id}>
                            <img className="cinema_item__image" src={item.photo} alt={item.name} />
                            <div className="cinema_item__name">{item.name}</div>
                            <div className="cinema_item__year">{item.year + ', ' + item.genre}</div>
                            <div className="cinema_item__rating">{item.rating}</div>
                        </div>
                    ))}
                    <button onClick={() => plusSlides(slideIndex + 2)} className="button_ahead_cinema">
                        <img 
                            src="https://cdn.icon-icons.com/icons2/1132/PNG/512/1486348525-music-forward-front-next-arrow_80457.png" 
                            alt="кнопка1"
                        />
                    </button>
                    <button onClick={() => minusSlides(slideIndex - 2)} className="button_behind_cinema" >
                        <img 
                            src="https://cdn.icon-icons.com/icons2/1132/PNG/512/1486348526-arrow-back-backwards-repeat-previous_80453.png" 
                            alt="кнопка2"
                        />
                    </button>
                </div>
        </div>
    );
}

export default Cinema;
