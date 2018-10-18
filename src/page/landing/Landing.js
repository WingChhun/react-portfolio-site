import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {withStyles} from '@material-ui/core';

// ! - Import Components
import NavbarComponent from "../../components/Navbar/Navbar.js";
import HeroComponent from "../../components/Hero/Hero.js";
import HeroContent from "../../components/Hero/HeroContent.js";
import AboutComponent from "../../components/About/About.js";
import ProjectComponent from "../../components/Project/Project.js";
import SkillComponent from "../../components/Skill/Skill.js";
import FooterComponent from "../../components/Footer/Footer.js";

const styles = () => ({root: {}})

class Landing extends Component
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

            <div className={classes.root}>

                <HeroComponent/>

                <AboutComponent/>

            </div>

        )
    }
};

export default withStyles(styles)(Landing);