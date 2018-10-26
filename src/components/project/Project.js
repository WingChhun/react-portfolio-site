import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {withStyles} from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Grow from '@material-ui/core/Grow';
import Chip from '@material-ui/core/Chip';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Animated} from "react-animated-css";
import PROJECTS from "../../assets/portfolio";
import ProjectDialog from '../../components/Dialog/ProjectDialog';
import Zoom from '@material-ui/core/Zoom';
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
            fadeIn: false,
            grow:true,
            filterValue: 'All'
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

    //$ handleChange function for the filter tabs
    handleChange = (event, filterValue) => {

        const value = event.target.value

        this.setState({
            filterValue
        }, () => this.filterProjects());

    };

    //$ filter the projects displayed based on filtervalue in state
    filterProjects = () => {

        const {filterValue, projects} = this.state;

        let filteredProjects = projects;

        //! If all: return all projects
        if (filterValue === "All") {
            this.setState({filteredProjects});
            return;
        }

        //Note: Filter array based off element.tags(array[])
        filteredProjects = filteredProjects.filter(element => element.tags.includes(filterValue));

        this.setState({filteredProjects})
    }

    renderOverlay = (project) => {

        //TODO: Destructure project object

        //TODO: REnder
    }

    renderContent = () => {

        const {classes} = this.props;
        const {filteredProjects, indexSelected, openDialog, fadeIn , grow} = this.state;

        const projects = filteredProjects;

        //$ Create an array of grids based on projects
        const content = projects.map((project, index) => (

         
            <Grid
                key={`${project.name}_${index}`}
                className={classnames(classes.parentRelative, "project__overlay")}
                xs={12}
                sm={12}
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

                        <Grid className="project__overlay--caption-tags" container spacing ={0}>

                            {project.tags && project
                                .tags
                                .map((tag, index) => (
                                    <Grid xs={4} key={`${project}_${tag}_${index}`} sm ={4} md={3}>
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
        const {filterValue} = this.state;

        return (

            <div className={"project"}>

                <h2 className="project--header">
                    My
                    <span className="color-primary">Projects
                    </span>
                </h2>

                <p className="project--sub">Here's a few projects that I'm working on or have
                    completed. If you are interested in seeing more, checkout my
                    <a href="https://github.com/WingChhun" target="blank">
                        <em>
                            Github
                        </em>
                    </a>
                </p>
                <Paper className={classnames(classes.paper, "project__tabs")}>
                    <Grid container spacing={0} xs={12} justify={'center'}>

                        <Tabs
                            value={filterValue}
                            onChange={this.handleChange}
                            indicatorColor="secondary"
                            textColor="secondary"
                            centered>
                            <Tab label="All" value="All"/>
                            <Tab label="Javascript" value="Javascript"/>
                            <Tab label="React" value="React"/>
                            <Tab label="Redux" value="Redux"/>
                            <Tab label="Material UI" value="Material UI"/>
                        </Tabs>

                    </Grid>
                </Paper>

                <Paper className={classnames(classes.paper, "project__tabs")}>
                    <Grid container spacing={0} xs={12} justify={'center'}>

                        <Tabs
                            value={filterValue}
                            onChange={this.handleChange}
                            indicatorColor="secondary"
                            textColor="secondary"
                            centered>

                            <Tab label="NodeJS" value="NodeJS"/>
                            <Tab label="MongoDB" value="MongoDB"/>
                            <Tab label="PostgreSQL" value="PostgreSQL"/>
                            <Tab label="Bootstrap" value="Bootstrap"/>
                            <Tab label="SASS" value="SASS"/>

                        </Tabs>

                    </Grid>
                </Paper>

                <br/>

                <Animated animationIn = {'fadeIn'} animationOut ={'fadeOut'}        animationOutDelay={200}   animationInDelay={200}> 

                <Grid container spacing={0} xs ={12}>
              
{this.renderContent()}

                    <Grid xs={12}>
                        <a className="project__btn" href="https://github.com/WingChhun">Visit my Github
                            <i className="fa fa-2x fa-github"/></a>
                    </Grid>
                </Grid>
                
                </Animated>
            </div>

        )
    }
};

Project.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Project);