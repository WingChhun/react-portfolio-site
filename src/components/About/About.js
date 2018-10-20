import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {withStyles} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AboutCard from "./AboutCard";
const styles = () => ({root: {}})

class About extends Component
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