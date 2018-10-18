import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {withStyles} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const styles = () => ({root: {}})

class AboutCard extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {

            assets: {}

        };
    }

    render()
    {
        const {classes} = this.props;

        return (

            <div className="aboutCard">

                <h1>About card</h1>
                <div className="aboutCard__container">

                    <h1>
                        Card Container</h1>

                </div>

            </div>
        )
    }
};

AboutCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AboutCard);