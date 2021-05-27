import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core';
import NavbarComponent from 'Components/navbar/Navbar.js';
import HeroComponent from 'Components/Hero/Hero.js';
import HeroContent from 'Components/Hero/HeroContent.js';
import AboutComponent from 'Components/About/About.js';
import AboutCard from 'Components/About/AboutCard';
import ProjectComponent from 'Components/project/Project.js';
import SkillComponent from 'Components/skill/Skill.js';
import Footer from 'Components/footer/Footer';
import Snackbar from '@material-ui/core/Snackbar';
import Contact from 'Components/Contact/Contact';
const styles = () => ({
  root: {
    position: 'relative',
    zIndex: -100,
  },
  snackbar: {},
  snackbarMessage: {
    fontSize: '1.6rem',
    fontWeight: '400',
    letterSpacing: '.05rem',
    padding: '2.25rem 1rem',
  },
});

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openSnackbar: false,
      vertical: 'bottom',
      horizontal: 'centerb',
      snackbarMessage: 'This website is still a work in progress!',
    };
  }

  componentDidMount = () => {
    this.setState({ openSnackbar: true });
  };

  handleClose = () => {
    this.setState({ openSnackbar: false });
  };

  render() {
    const { classes } = this.props;
    const { openSnackbar, snackbarMessage, vertical, horizontal } = this.state;

    return (
      <section>
        <HeroComponent
          ref={(hero) => {
            this.hero = hero;
          }}
          aboutScroll={this.state.aboutRef}
        />

        <AboutComponent
          ref={(about) => {
            this.about = about;
          }}
          setAboutRef={(about) => {
            this.setState({ aboutRef: about });
          }}
        />

        <ProjectComponent />

        <Contact />

        <Footer heroScroll={this.hero} />

        <Snackbar
          className={classes.snackbar}
          anchorOrigin={{
            vertical,
            horizontal,
          }}
          open={openSnackbar}
          autoHideDuration={5000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={
            <span id='message-id' className={classes.snackbarMessage}>
              {' '}
              {snackbarMessage}{' '}
            </span>
          }
        />
      </section>
    );
  }
}

//$ Proptypes check
Landing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);
