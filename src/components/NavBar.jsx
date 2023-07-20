import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { makeStyles } from '@material-ui/core/styles';
import { Home, Info, Create, Mail } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    maxHeight: '100px',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    backgroundColor: '#F2F2F2', // --bg-100:#F2F2F2;
    color: '#333333',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', // Add shadow
    borderRadius: '8px', // Rounded corners
  },
  logo: {
    width: 200,
    height: 60,
    marginRight: theme.spacing(2),
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    color: '#333333',
    textDecoration: 'none',
    marginLeft: theme.spacing(2),
    padding: theme.spacing(1),
    borderRadius: '4px', // Rounded corners for links
    transition: 'background-color 0.2s ease', // Smooth background-color transition on hover
    '&:hover': {
      backgroundColor: '#4CAF50', // primary-100 on hover
      textDecoration: 'none',
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const styles = useSpring({
    from: { opacity: 0, transform: 'translateY(-10px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  });

  return (
    <animated.header className={classes.header} style={styles}>
      <div className={classes.logo}>
        <img src="https://i.postimg.cc/QCvRQfsp/logo-3.png" alt="VEGEFOODS" className={classes.logo} />
      </div>
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
