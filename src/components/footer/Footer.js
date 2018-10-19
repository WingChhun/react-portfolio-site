import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {withStyles} from '@material-ui/core';
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
        const {classes} = this.props;

        return (

            <footer class="footer">
            <a href="#home" class="footer__arrow">
                <i class="fa fa-angle-double-up"></i>
            </a>
            <div class="footer__container">
    
                <a target="blank" href="https://www.linkedin.com/in/james-chhun-16b1b5120/" class="footer__logo-img footer__logo-img--1">
                    <i class="fa fa-linkedin-square"></i>
                </a>
                <a target="blank" href="https://github.com/WingChhun" class="footer__logo-img footer__logo-img--2">
                    <i class="fa fa-github-square"></i>
                </a>
                <a target="blank" href="https://codepen.io/WingChhun/" class="footer__logo-img footer__logo-img--3">
                    <i class="fa fa-codepen"></i>
                </a>
                <a target="blank" href="https://www.instagram.com/wingchhun_codes/" class="footer__logo-img footer__logo-img--4">
                    <i class="fa fa-instagram"></i>
                </a>
    
                <p class="footer__copyright">Designed and Developed by James Chhun, me &copy; 2018</p>
    
            </div>
            
    
        </footer>
        )
    }
};

Footer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);