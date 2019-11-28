import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Links from './Links';

export default class Header extends Component {
    render() {

        const links = [
            {
                name: "Зарегистрироваться",
                to: '/registration',
                id: 1
            }, 
            {
                name: "Войти",
                to: '/',
                id: 2
            }
        ]; 

        return (
            <div>
                <header className="header"> 
                    <div className="container h-flex">
                        <Link to='/NewMain' className="links__menu">
                            KalugaAdvisor
                        </Link>
                        <nav className="links">
                            <Links links={links}/>
                        </nav>
                    </div>
                </header>
            </div>
        ); 
    }
}