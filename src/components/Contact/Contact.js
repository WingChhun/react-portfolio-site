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

            <section classNames={classes.root}>
                <Grid className="contact" container spacing={8} xs={12}>

                    <div className="contact__container">
                        <h2>Have a question?</h2>

                        <p>
                            Feel free to send me an email at

                            <a href="mailto:capt.wing.chhun@gmail.com">
                                capt.wing.chhun@gmail.com</a>
                        </p>
                    </div>

                </Grid>
            </section>

        )
    }
}

export default withStyles(styles)(Contact);