import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  wrapper: {
    borderRadius: '16px',
    width: '100%',
    padding: '32px 16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    color: '#ffffff',
    backgroundImage: "url(cashback.png)",
    backgroundSize: '100% 100%', 
    
  },
  header: {
    fontFamily: '"Inter-Semibold", Helvetica',
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '22px',
  },
  text: {
    fontFamily: '"Inter-Regular", Helvetica',
    fontSize: '10px',
    fontWeight: '400',
    lineHeight: '16px',
    color: '#d8d8d8',
    letterSpacing: '0.24px',
  },
});

const Cashback = ({offerValue, minimumSpend}) => {
  const classes = useStyles();

  return (
 <div className={classes.wrapper}>
        <p className={classes.header}>
        {offerValue}% off on Gold Loan Interest
        </p>
        <p className={classes.text}>
        for ₹{minimumSpend} monthly spend
        </p>
       
      </div>
   
  
  );
};

export default Cashback;
