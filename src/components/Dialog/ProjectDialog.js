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
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

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
        borderRadius: '15px'
    },

    rightIcon: {
        paddingLeft: '.8rem'
    }
});

class ProjectDialog extends React.Component {

    constructor(props)
    {
        super(props);

        this.state = {
            selectedValue: props.selectedValue,
            open: props.open || false
        };
    }

    componentWillReceiveProps = props => {
        if (props.open) {
            this.setState({open: props.open})
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
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent className={"dialog__container"}>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We will send
                        updates occasionally.
                    </DialogContentText>

                </DialogContent>
                <DialogActions
                    className={classNames("dialog__container--action", classes.dialogActions)}>

                    <Button
                        variant="contained"
                        color="primary"
                        className={classNames(classes.button)}>
                        Visit Website
                        <CloudUploadIcon className={classes.rightIcon}/>
                    </Button>
                    <Button onClick={this.handleClose} color="primary">
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

ProjectDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    onClose: PropTypes.func,
    selectedValue: PropTypes.string
};

export default withStyles(styles)(ProjectDialog);