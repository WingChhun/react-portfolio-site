import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {withStyles} from '@material-ui/core';
import NavbarComponent from "../../components/Navbar/Navbar.js";
import HeroComponent from "../../components/Hero/Hero.js";
import HeroContent from "../../components/Hero/HeroContent.js";
import AboutComponent from "../../components/About/About.js";
import AboutCard from "../../components/About/AboutCard";
import ProjectComponent from "../../components/Project/Project.js";
import SkillComponent from "../../components/Skill/Skill.js";
import Footer from "../../components/Footer/Footer";
import Snackbar from '@material-ui/core/Snackbar';

const styles = () => ({
    root: {
        position: 'relative',
        zIndex: -100
    },
    snackbar: {
    
    
    },
    snackbarMessage: {

        fontSize: '1.6rem',
        fontWeight: '400',
        letterSpacing: '.05rem',
        padding: '2.25rem 1rem',
       
    }
})

class Landing extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            openSnackbar: false,
            vertical: 'bottom',
            horizontal: 'left',
            snackbarMessage: "This website is still a work in progress!"
        };
    }

    componentDidMount = () => {
        this.setState({openSnackbar: true});
    }

    handleClose = () => {
        this.setState({openSnackbar: false});
    }

    render()
    {
        const {classes} = this.props;
        const {openSnackbar, snackbarMessage, vertical, horizontal} = this.state;

        return (

            <section>

                <HeroComponent/>

                <AboutComponent/>

                <ProjectComponent/>
                <Footer/>

                <Snackbar
                    className={classes.snackbar}
                    anchorOrigin={{
                    vertical,
                    horizontal
                }}
                    open={openSnackbar}
                    autoHideDuration={5000}
                    onClose={this.handleClose}
                    ContentProps={{
                    'aria-describedby': 'message-id'
                }}
                    message={< span id = "message-id" className = {
                    classes.snackbarMessage
                } > {
                    snackbarMessage
                } < /span>}/>
            </section>

        )
    }
};

//$ Proptypes check
Landing.propTypes = {
    classes: PropTypes.object.isRequired

}

export default withStyles(styles)(Landing);