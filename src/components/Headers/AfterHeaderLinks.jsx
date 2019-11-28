import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AfterHeaderLinks extends Component {
    render() {
        return (
            <div>
                <div className="move_to_label">
                    <div className="label"><Link to="/">Кино</Link></div>
                    <div className="label"><Link to="/">Концерты</Link></div>
                    <div className="label"><Link to="/">Театр</Link></div>
                    <div className="label"><Link to="/">Еда</Link></div>
                    <div className="label"><Link to="/">Музеи</Link></div>
                    <div className="label"><Link to="/">Сериалы</Link></div>
                </div>
            </div>
        );
    }
}