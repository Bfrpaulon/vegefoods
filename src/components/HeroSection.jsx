import React, { useState, useEffect } from 'react';
import { Button, Typography, makeStyles } from '@material-ui/core';
import { ArrowForward as ArrowForwardIcon } from '@material-ui/icons';
import { useTransition, animated } from 'react-spring';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '500px',
    backgroundColor: '#f2f2f2',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 'auto',
    maxWidth: '100%',
  },
  textContainer: {
    position: 'absolute',
    bottom: '50px',
    textAlign: 'center',
    width: '100%',
    fontFamily: 'Cursive',
    fontSize: '48px',
    color: ' #4CAF50',
  },
  button: {
    marginTop: '10px',
    backgroundColor: '#FFC107',
    color: '#916400',
  },
}));

const images = [
  'https://img.freepik.com/free-photo/basket-vegetables-is-fridge-with-red-handle_1340-37257.jpg?t=st=1689851069~exp=1689854669~hmac=5579b76115be4a2d647ac6d7338cbc44bc406221d0ec37341804610929824ccb&w=740',
  'https://img.freepik.com/free-photo/healthy-vegetarian-salad-with-fresh-organic-ingredients-generated-by-ai_24640-80622.jpg?t=st=1689852560~exp=1689856160~hmac=54c997f395e4c35c844b97d6eb5cb900320d29707ea6333ebb7ef79179014b1a&w=900',
];

const phrases = [
  'We deliver organic vegetables & fruits',
  '100% Fresh & Organic Foods',
];

const HeroSection = () => {
  const classes = useStyles();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const transitions = useTransition(currentImageIndex, {
    from: { opacity: 0, transform: 'translate3d(0, 50px, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(0, -50px, 0)' },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
  
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className={classes.container}>
      {transitions((style, index) => (
        <animated.img
          src={images[index]}
          alt={`Imagem ${index + 1}`}
          className={classes.image}
          style={{ ...style, width: '100%' }}
          key={index}
        />
      ))}
      <div className={classes.textContainer}>
        <Typography className={classes.textContainer}>{phrases[currentImageIndex]}</Typography>
        <Button
          variant="contained"
          color="#916400"
          className={classes.button}
          endIcon={<ArrowForwardIcon />}
        >
          Ver Detalhes
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;