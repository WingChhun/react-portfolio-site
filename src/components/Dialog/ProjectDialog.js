import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';
import StepperCarousel from "../Stepper/StepperCarousel";
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import LaunchIcon from "@material-ui/icons/Launch";
import CancelIcon from "@material-ui/icons/Cancel";
import CodeIcon from "@material-ui/icons/Code";
import Tooltip from '@material-ui/core/Tooltip';
import SnackbarComponent from "../Snackbar/Snackbar.js";
import Fade from '@material-ui/core/Fade';

const styles = () => ({
    root: {
        overflow: 'hidden'
    },

    dialogActions: {
        justifyContent: 'flex-start'
    },
    dialogContent: {
        overflow: 'hidden'
    },

    avatar: {
        backgroundColor: blue[100],
        color: blue[600]
    },

    //Icons on the right of button
    button: {
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'space-around',
        fontSize: '1.3rem',
        letterSpacing: '.05rem',
        color: '#fff'

    },

    buttonVisit: {
        backgroundColor: '#00BFB2',
        width: '1 0 35%',
        transition: '0.3s all ease-out',

        '&:hover': {

            transition: '0.3s all ease-in',
            backgroundColor: '#03DA36'
        }
    },

    buttonGithub: {
        backgroundColor: '#834bff',
        width: '1 0 35%',

        transition: '0.3s all ease-out',

        '&:hover': {

            transition: '0.3s all ease-in',
            backgroundColor: '#3700B3'
        }
    },

    rightIcon: {
        paddingLeft: '.8rem',
        color: "white"
    },

    divider: {
        margin: '1rem 0'
    },

    visit: {
        textDecoration: 'none',
        color: 'white',
        padding: '1rem 1.2rem'
    },

    carousel: {
        border: '2px solid pink',
        width: '100%',
        height: '100%'
    }
});

class ProjectDialog extends React.Component {

    constructor(props)
    {
        super(props);

        //TODO: Get the selected Data passed in
        this.state = {
            selectedValue: props.selectedValue,
            open: false,
            project: props.project || {},
            index: props.index || -1,
            indexSelected: props.indexSelected
        };

        //TODO: Data shoudl look like
        /*
Project:{
    title:"",
    subtitle:'',
    description:'',

    website:"",
    github:"",

    tags:[],

    isPrivate:false,
    inProgress:false,

}
        */
    }

    /*
@function componentWillReceiveProps(propss)

    */
    componentWillReceiveProps = props => {

        const {open, project, index, indexSelected} = props;

        if (project) {
            this.setState({project});
        }

        if (index) {
            this.setState({index});
        }

        if (indexSelected) {
            this.setState({indexSelected});
        }

        //$ Only open if selected matches
        if ((index === indexSelected)) {
            this.setState({open: true})
        }
    }

    /*
@function: handleClose()
@desc: Set Open state to false, then call props.onClose() to change state in parent component
    */
    handleClose = () => {

        this.setState({open: false});
        this
            .props
            .onClose(this.props.selectedValue);

    };

    handleListItemClick = value => {
        this
            .props
            .onClose(value);
    };

    render() {
        const {
            classes,
            onClose,
            selectedValue,
            ...other
        } = this.props;

        const {project} = this.state;

        return (
            <Dialog
                className={classes.root}
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="form-dialog-title">

                <div className={classNames("dialog__carousel")}>

                    <StepperCarousel handleClose={this.handleClose} project={project}/>
                </div>

                <DialogContent
                    className={classNames(classes.dialogContent, "dialog__container")}>

                    <div className="dialog__container--text">
                        <h2 className="dialog__container--text--header">{project.name}</h2>
                        <h3 className="dialog__container--text--sub">{project.sub}</h3>

                        <Divider className={classes.divider}/>
                        <DialogContentText className="dialog__container--text--p">
                            {project.description}</DialogContentText>
                    </div>
                    
                </DialogContent>

                <DialogActions
                    className={classNames("dialog__container--action", classes.dialogActions)}>

                    <Tooltip
                        placement="top"
                        className={classes.buttonVisit}
                        title={project.inProgress
                        ? "Site still in progress!"
                        : "Visit the site"}>

                        <a
                            className={classNames(classes.visit, 'dialog__link')}
                            href={project.website
                            ? project.website
                            : null}
                            target="blank">

                            <Button
                                variant="contained"
                                className={classNames(classes.button, classes.buttonVisit, 'dialog__container--action--btn')}
                                disabled={!project.website
                                ? true
                                : false}>

                                Visit Website
                                <LaunchIcon className={classes.rightIcon}/>

                            </Button>
                        </a>
                    </Tooltip>

                    <Tooltip
                        placement="top"
                        className={classes.buttonGithub}
                        title={project.isPrivate
                        ? "Project is private"
                        : "Take a peek under the hood"}>
                        <a
                            className={classNames(classes.visit, "dialog__link")}
                            target="blank"
                            href={project.github && !project.isPrivate
                            ? project.github
                            : null}>
                            <Button
                                variant="contained"
                                className={classNames(classes.button, classes.buttonGithub)}
                                disabled={project.isPrivate
                                ? true
                                : false}>

                                Github
                                <CodeIcon className={classes.rightIcon}/>

                            </Button>
                        </a>
                    </Tooltip>
                </DialogActions>
            </Dialog>
        );
    }
}

/* @functino : propTypes - Opena dialog depending if the indexSelected matches the index
*/
ProjectDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
    project: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    indexSelected: PropTypes.number.isRequired,
    selectedValue: PropTypes.string
};

export default withStyles(styles)(ProjectDialog);