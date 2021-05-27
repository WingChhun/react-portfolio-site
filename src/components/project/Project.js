import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Animated } from 'react-animated-css';
import PROJECTS from 'Assets/portfolio';
import ProjectDialog from 'Components/Dialog/ProjectDialog';
import {
  MERN,
  JAVASCRIPT,
  REACT,
  MATERIALUI,
  NODEJS,
  MONGODB,
  POSTGRESQL,
  BOOTSTRAP,
} from 'Assets/portfolio/constants';

const ALL = 'All';
const tabValues = [
  ALL,
  MERN,
  JAVASCRIPT,
  REACT,
  MATERIALUI,
  NODEJS,
  MONGODB,
  POSTGRESQL,
  BOOTSTRAP,
];

const styles = () => ({
  root: {},

  parentRelative: {
    position: 'relative',

    '&:hover': {},
  },
});

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: PROJECTS,
      filteredProjects: PROJECTS || [],
      openDialog: false,
      hoverTrue: false,
      indexSelected: -1,
      fadeIn: false,

      filterValue: 'All',
    };
  }

  handleMouseOver = (index) => (event) => {
    event.stopPropagation();
    this.setState({ fadeIn: true });
    //this.setState({fadeIn: true})

    //TODO: event.currentTarget.dataset.index = 2
  };

  handleMouseLeave = (index) => (event) => {
    event.stopPropagation();

    this.setState({ fadeIn: false });
  };

  handleOpen = (index) => (event) => {
    this.setState({ openDialog: true, indexSelected: index });
  };

  handleClose = () => {
    this.setState({ openDialog: false, indexSelected: -1 });
  };

  //$ handleChange function for the filter tabs
  handleChange = (event, filterValue) => {
    this.setState(
      {
        filterValue,
      },
      () => this.filterProjects()
    );
  };

  //$ filter the projects displayed based on filtervalue in state
  filterProjects = () => {
    const { filterValue, projects } = this.state;

    let filteredProjects = projects;

    switch (filterValue) {
      case ALL:
        //! If all: return all projects
        this.setState({ filteredProjects });
        return;

      default:
        //Note: Filter array based off element.tags(array[])
        filteredProjects = filteredProjects.filter((element) => {
          if (
            filterValue === MONGODB ||
            filterValue === NODEJS ||
            filterValue === REACT ||
            filterValue === JAVASCRIPT
          ) {
            return (
              element.tags.includes(filterValue) || element.tags.includes(MERN)
            );
          } else {
            return element.tags.includes(filterValue);
          }
        });

        this.setState({ filteredProjects });
        return;
    }
  };

  renderOverlay = (project) => {
    //TODO: Destructure project object
    //TODO: REnder
  };

  renderContent = () => {
    const { classes } = this.props;
    const {
      filteredProjects,
      fadeIn,
      indexSelected,
      openDialog,
      filterValue,
    } = this.state;

    const projects = filteredProjects;

    if (projects.length === 0) {
      const empty = (
        <Grid justify={'center'} xs={12}>
          <h2>
            No Projects with
            <span className='color-primary'>{filterValue}</span>
            used!
          </h2>
        </Grid>
      );

      return empty;
    }

    //$ Create an array of grids based on projects
    const content = projects.map((project, index) => (
      <Grid
        key={`${project.name}_${index}`}
        className={classnames(classes.parentRelative, 'project__overlay')}
        xs={12}
        sm={12}
        md={4}
        data-index={index}
        onMouseOver={this.handleMouseOver(index)}
        onMouseLeave={this.handleMouseLeave(index)}
      >
        <img src={project.img} alt={project.imageRel} />

        <Animated
          animationIn='fadeIn'
          animationOutDelay={200}
          animationInDelay={200}
          animationOut='fadeOut'
          isVisible={true}
        >
          <div class='project__overlay--caption'>
            <h3>{project.name}</h3>

            <Grid
              className='project__overlay--caption-tags'
              container
              spacing={0}
            >
              {project.tags &&
                project.tags.map((tag, index) => (
                  <Grid xs={4} key={`${project}_${tag}_${index}`} sm={4} md={3}>
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
              onClose={this.handleClose}
            />
          </div>
        </Animated>
      </Grid>
    )); //! End Map

    //!Return rendered content

    return content;
  };

  render() {
    const { classes } = this.props;
    const { filterValue } = this.state;

    return (
      <div className={'project'}>
        <h2 className='project--header'>
          My
          <span className='color-primary'>Projects</span>
        </h2>

        <p className='project--sub'>
          Here's a few projects that I'm working on or have completed. If you
          are interested in seeing more, checkout my
          <a href='https://github.com/WingChhun' target='blank'>
            <em>Github</em>
          </a>
        </p>
        <Paper className={classnames(classes.paper, 'project__tabs')}>
          <Grid container spacing={0} xs={12} justify={'center'}>
            <Tabs
              value={filterValue}
              onChange={this.handleChange}
              indicatorColor='secondary'
              textColor='secondary'
              centered
              fullWidth
            >
              <Tab label='All' value='All' />
            </Tabs>

            <Tabs
              value={filterValue}
              onChange={this.handleChange}
              indicatorColor='secondary'
              textColor='secondary'
              centered
              fullWidth
            >
              <Tab label='MERN' value='MERN' />

              <Tab label='Javascript' value='Javascript' />
              <Tab label='React' value='React' />

              <Tab label='Material UI' value='Material UI' />
            </Tabs>
          </Grid>
        </Paper>

        <Paper className={classnames(classes.paper, 'project__tabs')}>
          <Grid container spacing={0} xs={12} justify={'center'}>
            <Tabs
              value={filterValue}
              onChange={this.handleChange}
              indicatorColor='secondary'
              textColor='secondary'
              centered
              fullWidth
            >
              <Tab label='NodeJS' value='NodeJS' />
              <Tab label='MongoDB' value='MongoDB' />
              <Tab label='PostgreSQL' value='PostgreSQL' disabled />
              <Tab label='Bootstrap' value='Bootstrap' />
            </Tabs>
          </Grid>
        </Paper>

        <br />

        <Animated
          animationIn={'fadeIn'}
          animationOut={'fadeOut'}
          animationOutDelay={200}
          animationInDelay={200}
        >
          <Grid container className={'project__container'} spacing={0} xs={12}>
            {this.renderContent()}
          </Grid>
          <Grid xs={12}>
            <a className='project__btn' href='https://github.com/WingChhun'>
              Visit my Github
              <i className='fa fa-2x fa-github' />
            </a>
          </Grid>
        </Animated>
      </div>
    );
  }
}

Project.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Project);
