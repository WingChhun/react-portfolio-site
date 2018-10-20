import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {withStyles} from '@material-ui/core';

// ! - Import Components
import NavbarComponent from "../../components/Navbar/Navbar.js";
import HeroComponent from "../../components/Hero/Hero.js";
import HeroContent from "../../components/Hero/HeroContent.js";
import AboutComponent from "../../components/About/About.js";
import AboutCard from "../../components/About/AboutCard";
import ProjectComponent from "../../components/Project/Project.js";
import SkillComponent from "../../components/Skill/Skill.js";
import Footer from "../../components/Footer/Footer";

const styles = () => ({
    root: {
        position: 'relative',
        zIndex: -100
    }
})

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

            <section>

                <HeroComponent/>

                <AboutComponent/>

                <ProjectComponent/>
                <Footer/>
            </section>

        )
    }
};

export default withStyles(styles)(Landing);