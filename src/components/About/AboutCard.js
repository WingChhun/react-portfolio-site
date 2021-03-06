import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import logos from '../../assets/skills';
import Divider from '@material-ui/core/Divider';
const styles = () => ({
  root: {},
  divider: {
    margin: '1rem  auto 6rem',
    width: '80%'
  }
});

class AboutCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      assets: {}
    };
  }

  /*
@function:componentWIllMount()
@purpose: Create array of data in state to map over and display
    */
  componentDidMount = () => {
    this.setState({
      ...logos
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className='aboutCard'>
        <div className='aboutCard__container'>
          <p>
            Here are some of the tools and technologies I use to build great web
            applications. Currently I have been breathing Javascript and
            exhaling all things related to
            <span className='color-primary'>React</span>
            and
            <span className='color-primary'>Redux</span>
            primarily utilizing the
            <span className='color-primary'>MERN Stack</span>.
          </p>

          <br />
          <br />
          <Divider className={classes.divider} inset light />
          <div className='aboutCard__row'>
            <Grid container spacing={0}>
              <Grid xs={12} sm={4} md={4}>
                <div className='aboutCard__col'>
                  <div className='aboutCard__col--header'>
                    <i className='fa fa-code fa-2x' />
                    <h3>Front-End Development</h3>
                  </div>

                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>SASS</li>
                    <li>Javascript</li>
                  </ul>
                </div>
              </Grid>
              <Grid xs={12} sm={4} md={4}>
                <div className='aboutCard__col'>
                  <div className='aboutCard__col--header'>
                    <i className='fa fa-database fa-2x' />
                    <h3>Back-End Development</h3>
                  </div>
                  <ul>
                    <li>Node.js</li>
                    <li>Expresss.js</li>

                    <li>MongoDB</li>

                    <li>PostgreSQL</li>
                  </ul>
                </div>
              </Grid>
              <Grid xs={12} sm={4} md={4}>
                <div className='aboutCard__col'>
                  <div className='aboutCard__col--header'>
                    <i className='fa fa-archive fa-2x' />
                    <h3>Other</h3>
                  </div>
                  <ul>
                    <li>Agile</li>
                    <li>Git</li>
                    <li>Github</li>

                    <li>Visual Studio Code</li>
                    <li>Webstorm</li>
                  </ul>
                </div>
              </Grid>
            </Grid>

            <Grid container spacing={0}>
              <Grid xs={12} sm={4} md={4}>
                <div className='aboutCard__col'>
                  <h3>Libaries / Frameworks:</h3>

                  <ul>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Material UI</li>
                    <li>Bootstrap</li>
                    <li>jQuery</li>
                  </ul>
                </div>
              </Grid>
              <Grid xs={12} sm={4} md={4}>
                <div className='aboutCard__col'>
                  <h3>Tools I Use:</h3>

                  <ul>
                    <li>Postman</li>
                    <li>Robo3T</li>
                    <li>Psequel</li>
                  </ul>
                </div>
              </Grid>
              <Grid xs={12} sm={4} md={4}>
                <div className='aboutCard__col'>
                  <h3>Testing & Notable:</h3>
                  <ul>
                    <li>Jest </li>
                    <li>Enzyme</li>
                    <li>Mocha</li>
                    <li>Chai</li>
                    <li>Heroku</li>
                  </ul>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}
AboutCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AboutCard);
