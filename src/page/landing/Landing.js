import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {withStyles} from '@material-ui/core';

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
        return (

            <div>
                <h1>
                    Landing Component</h1>
            </div>
        )
    }
};

export default withStyles(styles)(Landing);