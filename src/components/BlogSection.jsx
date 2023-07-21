import React from 'react';
import { Container, Grid, Typography, Button } from '@material-ui/core';
import { useSpring, animated, useScrollTrigger, Slide } from 'react-spring';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    background: '#F2F2F2',
  },
  blogEntry: {
    marginBottom: theme.spacing(4),
    '&:last-child': {
      marginBottom: 0,
    },
  },
  blogImage: {
    width: '100%',
    height: '400px',
    paddingRight: '20px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    [theme.breakpoints.down('sm')]: {
      height: '300px',
    },
  },
  blogText: {
    padding: theme.spacing(2),
    background: '#FFC107',
  },
  heading: {
    marginBottom: theme.spacing(1),
  },
  paragraph: {
    marginBottom: theme.spacing(1),
  },
  readMoreButton: {
    backgroundColor: '#4CAF50',
    color: '#F2F2F2',
    '&:hover': {
      backgroundColor: '#005100',
    },
  },
  sidebarBox: {
    marginBottom: theme.spacing(4),
  },
  sideBar: {
    paddingLeft: '50px',
  },
  categoriesList: {
    listStyle: 'none',
    padding: 0,
  },
  categoryItem: {
    marginBottom: theme.spacing(1),
    '& a': {
      color: '#333333',
      textDecoration: 'none',
    },
  },
  tagcloud: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: 0,
    listStyle: 'none',
    margin: 0,
  },
  tagLink: {
    display: 'inline-block',
    backgroundColor: '#8fe992',
    color: '#F2F2F2',
    padding: theme.spacing(1),
    margin: theme.spacing(0.5),
    borderRadius: theme.shape.borderRadius,
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#4CAF50',
    },
  },
}));

const blogPosts = [
      {
        imageUrl: 'https://img.freepik.com/premium-photo/world-food-day-generative-ai_756405-6494.jpg?size=626&ext=jpg&ga=GA1.2.1437404121.1689860707&semt=ais_ai_generated',
        date: 'August 5, 2019',
        author: 'Jane Doe',
        chatCount: '7',
        heading: 'The Wonderful World of Vegan Cuisine',
        content: 'Discover the wonders of vegan cuisine from different cultures around the globe. Explore diverse flavors and healthy alternatives in vegan dishes.',
      },
];

const BlogEntry = ({ imageUrl, date, author, chatCount, heading, content }) => {
  const classes = useStyles();

  const fadeInUpProps = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(20px)' },
    delay: 500,
  });

  return (
    <animated.div style={fadeInUpProps} className={classes.blogEntry}>
      <div className={classes.blogImage} style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className={classes.blogText}>
        <div className="mb-3 meta">
          <div>
            <Typography variant="body2">{date}</Typography>
          </div>
          <div>
            <Typography variant="body2">{author}</Typography>
          </div>
          <div>
            <Typography variant="body2" className="meta-chat">
              <span className="icon-chat"></span> {chatCount}
            </Typography>
          </div>
        </div>
        <Typography variant="h3" className={classes.heading}>
          {heading}
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          {content}
        </Typography>
        <Button variant="contained" className={classes.readMoreButton}>
          Read more
        </Button>
      </div>
    </animated.div>
  );
};

const BlogSection = () => {
  const classes = useStyles();

  return (
    <section className={classes.container}>
      <Container>
        <Grid container>
          <Grid item xs={12} lg={8}>
            <div>
              <div>
                {blogPosts.map((post, index) => (
                  <BlogEntry key={index} {...post} />
                ))}
              </div>
            </div>
          </Grid>
          <Grid item xs={12} lg={4} className= {classes.sideBar}>           
            <div className={classes.sidebarBox}>
              <h3 className="heading">Categories</h3>
              <ul className={classes.categoriesList}>
                <li className={classes.categoryItem}>
                  <a href="#">Vegetables <span>(12)</span></a>
                </li>
                <li className={classes.categoryItem}>
                  <a href="#">Fruits <span>(22)</span></a>
                </li>
                <li className={classes.categoryItem}>
                  <a href="#">Juice <span>(37)</span></a>
                </li>
                <li className={classes.categoryItem}>
                  <a href="#">Dries <span>(42)</span></a>
                </li>
              </ul>
            </div>
            <div className={classes.sidebarBox}>
              <h3 className="heading">Tag Cloud</h3>
              <ul className={classes.tagcloud}>
                <li>
                  <a href="#" className={classes.tagLink}>fruits</a>
                </li>
                <li>
                  <a href="#" className={classes.tagLink}>tomatoe</a>
                </li>
                <li>
                  <a href="#" className={classes.tagLink}>mango</a>
                </li>
                <li>
                  <a href="#" className={classes.tagLink}>apple</a>
                </li>
                <li>
                  <a href="#" className={classes.tagLink}>carrots</a>
                </li>
                <li>
                  <a href="#" className={classes.tagLink}>orange</a>
                </li>
                <li>
                  <a href="#" className={classes.tagLink}>pepper</a>
                </li>
                <li>
                  <a href="#" className={classes.tagLink}>eggplant</a>
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default BlogSection;
