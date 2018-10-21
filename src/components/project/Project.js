import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {withStyles} from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Fade from '@material-ui/core/Fade';
import Chip from '@material-ui/core/Chip';
import {Animated} from "react-animated-css";
import PROJECTS from "../../assets/portfolio";
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
            hoverTrue: false,
            indexSelected: -1,
            fadeIn: false
        };
    }

    handleMouseOver = index => (event) => {

        event.stopPropagation();
        this.setState({fadeIn: true});
        //this.setState({fadeIn: true})

        //TODO: event.currentTarget.dataset.index = 2

    }

    handleMouseLeave = index => (event) => {

        event.stopPropagation();

        this.setState({fadeIn: false})
    }

    handleOpen = index => (event) => {

        this.setState({openDialog: true, indexSelected: index});
    }

    handleClose = () => {
        this.setState({openDialog: false, indexSelected: -1});
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
        const {projects, filteredProjects, indexSelected, openDialog, fadeIn} = this.state;

        //$ Create an array of grids based on projects
        const content = projects.map((project, index) => (

            <Grid
                key={`${project.name}_${index}`}
                className={classnames(classes.parentRelative, "project__overlay")}
               
                xs={12}
                sm={6}
                md={4}
               
                data-index={index}
                onMouseOver={this.handleMouseOver(index)}
                onMouseLeave={this.handleMouseLeave(index)}>

                <img src={project.img} rel ={project.imageRel}/>

                <Animated
                    animationIn="fadeIn"
                    animationOutDelay={200}
                    animationInDelay={200}
                    animationOut="fadeOut"
                    isVisible={true}>
                    <div class="project__overlay--caption">

                        <h3>{project.name}</h3>

                        <Grid className="project__overlay--caption-tags" container spacing ={4}>

                          
                                {project.tags && project
                                    .tags
                                    .map((tag, index) => (
                                        <Grid xs={12} key={`${project}_${tag}_${index}`} sm ={6} md={4}>
                                            <p>{tag}</p>
                                        </Grid>
                                    ))}
                       
                        </Grid>

                        <a onClick={this.handleOpen(index)}>Learn More</a>
                        <ProjectDialog
                            project={project}
                            index={index}
                            indexSelected={indexSelected}
                            open={this.state.openDialog}
                            onClose={this.handleClose}/>
                    </div>
                </Animated>
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

                <p className="project--sub">Here's a few projects that I'm working on or have
                    completed. If you are interested in seeing more, checkout my
                    <a href="https://github.com/WingChhun" target="blank">
                        <em>
                            Github
                        </em>
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