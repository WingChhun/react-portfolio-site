import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import {autoPlay} from 'react-swipeable-views-utils';
import classNames from 'classnames';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';
import CloseIcon from '@material-ui/icons/Close';
import Tooltip from '@material-ui/core/Tooltip';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = theme => ({
    root: {
        maxWidth: '95%',
        flexGrow: 1,
        overflow: 'hidden'
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
        fontSize: '1.8rem',
        paddingLeft: '1rem',
        backgroundColor: theme.palette.background.default,
        overflow: 'hidden'
    },
    img: {
        height: '100%',
        display: 'block',
        maxWidth: '100%',
        overflow: 'hidden',
        width: '100%'
    },

    primary: {}
});

class StepperCarousel extends React.Component {

    constructor(props)
    {
        super(props);

        this.state = {
            activeStep: 0,
            project: props.project || {},
            carousel: props.project.carouselArr || []
        };
    }

    componentWillReceiveProps = props => {
        const {project} = props;

        if (project) {
            this.setState({
                project
            }, () => {
                this.setState({carousel: project.carouselArr});
            });
        }
    }
    handleNext = () => {
        const {activeStep} = this.state;

        this.setState({
            activeStep: activeStep + 1
        })

    };

    handleBack = () => {
        const {activeStep} = this.state;

        this.setState({
            activeStep: activeStep - 1
        })

    };

    handleStepChange = activeStep => {
        this.setState({activeStep});
    };

    render() {
        const {classes, theme, handleClose} = this.props;
        const {activeStep, project, carousel} = this.state;
        const maxSteps = carousel.length;

        return (
            <div className={classNames(classes.root, 'carousel')}>
                <Paper square elevation={0} className={classes.header}>
                    <h3 className={'carousel__label'}>{carousel[activeStep].label}</h3>

<Tooltip  title = {"Close dialog"}>
                    <CloseIcon className="carousel__close" onClick={handleClose}/>
                    </Tooltip>
                </Paper>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl'
                    ? 'x-reverse'
                    : 'x'}
                    index={activeStep}
                    onChangeIndex={this.handleStepChange}
                    enableMouseEvents>

                    {carousel.map((step, index) => (

                        <div key={`${step.label}_${index}`}>
                            {Math.abs(activeStep - index) <= 2
                                ? (<img className={classes.img} src={step.imgPath} alt={step.label}/>)
                                : null}

                        </div>

                    ))}
                </AutoPlaySwipeableViews>

                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    className={classes.mobileStepper}
                    nextButton={<Button size = "small" onClick = {
                    this.handleNext
                }
                disabled = {
                    activeStep === maxSteps - 1
                } > {
                    theme.direction === 'rtl'
                        ? <ArrowBack/>
                        : <ArrowForward/>
                } </Button>}
                    backButton={<Button size = "small" onClick = {
                    this.handleBack
                }
                disabled = {
                    activeStep === 0
                } > {
                    theme.direction === 'rtl'
                        ? <ArrowForward/>
                        : <ArrowBack/>
                } </Button>}/>
            </div>
        );
    }
}

StepperCarousel.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    project: PropTypes.object.isRequired,
    handleClose: PropTypes.func.isRequired
};

export default withStyles(styles, {withTheme: true})(StepperCarousel);