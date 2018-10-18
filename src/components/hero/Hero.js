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
        const {classes} = this.props;

        return (

            <div class="hero-video">

                <video class="hero-video__content" autoPlay muted loop>
                    <source src={Video} type="video/mp4"/>
                    Your browser is not supported!

                </video>
                
                <HeroContent/>
            </div>
        )
    }
};

Hero.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Hero);