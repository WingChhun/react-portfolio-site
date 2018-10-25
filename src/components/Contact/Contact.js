import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';

const styles = () => ({root: {}});
class Contact extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {

        const {classes} = this.props;

        return (

         <div>

         </div>

        )
    }
}

export default withStyles(styles)(Contact);