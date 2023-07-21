import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { makeStyles } from '@material-ui/core/styles';
import { Home, Info, Create, Mail, Menu } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    maxHeight: '100px',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    backgroundColor: '#F2F2F2',
    color: '#333333',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      margin: 'auto',
      justifyContent: 'center',
      maxHeight: '100%',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  logo: {
    width: 200,
    height: 60,
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2),
    },
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      display: 'none', // Hide the menu by default on smaller screens
      position: 'absolute',
      top: '100px',
      backgroundColor: '#F2F2F2',
      width: '100%',
      zIndex: 1,
    },
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    color: '#333333',
    textDecoration: 'none',
    marginLeft: theme.spacing(2),
    padding: theme.spacing(1),
    borderRadius: '4px',
    transition: 'background-color 0.2s ease',
    '&:hover': {
      backgroundColor: '#4CAF50',
      textDecoration: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(1),
    },
  },
  showMenuBtn: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
      cursor: 'pointer',
      backgroundColor: '#4CAF50',
      color: '#FFFFFF',
      padding: theme.spacing(1),
      borderRadius: '4px',
      position: 'relative',
      margin: 'auto',
    },
  },
  overlay: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 999,
    },
  },
  overlayLinks: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  overlayLink: {
    color: '#FFFFFF',
    textDecoration: 'none',
    margin: theme.spacing(1),
    fontSize: '1.5rem',
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [showMenu, setShowMenu] = useState(false);

  const styles = useSpring({
    from: { opacity: 0, transform: 'translateY(-10px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  });

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <animated.header className={classes.header} style={styles}>
      <div className={classes.logo}>
        <img src="https://i.postimg.cc/QCvRQfsp/logo-3.png" alt="VEGEFOODS" className={classes.logo} />
      </div>
      <div className={classes.showMenuBtn} onClick={toggleMenu}>
        <Menu />
      </div>
      {showMenu && (
        <div className={classes.overlay}>
          <ul className={classes.overlayLinks}>
            <li>
              <Link to="/" className={classes.overlayLink}>
                <Home />
                HOME
              </Link>
            </li>
            <li>
              <Link to="/about" className={classes.overlayLink}>
                <Info />
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/blog" className={classes.overlayLink}>
                <Create />
                BLOG
              </Link>
            </li>
            <li>
              <Link to="/contact" className={classes.overlayLink}>
                <Mail />
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      )}
      <ul className={classes.navLinks}>
        <li>
          <Link to="/" className={classes.link}>
            <Home />
            HOME
          </Link>
        </li>
        <li>
          <Link to="/about" className={classes.link}>
            <Info />
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="/blog" className={classes.link}>
            <Create />
            BLOG
          </Link>
        </li>
        <li>
          <Link to="/contact" className={classes.link}>
            <Mail />
            CONTACT
          </Link>
        </li>
      </ul>
    </animated.header>
  );
};

export default Navbar;
