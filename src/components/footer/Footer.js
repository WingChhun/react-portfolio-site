import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core';

import Grid from "@material-ui/core/Grid";

const styles = () => ({root: {}})

class Footer extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {};
    }

    render()
    {
        const {classNamees} = this.props;
        const ARROW = (
            <a href="#home" className="footer__arrow">
                <i className="fa fa-angle-double-up"></i>
            </a>
        );
        
        return (

            <footer className="footer">

                <div className="footer__container">

                    <a
                        target="blank"
                        href="https://www.linkedin.com/in/james-chhun-16b1b5120/"
                        className="footer__logo-img footer__logo-img--1">
                        <i className="fa fa-linkedin-square"></i>
                    </a>
                    <a
                        target="blank"
                        href="https://github.com/WingChhun"
                        className="footer__logo-img footer__logo-img--2">
                        <i className="fa fa-github-square"></i>
                    </a>
                    <a
                        target="blank"
                        href="https://codepen.io/WingChhun/"
                        className="footer__logo-img footer__logo-img--3">
                        <i className="fa fa-codepen"></i>
                    </a>
                    <a
                        target="blank"
                        href="https://www.instagram.com/wingchhun/"
                        className="footer__logo-img footer__logo-img--4">
                        <i className="fa fa-instagram"></i>
                    </a>

                    <p className="footer__copyright">Designed and Developed by James Chhun, me &copy; 2018</p>

                </div>

            </footer>
        )
    }
};

Footer.propTypes = {
    classNamees: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);