import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, Button } from '@material-ui/core';
import ReactPlayer from 'react-player';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
        background: theme.palette.background.default,
    },
    aboutVideo: {
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '75%', // For smaller screens
        },
    },
    videoWrapper: {
        paddingRight: '20px',
        position: 'relative',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },
    video: {
        width: '100%',
        height: '100%',
    },
    icon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#4CAF50',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        border: `2px solid ${'#4CAF50'}`,
        transition: 'all 0.3s ease',
        '&:hover': {
            backgroundColor: '#4CAF50',
            color: theme.palette.background.default,
            transform: 'scale(1.1)',
        },
    },
    heading: {
        marginBottom: theme.spacing(4),
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
        },
    },
    paragraph: {
        marginBottom: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
        },
    },
    shopNowButton: {
        backgroundColor: '#4CAF50',
        color: theme.palette.background.default,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
    },
}));

const AboutSection = () => {
    const classes = useStyles();

    return (
        <section className={classes.container}>
            <Container>
                <Grid container>
                    <Grid item xs={12} md={5} className={`${classes.aboutVideo} img img-2`}>
                        <div className={classes.videoWrapper}>
                            <ReactPlayer
                                className={classes.video}
                                url="https://v4.cdnpk.net/videvo_files/video/free/video0458/large_watermarked/_import_60c1dec42cbe53.33797399_FPpreview.mp4"
                                controls
                                width="100%"
                                height="100%"
                            />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={7} className="py-5 wrap-about pb-md-5 ftco-animate fadeInUp ftco-animated">
                        <div className={classes.heading}>
                            <Typography variant="h2">Welcome to Vegefoods an eCommerce website</Typography>
                        </div>
                        <div className="pb-md-5">
                            <Typography variant="body1" className={classes.paragraph}>
                                🌱 <b>Discover the Flavor of the Future with Vegefoods! </b> 🌱
                                <br/><br/>

                                If you are looking for a unique and sustainable dining experience, look no further! Welcome to Vegefoods, your ultimate destination for high-quality plant foods. Our mission is to bring you the best of nature, providing a delicious and healthy alternative for your palate.
                            </Typography>
                            <Typography variant="body1" className={classes.paragraph}>
                                
                                <b> What makes us special? </b>
                                <br /><br/>
                                🌿 Exceptional Variety | 🌎 Environmental Commitment | 👨‍🍳 Inspiring Recipes | 📦 Fast and Safe Delivery | 🌟 Discover the Best of You.

                                <br /><br/>

                                <b>Don't wait any longer to embark on this delicious and healthy experience! Click the link below to explore our online store and begin your journey towards more mindful eating.</b>

                            </Typography>
                            <Button variant="contained" className={classes.shopNowButton}>
                                Shop now
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default AboutSection;
