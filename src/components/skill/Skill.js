import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {withStyles} from '@material-ui/core';

const styles = () => ({root: {}})

class Skill extends Component
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
                    Skill Component</h1>
            </div>
        )
    }
};

Skill.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Skill);