import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { animated, useSpring } from 'react-spring';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 400,
  },
  image: {
    flex: '0 0 50%',
    maxWidth: '50%',
    height: 'auto',
    borderRadius: 8,
  },
  content: {
    flex: '0 0 50%',
    marginTop: theme.spacing(4),
    color: 'black',
    textAlign: 'center',
    '& > *': {
      marginBottom: theme.spacing(2),
    },
  },
  price: {
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  countdown: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& > div': {
      margin: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  button: {
    backgroundColor: '#005100',
  },
  timer: {
    fontSize: '2rem',
    fontWeight: 'bold',
  },
}));

const DealOfTheDay = () => {
  const classes = useStyles();

  const fadeAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  const timerAnimation = useSpring({
    from: { number: 1308 },
    to: { number: 0 },
    config: { duration: 1308000 }, // Approximately 21 minutes
  });

  return (
    <animated.div className={classes.container} style={fadeAnimation}>
      <img
        src="https://t3.ftcdn.net/jpg/03/66/82/88/240_F_366828898_7K6XPvKIH4sR2w2njT6VkdNDRCYTpjTn.jpg"
        alt="Deal of the Day"
        className={classes.image}
      />
      <div className={classes.content}>
        <Typography variant="h2">Best price for you</Typography>
        <Typography variant="h4">Deal of the day</Typography>
        <Typography variant="h3" component="h3">
          Spinach
        </Typography>
        <div className={classes.price}>
          <Typography component="span" variant="body1">
            €10
          </Typography>
          <br/>
          <Typography component="span" variant="body1">
           <b>Now €5 only</b> 
          </Typography>
        </div>
        <div className={classes.countdown}>
          <div>
            <animated.div className={classes.timer}>
              {timerAnimation.number.interpolate((val) => Math.floor(val))}
            </animated.div>
            <Typography variant="body1">Days</Typography>
          </div>
          <div>
            <animated.div className={classes.timer}>
              {timerAnimation.number.interpolate((val) => Math.floor((val % 1308) / 54))}
            </animated.div>
            <Typography variant="body1">Hours</Typography>
          </div>
          <div>
            <animated.div className={classes.timer}>
              {timerAnimation.number.interpolate((val) => Math.floor(((val % 1308) % 54) / 0.9))}
            </animated.div>
            <Typography variant="body1">Minutes</Typography>
          </div>
          <div>
            <animated.div className={classes.timer}>
              {timerAnimation.number.interpolate((val) => Math.floor(((val % 1308) % 54) % 0.9))}
            </animated.div>
            <Typography variant="body1">Seconds</Typography>
          </div>
        </div>
        <Button className={classes.button}>See offer</Button>
      </div>
    </animated.div>
  );
};

export default DealOfTheDay;
