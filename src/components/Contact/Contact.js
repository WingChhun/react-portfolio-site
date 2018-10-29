import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import validator from 'validator';
const styles = () => ({
    root: {},

    textField: {
        borderColor: "white"
    },

    button: {
        marginTop: '.8rem',
        padding: "1rem 2.25rem"
    }
});
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
            showSuccessMessage: false,
            errorName: "",
            errorEmail: "",
            errorMessage: "",
            valid: false
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
                this.setState({name: value, errorName: ""});
                return;

            case EMAIL:
                this.setState({email: value, errorEmail: ""});
                return;

            case MESSAGE:
                this.setState({message: messageValue, errorMessage: ""});
                return;

            default:
                return;
        }

    }

    validateInput = () => {
        const {name, email, message} = this.state;

        const Errors = {};

        if (name && name.length < 4) {
            Errors.errorName = "Name must be at least 4 characters"

        }

        if (email && !validator.isEmail(email)) {
            Errors.errorEmail = "Email is invalid";

        }

        if (message && message.length < 6) {
            Errors.errorMessage = "Message must be at least 6 characters!";
        }

        const {errorName, errorEmail, errorMessage} = Errors;
        console.log(Errors);

        if (Object.keys(Errors).length > 0) {
            this.setState(Errors)
        } else {
            this.submitForm();
        }
    }

    submitForm = () => {

        const URL = "https://formspree.io/capt.wing.chhun@gmail.com";
        const {name, email, message} = this.state;
        const formData = new FormData();

        //TODO: Validate email

        formData.set('name', name);
        formData.set('email', email);
        formData.set('message', message);

        const configurations = {
            method: 'post',
            url: URL,
            data: formData
        };

        //$ Start Loader
        this.setState({loading: true});

        axios(configurations)
        //! Working
            .then(res => {

            console.log("SENT")
            console.log(res);
            this.setState({loading: false})

        })
        //! Fail
            .catch(err => {
            console.log(err);
            this.setState({loading: false})

        })
    }

    render()
    {

        const {classes} = this.props;
        const {
            name,
            email,
            message,
            loading,
            errorMessage,
            errorName,
            errorEmail
        } = this.state;

        const Spinner = (<CircularProgress
            className={classes.circularProgress}
            color
            ={'secondary'}
            size={50}
            thickness={4.5}/>);

        const Submit = (
            <Button
                variant="outlined"
                color="secondary"
                className={classes.button}
                onClick={this.validateInput}
                disabled={(!name || !message || !email)
                ? true
                : false}>
                Submit</Button>
        );
        return (

            <div className={classNames(classes.root, "contact")}>
                <div className={"contact__container"}>
                    <Grid container justify='center' direction="column">
                        <Grid xs={12}>
                            <h2>
                                Have a question?</h2>
                        </Grid>
                        <Grid xs={12}>
                            <p>
                                Feel free to send me an email</p>
                        </Grid>

                    </Grid>

                    <div className="contact__form">
                        <Grid container spacing={8} justify='space-around'>

                            <Grid xs={12} md={6}>
                                <TextField
                                    className={classes.textField}
                                    value={name}
                                    name={NAME}
                                    error={errorName
                                    ? true
                                    : false}
                                    helperText={errorName
                                    ? errorName
                                    : null}
                                    label='Name'
                                    onChange={this.handleChange(NAME)}
                                    fullWidth
                                    required
                                    color={'secondary'}
                                    margin="normal"
                                    variant={'outlined'}/>
                            </Grid>

                            <Grid xs={12} md={6}>
                                <TextField
                                    type="email"
                                    placeholder={"Enter a message"}
                                    className={classes.textField}
                                    value={email}
                                    name={EMAIL}
                                    label='Email'
                                    error={errorEmail
                                    ? true
                                    : false}
                                    helperText={errorEmail
                                    ? errorEmail
                                    : null}
                                    onChange={this.handleChange(EMAIL)}
                                    fullWidth
                                    required
                                    color={'secondary'}
                                    margin="normal"
                                    variant={'outlined'}/>
                            </Grid>

                            <Grid xs={12}>
                                <TextField
                                    className={classes.textField}
                                    value={message}
                                    error={errorMessage
                                    ? true
                                    : false}
                                    helperText={errorMessage
                                    ? errorMessage
                                    : null}
                                    name={MESSAGE}
                                    label='Message'
                                    onChange={this.handleChange(MESSAGE)}
                                    fullWidth
                                    color={'secondary'}
                                    margin="normal"
                                    variant={'outlined'}
                                    multiline
                                    rowsMax="8"
                                    rows='7'/>
                            </Grid>

                        </Grid>
                        <Grid className="contact__action" container justify='flex-end'>
                            {loading
                                ? Spinner
                                : Submit}

                        </Grid>

                    </div>
                </div>
            </div>

        )
    }
}

export default withStyles(styles)(Contact);