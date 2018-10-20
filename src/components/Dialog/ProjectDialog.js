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

const styles = () => ({
    root: {},

    dialogActions: {
        justifyContent: 'flex-start'
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
        paddingLeft: '.8rem'
    },
  
    divider: {
        margin: '1rem 0'
    }
});

class ProjectDialog extends React.Component {

    constructor(props)
    {
        super(props);

        //TODO: Get the selected Data passed in
        this.state = {
            selectedValue: props.selectedValue,
            open: props.open || false,
            project: props.project || {}
        };

        //TODO: Data shoudl look like
        /*
Project:{
    title:"",
    subtitle:'',
    description:'',

    websiteURL:"",
    githubURL:"",

    isPrivate:false,
    inProgress:false,

}
        */
    }

    /*
@function componentWillReceiveProps(propss)

    */
    componentWillReceiveProps = props => {

        const {open, project} = props;

        if (open) {
            this.setState({open});
        }

        if (project) {
            this.setState({project});
        }
    }
    handleClose = () => {
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

        return (
            <Dialog
                open={true}
                onClose={this.handleClose}
                aria-labelledby="form-dialog-title">

                <div className="dialog__carousel">
                    <h1>
                        Carousel Here</h1>
                </div>
                <DialogContent className={"dialog__container"}>

                    <div className="dialog__container--text">
                        <h2 className="dialog__container--text--header">React Robofriends</h2>
                        <h3 className="dialog__container--text--sub">Personal Project</h3>
                    </div>
                    <Divider className={classes.divider}/>
                    <DialogContentText className="dialog__container--text--p">
                        To subscribe to this website, please enter your email address here. We will send
                        updates occasionally.
                    </DialogContentText>

                </DialogContent>
                <DialogActions
                    className={classNames("dialog__container--action", classes.dialogActions)}>

                    <a href="" target="blank">
                        <Button
                            variant="contained"
                            className={classNames(classes.button, classes.buttonVisit, 'dialog__container--action--btn')}>
                            Visit Website
                            <LaunchIcon className={classes.rightIcon}/>
                        </Button>
                    </a>

                    <a href="" target="blank">
                        <Button
                            variant="contained"
                            className={classNames(classes.button, classes.buttonGithub, 'dialog__container--action--btn')}>
                            Github

                            <CodeIcon className={classes.rightIcon}/>

                        </Button>
                    </a>

                </DialogActions>
            </Dialog>
        );
    }
}

ProjectDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
    selectedValue: PropTypes.string
};

export default withStyles(styles)(ProjectDialog);