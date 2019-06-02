import axios from 'axios';

import firebase from '@utils/firebase';

export const getAuthorizationValue = async () => {
  return await firebase.currentUser.getIdToken().then(token => token);
}

const httpClient = async () => {
  return await axios.create({
    baseURL: process.env.apiUrl,
    timeout: 4000,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${await getAuthorizationValue()}`
    }
  });
}

export const applyHttpGet = async (url, options) => {
  const client = await httpClient();
  return await client.get(url, options)
    .catch(e => e.response);
}