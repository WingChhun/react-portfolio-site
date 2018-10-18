import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {withStyles} from '@material-ui/core';

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

            <div>
                <h1>
                    Hero Component</h1>
            </div>
        )
    }
};

Hero.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Hero);