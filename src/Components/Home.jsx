import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  wrapper: {
    borderRadius: '16px',
    width: '100%',
    padding: '32px 16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    color: '#f2f2f2',
    backgroundImage: "url(reward.png)",
    backgroundSize: '100% 100%', 
    
  },
  header: {
    fontFamily: '"Inter-Semibold", Helvetica',
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '24px',
  },
  text: {
    fontFamily: '"Inter-Regular", Helvetica',
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '18px',
    color: '#a6a6a6',
    letterSpacing: '0.24px',
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
        <p className={classes.header}>
        Get 1 gm of Gold
        </p>
        <p className={classes.text}>
          for ₹8,000 monthly spend
        </p>
       
      </div>
  
  );
};

export default Home;
