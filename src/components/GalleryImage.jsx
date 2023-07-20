import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import { animated, useTransition } from 'react-spring';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: 0,
    },
  },
  categoryItem: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: theme.shape.borderRadius,
    height: 300,
    display: 'flex',
    alignItems: 'flex-end',
    cursor: 'pointer',
    '& .text': {
      padding: theme.spacing(2),
      background: '#FFC107',
      width: '100%',
      color: 'white',
      textAlign: 'center',
      '& h2': {
        marginBottom: theme.spacing(1),
      },
    },
  },
  imageOnlyItem: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: theme.shape.borderRadius,
    height: 300,
    cursor: 'pointer',
  },
}));

const GalleryImage = () => {
  const classes = useStyles();
  const [cards, setCards] = useState([
    { id: 1, image: 'https://img.freepik.com/free-photo/fresh-autumn-veggies-wooden-table-healthy-meal-generative-ai_188544-8677.jpg?size=626&ext=jpg&ga=GA1.1.1437404121.1689860707&semt=ais_ai_generated', title: 'Vegetables', description: '' },
    { id: 2, image: 'https://img.freepik.com/premium-photo/natural-watercolor-background-with-branches-leaves-ai-generation_567294-8012.jpg?size=626&ext=jpg&ga=GA1.2.1437404121.1689860707&semt=ais_ai_generated', title: 'Vegan Foods', description: 'Protect the health of every home' },
    { id: 3, image: 'https://img.freepik.com/free-photo/fresh-fruit-salad-with-juicy-berries-kiwi-generated-by-ai_188544-22559.jpg?size=626&ext=jpg&ga=GA1.2.1437404121.1689860707&semt=ais_ai_generated', title: 'Fruits', description: '' },
    { id: 4, image: 'https://img.freepik.com/premium-photo/mixer-fruit-orange-juice-berry-wooden-background-ai-generative_407474-5668.jpg?size=626&ext=jpg&ga=GA1.1.1437404121.1689860707&semt=ais_ai_generated', title: 'Juices', description: '' },
    { id: 5, image: 'https://img.freepik.com/premium-photo/vibrant-vision-vegan-salad-bowl_921479-728.jpg?size=626&ext=jpg&ga=GA1.1.1437404121.1689860707&semt=ais_ai_generated', title: '', description: '' },
    { id: 6, image: 'https://img.freepik.com/free-photo/healthy-snack-collection-organic-nuts-fruit-generated-by-ai_188544-21443.jpg?size=626&ext=jpg&ga=GA1.1.1437404121.1689860707&semt=ais_ai_generated', title: 'Dried', description: '' },
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCards((prevCards) => {
        // Randomly shuffle the array of cards
        const shuffledCards = prevCards.sort(() => Math.random() - 1.5);
        return [...shuffledCards];
      });
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const transitions = useTransition(cards, {
    key: (item) => item.id,
    from: { opacity: 0, transform: 'translate3d(0, 30px, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(0, -30px, 0)' },
    config: { tension: 300, friction: 20 },
  });

  return (
    <div className={classes.container}>
      <Grid container spacing={3}>
        {transitions((style, card) => (
          <Grid item xs={12} md={4} key={card.id}>
            {card.title && (
              <animated.div
                style={{
                  ...style,
                  backgroundImage: `url(${card.image})`,
                }}
                className={classes.categoryItem}
              >
                <div className="text">
                  <Typography variant="h4">{card.title}</Typography>
                  {card.description && (
                    <Typography variant="subtitle1">
                      {card.description}
                    </Typography>
                  )}
                  {card.title === 'Vegan Foods' && (
                    <Button variant="contained"  style={{backgroundColor: '#4CAF50' , color:'white'}}>
                      Shop now
                    </Button>
                  )}
                </div>
              </animated.div>
            )}

            {!card.title && (
              <animated.div
                style={{
                  ...style,
                  backgroundSize: 'cover' , backgroundImage: `url(${card.image})`,
                }}
                className={classes.imageOnlyItem}
              />
            )}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default GalleryImage;
