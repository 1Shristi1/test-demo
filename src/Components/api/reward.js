import axios from 'axios';

export const getRewardsDetail =  async (token,promisedId) => {
    try {
      const url = `http://165.22.212.93:8000//rest/v1/promise_reward?promised_reward_id=eq.${promisedId}&select=*`;
      const response = await axios.get(url, {
        headers: {
          Authorization : `Bearer ${token}`,
          'apikey' : token,
        }
      });
      const data =  response.data[0];
      return data;

    } catch (error) {
      console.error(error);
      throw error;
    }
}

export const getOffersDetail =  async (token,offerId) => {
  try {
    const url = `http://165.22.212.93:8000//rest/v1/offer?offer_id=eq.${offerId}&select=*`;
    const response = await axios.get(url, {
      headers: {
        Authorization : `Bearer ${token}`,
        'apikey' : token,
      }
    });
    const data = response.data[0];
    return data;

  } catch (error) {
    console.error(error);
    throw error;
  }
}