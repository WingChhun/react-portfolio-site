import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {withStyles} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

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

            <div className="about">

                <div className="about__container">
                    <h2>
                        <strong>Hey thanks for visiting. Let me introduce myself.
                        </strong>
                    </h2>
                    <p>Reprehenderit est do incididunt ea veniam Lorem mollit nulla. Consequat nisi
                        deserunt pariatur ea incididunt anim laborum. Qui amet elit eiusmod ipsum
                        eiusmod voluptate aute Lorem sint cillum aute ut esse laborum. Non dolore culpa
                        nisi in sit tempor tempor tempor nulla sunt eu. Qui pariatur veniam amet nisi
                        est sint id ad elit nisi labore exercitation dolore. Est pariatur aute do amet
                        commodo anim consectetur cillum.</p>
                </div>
            </div>
        )
    }
};

About.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);