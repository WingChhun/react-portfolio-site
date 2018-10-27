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
        this.validateInput();
    }

    validateInput = () => {}

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

        axios(configurations)
        //! Working
            .then(res => {
            console.log(res);
            debugger;
        })
        //! Fail
            .catch(err => {
            console.log(err);
            debugger;
        })
    }

    render()
    {

        const {classes} = this.props;
        const {name, email, message, loading, errors} = this.state;

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
                                    value={name}
                                    name={NAME}
                                    label='Name'
                                    onChange={this.handleChange(NAME)}
                                    fullWidth
                                    margin="normal"
                                    variant={'outlined'}/>
                            </Grid>

                            <Grid xs={12} md={6}>
                                <TextField
                                    value={email}
                                    name={EMAIL}
                                    label='Email'
                                    onChange={this.handleChange(EMAIL)}
                                    fullWidth
                                    margin="normal"
                                    variant={'outlined'}/>
                            </Grid>

                            <Grid xs={12}>
                                <TextField
                                    value={message}
                                    name={MESSAGE}
                                    label='Message'
                                    onChange={this.handleChange(MESSAGE)}
                                    fullWidth
                                    margin="normal"
                                    variant={'outlined'}
                                    multiline
                                    rowsMax="4"
                                    rows='4'/>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>

        )
    }
}

export default withStyles(styles)(Contact);