import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {withStyles} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import logos from "../../assets/skills";
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

    componentWillMount = () => {

        const assets = {
            ...this.state.assets,
            logos

        }
        this.setState({assets});
    }

    render()
    {
        const {classes} = this.props;

        return (

            <div className="aboutCard">

                <div className="aboutCard__container">

                    <h2>Here are some of the tools and technologies I use to build great web
                        applications.
                    </h2>

                    <div className="aboutCard__row">
                        <Grid container spacing={16}>

                            <div className="aboutCard__row--header">
                                <h3>Front-End</h3>
                            </div>
                            <Grid xs={12} md={3}>
                                <div className="aboutCard__row--item"></div>
                            </Grid>
                        </Grid>

                    </div>
                </div>

            </div>
        )
    }
};

AboutCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AboutCard);