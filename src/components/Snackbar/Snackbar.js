import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import PropTypes from 'prop-types';

class SnackbarComponent extends React.Component {
 
  constructor(props)
    {
        super(props);

        this.state = {
            open: props.open || false,
            vertical: props.vertical || 'bottom',
            horizontal: props.horizontal || 'center',
            message: props.message || "This is a snackbar"
        };
    }

    componentWillReceiveProps = props => {

        const {open, vertical, horizontal, message} = props;

        if (open) {
            this.setState({open});
        }

        if (vertical) {
            this.setState({vertical});
        }

        if (horizontal) {
            this.setState({horizontal});
        }

        if (message) {
            this.setState({message});
        }
    }

    handleClick = state => () => {
        this.setState({
            open: true,
            ...state
        });
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {

        const {vertical, horizontal, open, message} = this.state;

        return (
            <div>

                <Snackbar
                    anchorOrigin={{
                    vertical,
                    horizontal
                }}
                    open={true}
                    autoHideDuration
                    ={4000}
                    onClose={this.handleClose}
                    ContentProps={{
                    'aria-describedby': 'message-id'
                }}
                    message={<span id = "message-id"> {
                    message
                } </span>}/>
            </div>
        );
    }
}

export default SnackbarComponent;