import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import PropTypes from 'prop-types';

class PositionedSnackbar extends React.Component {
    constructor(props)
    {
        super(props);

        this.state = {
            open: false,
            vertical: 'bottom',
            horizontal: 'center'
        };
    }

    componentWillReceiveProps = props => {
        const {open, vertical, horizontal} = props;

        if (open) {
            this.setState({open});
        }

        if (vertical) {
            this.setState({vertical});
        }

        if (horizontal) {
            this.setState({horizontal});
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
        const {vertical, horizontal, open} = this.state;
        return (
            <div>

                <Snackbar
                    anchorOrigin={{
                    vertical,
                    horizontal
                }}
                    open={open}
                    onClose={this.handleClose}
                    ContentProps={{
                    'aria-describedby': 'message-id'
                }}
                    message={< span id = "message-id" > I love snacks < /span>}/>
            </div>
        );
    }
}

export default PositionedSnackbar;