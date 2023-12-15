import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss';
import GoldCoin from './GoldCoin';
import Cashback from './Cashback';
import { getOffersDetail, getRewardsDetail } from './api/reward';

const useStyles = createUseStyles({
  mainContainer: {
    backgroundColor: '#131313',
    minHeight: '100vh',
  },
})

const Home = () => {
 // const [tokenState, setTokenState] = useState(false);
  const [bannerData, setBannerData] = useState({
    offerType: "",
    offerValue: "",
    minimumSpend: "",
  })
  const classes = useStyles();

  // useEffect(() => {
  //   const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJhbm9uIiwKICAgICJpc3MiOiAic3VwYWJhc2UtZGVtbyIsCiAgICAiaWF0IjogMTY0MTc2OTIwMCwKICAgICJleHAiOiAxNzk5NTM1NjAwCn0.dc_X5iR_VP_qT0zsiyj_I_OZ2T9FtRU2BBNWN8Bu4GE";
  //   const promised_id = "765272f1-e525-4228-8123-5faf47a365a7";

  //   const sessionData = {
  //     'token': token,
  //     'cardId': promised_id

  //   }
  //   sessionStorage.setItem('sessionData', JSON.stringify(sessionData));
  //   setTokenState(1);
  // }, []);


  const fetchRewardType = async (token, promised_id) => {
    try {
      const rewardData = await getRewardsDetail(token, promised_id);
      const offerid = rewardData.offer_id;

      const offerData = await getOffersDetail(token, offerid);
      const { offer_value: offervalue, offer_type: offertype, minimum_spend: minimumspend } = offerData;
      console.log(offertype, "  ", offervalue, "  ", minimumspend);
      setBannerData({
        offerType: offertype,
        offerValue: offervalue,
        minimumSpend: minimumspend
      });


    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    //  if(tokenState === 1)
    //  {
    // const sessiondata = sessionStorage.getItem('sessionData');

    // const data = JSON.parse(sessiondata);
    // console.log(data);
    // const token = data.token;
    // const promised_id = data.cardId;
    // const token = sessionStorage.getItem('token');
    // const promised_id = sessionStorage.getItem('cardId');
    const token = document.cookie
      .split('; ')
      .find(row => row.startsWith('token='))
      .split('=')[1];

    const promised_id = document.cookie
      .split('; ')
      .find(row => row.startsWith('cardId='))
      .split('=')[1];

      fetchRewardType(token, promised_id);


  }, []);
  return (
    < div className={classes.mainContainer}>

      {bannerData.offerType === "GOLDCOIN"  && <GoldCoin offerValue={bannerData.offerValue} minimumSpend={bannerData.minimumSpend} />}
      {bannerData.offerType === "CASHBACK"  && <Cashback offerValue={bannerData.offerValue} minimumSpend={bannerData.minimumSpend} /> }
      
    </div>

  )
}

export default Home