import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: ' 50px auto',
        padding: theme.spacing(4),
        backgroundColor: '#F2F2F2',
    },
    title: {
        fontSize: 22,
        marginBottom: 0,
        color: '#333333',
        MarginRight: '50px',

    },
    description: {
        color: '#333333',
        MarginRight: '50px',
    },
    NewsLetter: {
        margin: ' 50px auto',
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    formGroup: {
        display: 'flex',
        marginLeft: '50px',

    },
    input: {
        marginRight: theme.spacing(2),
        '& .MuiInputBase-input': {
            color: '#333333',
        },
        '& .MuiOutlinedInput-root': {
            '&fieldset': {
                borderColor: '#005100',
            },
            '&:hover fieldset': {
                borderColor: '#2a9235',
            },
        },
    },
    subscribeButton: {
        backgroundColor: '#005100',
        color: 'white',
        '&:hover': {
            backgroundColor: '#2a9235',
        },
    },
}));

const NewsletterSection = () => {
    const classes = useStyles();

    return (
        <section className={classes.container}>
            <div>
                <div className={classes.NewsLetter} >
                    <div>
                        <h2 className={classes.title}>Subscribe to our Newsletter</h2>
                        <Typography className={classes.description}>Get email updates about our latest stores and special offers</Typography>
                    </div>
                    <div>
                        <form action="#" className={classes.formGroup}>
                            <TextField
                                className={classes.input}
                                variant="outlined"
                                placeholder="Enter email address"
                                InputProps={{ disableUnderline: true }}
                            />
                            <Button className={classes.subscribeButton} variant="contained" disableElevation>
                                Subscribe
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSection;