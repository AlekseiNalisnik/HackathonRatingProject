import React, { useState } from 'react';

const Museum = (props) => {

    const museumArray = props.museum[4];
    const slides = museumArray.museum;
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
            <div className="museum">
                <div className="museum_title">Музеи</div>
                    {slidesItem.map((item) => (
                        <div className="museum_item" key={item.id}>
                            <img className="museum_item__image" src={item.photo} alt={item.name} />
                            <div className="museum_item__name">{item.name}</div>
                            <div className="museum_item__address">{item.address + ', ' + item.genre}</div>
                            <div className="museum_item__rating">{item.rating}</div>
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

export default Museum;