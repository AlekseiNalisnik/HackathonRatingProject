import React from 'react';
import Header from '../Headers/Header';
import Footer from '../Footer/Footer';

const Single = (props) => {

    const { linkProps } = props.location.state;
    console.log('linkProps - ', linkProps);

    return (
        <div>
            <Header />
            <div className="single">
                <div class="move_to_label">
                    <div class="label"><a href="/">Кино</a></div>
                    <div class="label"><a href="/">Концерты</a></div>
                    <div class="label"><a href="/">Театр</a></div>
                    <div class="label"><a href="/">Еда</a></div>
                    <div class="label"><a href="/">Музеи</a></div>
                    <div class="label"><a href="/">Сериалы</a></div>
                </div>

                <div className="main_single_topic">
                        <div className="single__name">{linkProps.name}</div>
                    <div className= "single__content">
                        <img className="single__image" src={linkProps.photo} alt={linkProps.name} />
                        <div className="single__contnet_valutions">
                            <div className="single__rating"> <div className="single__contnet_naming"> Рейтинг: </div>{linkProps.rating}</div>
                            <div className="single__year"> <div className="single__contnet_naming"> Год:</div>{linkProps.year}</div>
                            <div className="single__genre"> <div className="single__contnet_naming"> Жанр: </div>{linkProps.genre}</div>
                            <div className="single__address"> <div className="single__contnet_naming"> Адрес: </div>{linkProps.address}</div>
                            <div className="single__date"> <div className="single__contnet_naming"> Дата: </div>{linkProps.date}</div>
                            <div className="single__time"> <div className="single__contnet_naming"> Время: </div>{linkProps.time}</div>
                            <div className="single__country"> <div className="single__contnet_naming"> Страна: </div>{}</div>
                            <div className="single__starring"> <div className="single__contnet_naming">В ролях:</div>{}</div>
                            <div className="single__producer"> <div className="single__contnet_naming">Продюсер:</div>{}</div>
                            <div className="single__budjet"> <div className="single__contnet_naming">Бюджет:</div>{}</div>

                            <div className="single__contnet_press_star"> Поставьте оценку</div>
            
                        </div>
                        <div className="rating__field_block">
                            <fieldset class="rating__field_field">
                            <input type="radio" id="star5" name="rating" value="5" /><label for="star5" title="Rocks!"> stars</label>
                            <input type="radio" id="star4" name="rating" value="4" /><label for="star4" title="Pretty good"> stars</label>
                            <input type="radio" id="star3" name="rating" value="3" /><label for="star3" title="Meh"> stars</label>
                            <input type="radio" id="star2" name="rating" value="2" /><label for="star2" title="Kinda bad"> stars</label>
                            <input type="radio" id="star1" name="rating" value="1" /><label for="star1" title="Sucks big time"> star</label>
                        </fieldset>
                        </div>
                    </div>
                    <div className="single__description"> <div className="single__contnet_naming_description"> Описание: </div>{linkProps.description}</div>
                </div>
                <Footer />
            </div>
        </div>
    )
};

export default Single;
