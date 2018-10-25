import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {withStyles} from '@material-ui/core';

import Video from "../../assets/video/video/video-2.mp4";
import NavbarComponent from "../../components/Navbar/Navbar.js";
import HeroContent from "./HeroContent";
const styles = () => ({root: {}})

class Hero extends Component
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

            <div className="hero-video">

                <video className="hero-video__content" autoPlay muted loop>
                    <source src={Video} type="video/mp4"/>
                    Your browser is not supported!

                </video>
                
                <HeroContent aboutScroll = {aboutScroll}/>
            </div>
        )
    }
};

Hero.propTypes = {
    classes: PropTypes.object.isRequired,
    aboutScroll:PropTypes.any.isRequired
};

export default withStyles(styles)(Hero);