import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '50px auto',
    padding: theme.spacing(4),
    backgroundColor: '#F2F2F2',
  },
  title: {
    fontSize: 22,
    marginBottom: 0,
    color: '#333333',
    textAlign: 'center',
  },
  description: {
    color: '#333333',
    textAlign: 'center',
  },
  NewsLetter: {
    margin: '50px auto',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
  input: {
    marginBottom: theme.spacing(2),
    '& .MuiInputBase-input': {
      color: '#333333',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
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
      <div className={classes.NewsLetter}>
        <div>
          <h2 className={classes.title}>Subscribe to our Newsletter</h2>
          <Typography className={classes.description}>
            Get email updates about our latest stores and special offers
          </Typography>
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
    </section>
  );
};

export default NewsletterSection;
