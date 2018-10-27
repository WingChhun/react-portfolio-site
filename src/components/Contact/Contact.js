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
            errors: {},
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
                this.setState({name: value});
                break;

            case EMAIL:
                this.setState({email: value});
                break;

            case MESSAGE:
                this.setState({message: messageValue});
                break;

            default:
                return;
        }

        //! Clear errors
        const errors = {};

        this.setState(errors);
    }

    validateInput = () => {
        const {name, email, message, errors} = this.state;

        const Errors = errors;

        if (name && name.length < 4) {
            Errors.name = "Name must be at least 4 characters"

        }

        if (email && !validator.isEmail(email)) {
            Errors.email = "Email is invalid";

        }

        if (message && message.length < 6) {
            Errors.message = "Message must be at least 6 characters!";
        }

        if (Errors) {
            this.setState(errors : Errors);
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
            console.log(res);
            this.setState({loading: false})
            debugger;

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
        const {name, email, message, loading, errors} = this.state;

        const Spinner = (<CircularProgress
            className={classes.circularProgress}
            color
            ={'secondary'}
            size={50}
            thickness={4.5}/>);

        const Submit = (
            <Button
                onClick={this.validateInput}
                disabled={(!name && !message && !email)
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
                                    error={errors.name
                                    ? true
                                    : false}
                                    helperText={errors.name
                                    ? errors.name
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
                                    error={errors.email
                                    ? true
                                    : false}
                                    helperText={errors.email
                                    ? errors.email
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
                                    error={errors.message
                                    ? true
                                    : false}
                                    helperText={errors.message
                                    ? errors.message
                                    : null}
                                    name={MESSAGE}
                                    label='Message'
                                    onChange={this.handleChange(MESSAGE)}
                                    fullWidth
                                    color={'secondary'}
                                    margin="normal"
                                    variant={'outlined'}
                                    multiline
                                    rowsMax="4"
                                    rows='4'/>
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