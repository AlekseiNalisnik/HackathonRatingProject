import React, { useState } from 'react';

const Theatre = (props) => {

    const theatreArray = props.theatre[1];
    const slides = theatreArray.theatre;
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
            <div className="theatre">
                <div className="theatre_title">Театр</div>
                    {slidesItem.map((item) => (
                        <div className="theatre_item" key={item.id}>
                            <img className="theatre_item__image" src={item.photo} alt={item.name} />
                            <div className="theatre_item__name">{item.name}</div>
                            <div className="theatre_item__date">{item.date + ', ' + item.time}</div>
                            <div className="theatre_item__rating">{item.rating}</div>
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

export default Theatre;