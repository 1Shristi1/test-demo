import React from 'react'
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
  wrapper:{
    borderRadius: '16px',
    backgroundColor: "#262626",
    padding: '24px 16px',
    width: '100%',
    color: "white",
    backgroundImage: "url(couponBackground.png)",
    backgroundSize: 'cover',
    display:'flex',
    justifyContent: 'space-between',
  },
  innerConatiner: {
  
    display: "flex",
    flexDirection: "column",
    gap: '8px',
  },
  text: {
    fontFamily: '"Inter- Medium", Helvetica',
    fontSize: "12px",
    fontWeight: "500",
    lineHeight: "18px",
  },
  header: {
fontFamily: '"Inter-Semibold", Helvetica',
fontSize: "14px",
fontWeight: "600",
lineHeight: "22px",

  },
});

const Home = () => {
  const classes = useStyle();
  return (
    <div className={classes.wrapper}>
      <div className={classes.innerConatiner}>
      <p className={classes.text}>
        My reward
      </p>
      <p className={classes.header}>
      50% off on Gold 
Loan Interest
      </p>
      {/* <div className={classes.treasureImage}>  */}
  
      </div>
      <img src= "https://cdn-icons-png.flaticon.com/512/8913/8913819.png " alt= "gift" height="100px" width= "100px"/>

     
    </div>
  )

}

export default Home