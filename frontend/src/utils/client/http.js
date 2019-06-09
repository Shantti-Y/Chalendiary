import axios from 'axios';

import firebase from '@utils/firebase';

export const getAuthorizationValue = async () => {
  return await firebase.currentUser.getIdToken().then(token => token);
}

const httpClientWithAuth = async () => {
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
  const client = await httpClientWithAuth();
  return await client.get(url, options)
    .catch(e => e.response);
}

export const applyHttpPost = async (url, data, options) => {
  const client = await httpClientWithAuth();
  return await client.post(url, data, options)
    .catch(e => e.response);
}