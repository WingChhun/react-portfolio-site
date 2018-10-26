import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = () => ({root: {}});
const NAME = 'name';
const EMAIL = 'email';
const MESSAGE = 'message';
class Contact extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            name: "",
            email: "",
            message: "",
            loading: false,
            errors: {}
        };
    }

    handleChange = (field) => event => {
        const {name, email, message} = this.state;

        const value = event
            .target
            .value
            .trim();
        let messageValue = event.target.value;

        switch (field) {
            case NAME:
                this.setState({NAME: value});
                break;

            case EMAIL:
                this.setState({EMAIL: value});
                break;

            case MESSAGE:
                this.setState({NAME: messageValue});
                break;

            default:
                return;
        }
        this.validateInput();
    }

    validateInput = () => {}

    submitForm = () => {

        const {name, email} = this.state;
        const formData = new FormData();

        //TODO: Validate email

        form.append('name', name);
        form.append('email', email);
    }

    render()
    {

        const {classes} = this.props;

        return (

            <div className={classNames(classes.root, "contact")}>
                <div className={"contact__container"}>
                    <Grid container justify='center' direction="column">
                        <h2>
                            Have a question?</h2>
                        <p>
                            Feel free to send me an email</p>
                    </Grid>
                </div>
            </div>

        )
    }
}

export default withStyles(styles)(Contact);