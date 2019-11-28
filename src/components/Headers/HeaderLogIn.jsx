import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Links from './Links';
import { userStatus } from '../../../Data/userStatus';

export default class HeaderLogIn extends Component {
    render() {

        const links = [
            {
                name: "Лента",
                to: '/tape',
                id: 1
            }, 
            {
                name: "Профиль",
                to: '/profile',
                id: 2
            }, 
            {
                name: "Выйти",
                to: '/',
                click: function() {
                    userStatus[0] = {userStatus: false};
                    Array.from(document.getElementsByClassName("clear_input")).forEach((item) => {
                        item.value = ''; 
                    });
                },
                id: 3
            },
            {
                name: "NewMain",
                to: '/NewMain',
                id: 3
            }
        ]; 

        return (
            <div>
                <header> 
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