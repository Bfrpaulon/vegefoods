import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';
import { FaTruck, FaLeaf, FaStar, FaHeadset } from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(2),
    backgroundColor: '#f5f5f5',
    margin: theme.spacing(6),
    width: '100%',
    '&:not(:last-child)': {
      marginRight: theme.spacing(2),
    },
  },
  iconCircle: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    background: 'var(--primary-100)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      background: 'var(--primary-200)',
    },
  },
  icon: {
    fontSize: '24px',
    color: 'var(--accent-200)',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: 'var(--accent-100)',
    },
  },
}));

const DifferentialsSection = () => {
  const classes = useStyles();

  const differentials = [
    { title: 'Free Shipping', description: 'Get free shipping on all orders.', icon: <FaTruck /> },
    { title: 'Always Fresh', description: 'Our products are always fresh and tasty.', icon: <FaLeaf /> },
    { title: 'Superior Quality', description: 'We offer products of superior quality.', icon: <FaStar /> },
    { title: '24/7 Support', description: 'Customer support available 24/7.', icon: <FaHeadset /> },
  ];

  return (
    <div style={{ display: 'flex' }}>
      {differentials.map((differential, index) => (
        <div key={index} className={classes.root}>
          <div className={classes.iconCircle}>
            <Avatar className={classes.iconCircle}>
              <span className={classes.icon}>
                {differential.icon}
              </span>
            </Avatar>
          </div>
          <div style={{ marginLeft: '20px' }}>
            <Typography variant="h6">{differential.title}</Typography>
            <Typography variant="body2">{differential.description}</Typography>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DifferentialsSection;
