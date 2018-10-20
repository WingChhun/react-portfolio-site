import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {withStyles} from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

import PROJECTS from "../../assets/portfolio";

const styles = () => ({
    root: {},
    parentRelative: {
        position: 'relative',

        '&:hover': {}
    }
})

class Project extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            Projects: PROJECTS,

            hoverTrue: false

        };
    }

    handleMouseOver = (event) => {
        this.setState({hoverTrue: true})

        //TODO: event.currentTarget.dataset.index = 2

    }

    handleMouseLeave = () => {
        this.setState({hoverTrue: false})
    }

    render()
    {
        const {classes} = this.props;

        return (

            <div className={"project"}>

                <h2>
                    My Projects
                </h2>

                <p>Here's a few I'm proud enough to share. If interested in seeing more,
                    checkout my
                    <a href="https://github.com/WingChhun" target="blank">
                        Github
                    </a>
                </p>
                <Grid container spacing={0}>

                    <Grid
                        className={classnames(classes.parentRelative, "project__overlay")}
                        xs={6}
                        sm={6}
                        md={4}
                        onMouseOver={this.handleMouseOver}
                        onMouseLeave={this.handleMouseLeave}
                        index
                        ={1}
                        data-index={2}>

                        <img
                            src="https://images.unsplash.com/photo-1539934675566-f6889aa8f6a2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=148236f5e96a5fc0076a4d13128751bd&auto=format&fit=crop&w=500&q=60"/>

                        <div class="project__overlay--caption">

<h3>React Robofriends
</h3>

</div>

                    </Grid>
                    <Grid className={classes.parentRelative} xs={6} sm={6} md={4}>
                        <img
                            src="https://images.unsplash.com/photo-1539934675566-f6889aa8f6a2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=148236f5e96a5fc0076a4d13128751bd&auto=format&fit=crop&w=500&q=60"/>
                    </Grid>
                    <Grid className={classes.parentRelative} xs={6} sm={6} md={4}>
                        <img
                            src="https://images.unsplash.com/photo-1539934675566-f6889aa8f6a2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=148236f5e96a5fc0076a4d13128751bd&auto=format&fit=crop&w=500&q=60"/>
                    </Grid>
                    <Grid className={classes.parentRelative} xs={6} sm={6} md={4}>
                        <img
                            src="https://images.unsplash.com/photo-1539934675566-f6889aa8f6a2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=148236f5e96a5fc0076a4d13128751bd&auto=format&fit=crop&w=500&q=60"/>
                    </Grid>
                    <Grid className={classes.parentRelative} xs={6} sm={6} md={4}>
                        <img
                            src="https://images.unsplash.com/photo-1539934675566-f6889aa8f6a2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=148236f5e96a5fc0076a4d13128751bd&auto=format&fit=crop&w=500&q=60"/>
                    </Grid>
                    <Grid className={classes.parentRelative} xs={6} sm={6} md={4}>
                        <img
                            src="https://images.unsplash.com/photo-1539934675566-f6889aa8f6a2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=148236f5e96a5fc0076a4d13128751bd&auto=format&fit=crop&w=500&q=60"/>
                    </Grid>

                </Grid>
            </div>

        )
    }
};

Project.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Project);