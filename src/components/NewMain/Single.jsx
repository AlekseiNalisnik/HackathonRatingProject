import React from 'react';
import Header from '../Headers/Header';
import Footer from '../Footer/Footer';
import AfterHeaderLinks from '../Headers/AfterHeaderLinks';
import { section } from './FullStateList';

const Single = (props) => {

    const { linkProps, rate } = props.location.state;
    console.log('Single linkProps - ', linkProps);
    console.log('Single rate - ', rate);

    const handleClick = (event) => {
        event.preventDefault();
        console.log('handleClick');
    };

    return (
        <div>
            <Header />
            {/* <AfterHeaderLinks section={section}/> */}
                <div className="single">
                    <div className="move_to_label">
                        <div className="label"><a>Кино</a></div>
                        <div className="label"><a>Концерты</a></div>
                        <div className="label"><a>Театр</a></div>
                        <div className="label"><a>Еда</a></div>
                        <div className="label"><a>Музеи</a></div>
                        <div className="label"><a>Сериалы</a></div>
                    </div>
                    <div className="main_single_topic">
                            <div className="single__name">{linkProps.name}</div>
                        <div className= "single__content">
                            <img className="single__image" src={linkProps.photo} alt={linkProps.name} />
                            <div className="single__contnet_valutions">
                                <div className="single__rating"> 
                                    <div className="single__contnet_naming"> Рейтинг: </div>
                                    {linkProps.rating}
                                </div>
                                {linkProps.year ? 
                                    <div className="single__year"> 
                                        <div className="single__contnet_naming"> Год:</div>
                                        {linkProps.year}
                                    </div> : <div></div>
                                }
                                {linkProps.genre ? 
                                    <div className="single__genre"> 
                                        <div className="single__contnet_naming"> Жанр: </div>
                                        {linkProps.genre}
                                    </div> : <div></div>
                                }
                                {linkProps.address ? 
                                    <div className="single__address"> 
                                        <div className="single__contnet_naming"> Адрес: </div>
                                        {linkProps.address}
                                    </div> : <div></div>
                                }
                                <div className="single__date"> 
                                    <div className="single__contnet_naming"> Дата: </div>
                                    {linkProps.date}
                                </div>
                                <div className="single__time"> 
                                    <div className="single__contnet_naming"> Время: </div>
                                    {linkProps.time}
                                </div>
                                <div className="single__country"> 
                                    <div className="single__contnet_naming"> Страна: </div>
                                    {}
                                </div>
                                <div className="single__starring">
                                    <div className="single__contnet_naming">В ролях:</div>
                                    {}
                                </div>
                                <div className="single__producer"> 
                                    <div className="single__contnet_naming">Продюсер:</div>
                                    {}
                                </div>
                                <div className="single__budjet"> 
                                    <div className="single__contnet_naming">Бюджет:</div>
                                    {}
                                </div>

                                <div className="single__contnet_press_star"> Поставьте оценку</div>
                
                            </div>
                            <div className="rating__field_block">
                                <fieldset className="rating__field_field">
                                    <input type="radio" id="star5" name="rating" value="5" />
                                        <label htmlFor="star5" title="Rocks!" onClick={handleClick}>
                                            stars
                                        </label>
                                    <input type="radio" id="star4" name="rating" value="4" />
                                        <label htmlFor="star4" title="Pretty good" onClick={handleClick}>
                                            stars
                                        </label>
                                    <input type="radio" id="star3" name="rating" value="3" />
                                        <label htmlFor="star3" title="Meh" onClick={handleClick}>
                                            stars
                                        </label>
                                    <input type="radio" id="star2" name="rating" value="2" />
                                        <label htmlFor="star2" title="Kinda bad" onClick={handleClick}>
                                            stars
                                        </label>
                                    <input type="radio" id="star1" name="rating" value="1" />
                                        <label htmlFor="star1" title="Sucks big time" onClick={handleClick}>
                                            star
                                        </label>
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
