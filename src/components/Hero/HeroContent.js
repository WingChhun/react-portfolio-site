import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {withStyles} from '@material-ui/core';

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
        const {classes} = this.props;

        return (

            <div className="hero__content">
                <h1>Hello, I'm
                    <span>James Chhun</span>
                </h1>
                <h2>A Web Developer</h2>

                <button className="hero__content-btn">View Work
                </button>
            </div>
        )
    }
};

HeroContent.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HeroContent);