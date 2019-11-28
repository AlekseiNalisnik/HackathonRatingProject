import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cinema from './Cinema';
import Theatre from './Theatre';
import Concert from './Concert';
import Event from './Event';
import { increment, addComment, removeComment } from '../../store/Main/Actions';
import { bindActionCreators } from 'redux';
import HeaderLogin from '../Headers/HeaderLogin';
import Header from '../Headers/Header';
import Footer from '../Footer/Footer';
import AfterHeaderLinks from '../Headers/AfterHeaderLinks';

class NewMainContainer extends Component {
    render() {
        return (
            <div>
                {/* <HeaderLogin /> */}
                <Header />
                <AfterHeaderLinks />
                <Cinema cinema={this.props.cinema} />
                {/* <Theatre theatre={this.props.theatre} />
                <Concert concert={this.props.concert} />
                <Event event={this.props.event} /> */}
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cinema: state.newMain,
        theatre: state.newMain,
        concert: state.newMain,
        event: state.newMain,
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