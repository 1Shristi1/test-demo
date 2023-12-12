import React from 'react'
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
  // upper: {
  //   width: '100%',
  // },
  innerConatiner: {
    borderRadius: '16px',
    backgroundColor: "black",
    display: "flex",
    justifyContent: "space-between",
    width: '100%',
    color: "white",
    padding: "10px",
    overflow: 'hidden'
  },
});

const Home = () => {
  const classes = useStyle();
  return (
      <div className={classes.innerConatiner}>


        <div>
          Random Text
        </div>
        <div>
          <img src="https://rupeek-website-assets.s3.ap-south-1.amazonaws.com/landing-pages/cards/goldReward1gm.png" alt="something" width="100%" height="auto" />
        </div>
      </div>
  )

}

export default Home