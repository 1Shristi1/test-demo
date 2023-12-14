import React from 'react'
import { createUseStyles } from 'react-jss';
import GoldCoin from './GoldCoin';
import Cashback from './Cashback';

const useStyles = createUseStyles({
  mainContainer: {
backgroundColor:'#131313',
minHeight: '100vh',
  },})

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}><Cashback /></div>
  )
}

export default Home