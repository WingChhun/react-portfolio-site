import React from 'react';
import PropTypes from 'prop-types';
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


const styles = {
    avatar: {
        backgroundColor: blue[100],
        color: blue[600]
    }
};

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
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We will send
                        updates occasionally.
                    </DialogContentText>

                </DialogContent>
                <DialogActions>

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