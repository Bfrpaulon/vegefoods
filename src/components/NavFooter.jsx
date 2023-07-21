import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowUpward as ArrowUpwardIcon, Facebook as FacebookIcon, Instagram as InstagramIcon, Twitter as TwitterIcon } from '@material-ui/icons';
import { useSpring, animated } from 'react-spring';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#F2F2F2',
    color: '#333333',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      textAlign: 'center',
    },
  },
  contactInfo: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      marginTop: 0,
      alignItems: 'flex-start',
      textAlign: 'center',
    },
  },
  socialIcons: {
    display: 'flex',
    marginBottom: theme.spacing(2),
    '& > *': {
      margin: theme.spacing(1),
    },
    [theme.breakpoints.up('md')]: {
      marginBottom: 0,
      textAlign: 'center',
    },
  },
  backToTopButton: {
    background: '#FFC107',
    color: '#333333',
    borderRadius: '4px',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
  },
}));

const NavFooter = () => {
  const classes = useStyles();

  // React Spring animation
  const springProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 100 });

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <animated.footer className={classes.footer} style={springProps}>
      <Button className={classes.backToTopButton} onClick={handleBackToTop}>
        <ArrowUpwardIcon />
      </Button>
      <div className={classes.socialIcons}>
        {/* Coloque aqui os ícones das mídias sociais */}
        <a href='www.facebook.com'><FacebookIcon /></a>
        <a href='www.instagram.com'><InstagramIcon /></a>
        <a href='www.twitter.com'><TwitterIcon /></a>
      </div>
      <div className={classes.contactInfo}>
        <p>203 Fake St. Mountain View, São Francisco, Califórnia, EUA</p>
        <p>+2 392 3929 210</p>
        <p>info@VegeFoods.com</p>
        <p>Copyright © {new Date().getFullYear()} Todos os direitos reservados | VegeFoods Ltda</p>
      </div>
    </animated.footer>
  );
};

export default NavFooter;
