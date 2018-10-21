import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {withStyles} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import RESUME from "../../assets/portfolio/JamesChhun_Resume_pdfForm.pdf";
import Snackbar from "@material-ui/core/Snackbar";
import AboutCard from "./AboutCard";
const styles = () => ({

    root: {},

    grid: {
        margin: '0 auto'
    },

    button: {
        padding: '.3rem .5rem'
    }
})

class About extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            openSnackbar:false,
            vertical:"bottom",
            horizontal:'center'
        };
    }

    handleOpen = () =>
    {
        this.setState({openSnackbar:true});
    }

    handleClose = () =>
    {
        this.setState({openSnackbar:false})
    }
    ;
    render()
    {
        const {classes} = this.props;
const {vertical,horizontal, openSnackbar} = this.state;
const MESSAGE = (<span> Download started </span>)
        return (

            <div>
                <div className="about">
                    <div className="about__container">

                        <h2>
                            <strong>Hey thanks for visiting. Let me introduce myself.
                            </strong>
                        </h2>
                        <p>
                            It's been nearly two years since I've started this journey in this industry. I
                            have been fortunate to have gained some experience interning under some of the
                            best developer minds for a brief period of time. This industry has always
                            excited me, the thought of having experienced working / working in an industry
                            that does not allow you to stop learning is an exciting and contagious feeling.
                            I take this to heart, I prefer to be in positions where
                            <em>I am not the biggest fish in the pond</em>, persay. Always trying to pick the brains. of everyone around me.</p>

                        <a href={RESUME}  download onClick = {this.handleOpen}>
                            <Button className ="about__btn--resume">
                              Resume
                              <i class="fa fa-download"></i>
                            </Button>
                        </a>
                        <Snackbar className = {classes.snackbar} anchorOrigin ={{vertical,horizontal}} open = {openSnackbar} autoHideDuration={4000} onClose = {this.handleClose} message = {MESSAGE}/>
                    </div>
                </div>

                <AboutCard/>

            </div>

        )
    }
};

About.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);