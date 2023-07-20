import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { Home, Info, Create, Mail } from '@material-ui/icons';

const Navbar = () => {
  const styles = useSpring({
    from: { opacity: 0, transform: 'translateY(-10px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 500 },
  });

  return (
    <animated.header style={styles}>
      <nav className="flex items-center justify-between flex-wrap p-4 bg-primary-200">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img src="logo.png" alt="VEGEFOODS" className="w-8 h-8" />
        </div>
        <ul className="flex justify-end space-x-4">
          <li>
            <Link to="/" className="text-white">
              <Home />
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white">
              <Info />
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/blog" className="text-white">
              <Create />
              BLOG
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white">
              <Mail />
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </animated.header>
  );
};

export default Navbar;
