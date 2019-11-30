import React from 'react';
import { Link } from 'react-router-dom';
import { userStatus } from '../../../Data/userStatus';

const Header = () => {
    const exit = () => {
        userStatus[0] = {userStatus: false};
        Array.from(document.getElementsByClassName("clear_input")).forEach((item) => {
            item.value = '';
        });
    };

    return (
        <div className="header_sticky">
            <header className="header"> 
                <div className="posabs">
                    <Link to='/NewMain' className="name_of_ours">
                        KalugaAdvisor
                    </Link>

                    <form className="search">
                        <input placeholder="Искать здесь..." />
                        <button>Поиск</button>
                    </form>
                
                    <div className="name_of_person">Nikikwiki</div>
                    <div className="person_icon">
                        <img 
                            src="https://ih0.redbubble.net/image.421394106.1462/raf,750x1000,075,t,101010:01c5ca27c6.u1.jpg" 
                            alt="Скелет" 
                        />
                    </div>
                    <nav className="exit">
                        <Link onClick={exit} to="/" className="exit__link"> 
                            Выйти
                        </Link>
                    </nav>
                </div>
            </header>
        </div>
    ); 
}

export default Header;