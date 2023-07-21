import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    backgroundColor: '#F2F2F2',
  },
  contactInfoContainer: {
    marginBottom: theme.spacing(5),
  },
  info: {
    backgroundColor: '#e8e8e8',
    padding: theme.spacing(4),
    marginBottom: theme.spacing(3),
    '& p': {
      margin: 0,
      '& span': {
        fontWeight: 'bold',
        marginRight: theme.spacing(1),
      },
      '& a': {
        color: '#005100',
        textDecoration: 'none',
        '&:hover': {
          color: '#2a9235',
        },
      },
    },
  },
  contactFormContainer: {
    display: 'flex',
    '& .contact-form': {
      backgroundColor: '#e8e8e8',
      padding: theme.spacing(5),
      '& .form-group': {
        marginBottom: theme.spacing(3),
        '& .form-control': {
          backgroundColor: '#F2F2F2',
          '& input': {
            color: '#333333',
          },
          '& fieldset': {
            borderColor: '#005100',
          },
          '&:hover fieldset': {
            borderColor: '#2a9235',
          },
        },
      },
      '& .btn-primary': {
        backgroundColor: '#005100',
        color: '#333333',
        '&:hover': {
          backgroundColor: '#2a9235',
        },
      },
    },
  },

  mapIframe: {
    width: '100%',
    height: '400px',
  },

  mapContainer: {
    backgroundColor: '#e8e8e8',
    position: 'relative',
    overflow: 'hidden',
    '& .gm-err-container': {
      height: '100%',
      width: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: '#bfbfbf',
      '& .gm-err-icon': {
        userSelect: 'none',
      },
      '& .gm-err-title, & .gm-err-message': {
        color: '#333333',
      },
    },
  },
}));

const ContactSection = () => {
  const classes = useStyles();

  return (
    <section className={classes.container}>
      <Container>
        <Grid container spacing={3} className={classes.contactInfoContainer}>
          <Grid item xs={12} sm={6} md={3}>
            <div className={classes.info}>
              <Typography component="p">
                <span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className={classes.info}>
              <Typography component="p">
                <span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className={classes.info}>
              <Typography component="p">
                <span>Email:</span> <a href="mailto:info@veganfoods.com">info@veganfoods.com</a>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className={classes.info}>
              <Typography component="p">
                <span>Website:</span> <a href="#">veganfoodsincfake.com</a>
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={3} className={classes.contactFormContainer}>
          <Grid item xs={12} md={6}>
            <form action="#" className="contact-form">
              <div className="form-group">
                <TextField
                  className="form-control"
                  variant="outlined"
                  placeholder="Your Name"
                  fullWidth
                  InputProps={{ disableUnderline: true }}
                />
              </div>
              <div className="form-group">
                <TextField
                  className="form-control"
                  variant="outlined"
                  placeholder="Your Email"
                  fullWidth
                  InputProps={{ disableUnderline: true }}
                />
              </div>
              <div className="form-group">
                <TextField
                  className="form-control"
                  variant="outlined"
                  placeholder="Subject"
                  fullWidth
                  InputProps={{ disableUnderline: true }}
                />
              </div>
              <div className="form-group">
                <TextField
                  className="form-control"
                  variant="outlined"
                  multiline
                  rows={7}
                  placeholder="Message"
                  fullWidth
                  InputProps={{ disableUnderline: true }}
                />
              </div>
              <div className="form-group">
                <Button variant="contained" className="px-5 py-3 btn btn-primary" disableElevation>
                  Send Message
                </Button>
              </div>
            </form>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={classes.mapContainer}>
              {/* Google Map */}
              <iframe
                title="Fictitious Location"
                className={classes.mapIframe}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678901234567!2d-73.97418751234567!3d40.75643456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMDDCsDQ4JzAyLjUiTiA3M8KwMzgnNDcuMCJX!5e0!3m2!1sen!2suk!4v1626791609231!5m2!1sen!2suk"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ContactSection;
