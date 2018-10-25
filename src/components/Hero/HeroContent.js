import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {withStyles} from '@material-ui/core';
import scrollToComponent from 'react-scroll-to-component';
const styles = () => ({root: {}})

class HeroContent extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {};
    }

    render()
    {
        const {classes, aboutScroll} = this.props;

        return (

            <div className="hero__content">
                <h1>
                    <strong>Hello, I'm
                        <span>James Chhun</span>
                    </strong>
                </h1>
                <h2>A Web Developer</h2>

                <button
                    className="hero__content-btn"
                    onClick=
                    {() => scrollToComponent(aboutScroll, { offset: 0, align: 'middle', duration: 500, ease:'inExpo'})}>View Work
                </button>
            </div>
        )
    }
};

HeroContent.propTypes = {
    classes: PropTypes.object.isRequired,
    aboutScroll: PropTypes.any.isRequired
};

export default withStyles(styles)(HeroContent);