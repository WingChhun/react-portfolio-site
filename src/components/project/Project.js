import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {withStyles} from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Fade from '@material-ui/core/Fade';
import PROJECTS from "../../assets/portfolio";
import Chip from '@material-ui/core/Chip';
import ProjectDialog from '../../components/Dialog/ProjectDialog';

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
            projects: PROJECTS,
            filteredProjects: PROJECTS || [],
            openDialog: false,
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

    handleOpen = () => {
        this.setState({openDialog: true});
    }

    handleClose = () => {
        this.setState({openDialog: false});
    }

    handleChange = field => event => {

        const value = event
            .target
            .value
            .trim();

        //TODO: Filter contents for projects to be displayed

        switch (field) {

            default:
                break;
        }

    }

    renderOverlay = (project) => {

        //TODO: Destructure project object

        //TODO: REnder
    }

    renderContent = () => {

        const {classes} = this.props;
        const {projects, filteredProjects} = this.state;
        const {openDialog} = this.state;

        const content = projects.map((project, index) => (

            <Grid
                key={`${project.name}_${index}`}
                className={classnames(classes.parentRelative, "project__overlay")}
                xs={6}
                sm={6}
                md={4}
                data-index={index}>

                <img src={project.img} rel ={project.imageRel}/>

                <div class="project__overlay--caption">

                    <h3>{project.name}</h3>

                    <Grid className="project__overlay--caption-tags" container spacing ={8}>

                        {project.tags && project
                            .tags
                            .map((tag, index) => (
                                <Grid xs={12} key={`${project}_${tag}_${index}`} sm ={4} md={3}>
                                    <p>{tag}</p>
                                </Grid>
                            ))}

                    </Grid>

                    <a onClick={this.handleOpen}>Learn More</a>
                    <ProjectDialog
                        indexOpen={index}
                        open={this.state.openDialog}
                        onClose={this.handleClose}/>
                </div>

            </Grid>
        )); //! End Map

        //!Return rendered content
        return content;

    }

    render()
    {
        const {classes} = this.props;

        return (

            <div className={"project"}>

                <h2 className="project--header">
                    My Projects
                </h2>

                <p className="project--sub">Here's a few I'm proud enough to share. If
                    interested in seeing more, checkout my
                    <a href="https://github.com/WingChhun" target="blank">
                        Github
                    </a>
                </p>

                <Grid container spacing={0} xs ={12}>

                    {this.renderContent()}
               
                </Grid>
            </div>

        )
    }
};

Project.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Project);