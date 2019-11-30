import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cinema from './Cinema';
import Theatre from './Theatre';
import Concert from './Concert';
import Series from './Series';
import Museum from './Museum';
import Food from './Food';
import { increment, addComment, removeComment } from '../../store/Main/Actions';
import { bindActionCreators } from 'redux';
import Header from '../Headers/Header';
import Footer from '../Footer/Footer';
import AfterHeaderLinks from '../Headers/AfterHeaderLinks';

const NewMainContainer = (props) => {
    return (
        <div>
            <Header />
            <AfterHeaderLinks section={props.cinema} />
            <Cinema cinema={props.cinema} />
            <Theatre theatre={props.theatre} />
            <Concert concert={props.concert} />
            <Series series={props.series} />
            <Museum museum={props.museum} />
            <Food food={props.food} />
            <Footer />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        cinema: state.newMain,
        theatre: state.newMain,
        concert: state.newMain,
        series: state.newMain,
        museum: state.newMain,
        food: state.newMain
    };
};

const mapDispatchProps = dispatch => { 
    return {
        increment: bindActionCreators(increment, dispatch),
        addComment: bindActionCreators(addComment, dispatch),
        removeComment: bindActionCreators(removeComment, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchProps)(NewMainContainer);