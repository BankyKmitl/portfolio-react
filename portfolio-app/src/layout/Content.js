import React, { Component } from 'react';
import Router from '../layout/Router'
import './Content.css';

class Content extends Component {
    render() {
        return (
            <div className="Content">
            <div></div>
                <Router />
            <div></div>
            </div>
        );
    }
}

export default Content