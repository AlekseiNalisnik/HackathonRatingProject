// import React, { Component } from 'react';

// export default class Cinema extends Component {
//     render() {
//         const cinemaArray = this.props.cinema[0]; // получаем объект, в котором лежит массив

//         return (
//             <div>
//                 <div>Кино</div>
//                 <div className="cinema">
//                     {cinemaArray.cinema.map((item) => 
//                         <div className="cinema_item" key={item.id}>
//                             <img className="cinema_item__image" src={item.photo} alt={item.name} />
//                             <div className="cinema_item__name">{item.name}</div>
//                             <div className="cinema_item__year">{item.year + ', ' + item.genre}</div>
//                             <div className="cinema_item__rating">{item.rating}</div>
//                         </div>
//                         )
//                     }
//                 </div>
//             </div>
//         );
//     };
// }


import React, { useState } from 'react';

const Cinema = (props) => {

    const cinemaArray = props.cinema[0];
    const slides = cinemaArray.cinema;
    const [slideIndex, setSlideIndex] = useState(5);
    const slidesItem = slides.slice(slideIndex - 5, slideIndex);

    const plusSlides = (n) => {
        if(slideIndex >= slides.length - 1) {
            // ничего не происходит
        }  else {
            setSlideIndex(n);
        }
    }

    const minusSlides = (n) => {
        if(slideIndex <= 5) {
            // ничего не происходит
        } else {
            setSlideIndex(n);
        }
    }

    return (
        <div>
            <div>Кино</div>
            <div className="cinema">
                {slidesItem.map((item) => (
                    <div className="cinema_item" key={item.id}>
                        <img className="cinema_item__image" src={item.photo} alt={item.name} />
                        <div className="cinema_item__name">{item.name}</div>
                        <div className="cinema_item__year">{item.year + ', ' + item.genre}</div>
                        <div className="cinema_item__rating">{item.rating}</div>
                    </div>
                ))}
            </div>
            <button onClick={() => plusSlides(slideIndex + 2)}>Вперёд</button>
            <button onClick={() => minusSlides(slideIndex - 2)}>Назад</button>
        </div>
    );
}

export default Cinema;
