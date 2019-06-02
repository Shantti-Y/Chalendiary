import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';

import { getAuthorizationValue } from '@utils/client/http';

let clientInstance = null;

export const client = () => {
  if (clientInstance !== null){
    return clientInstance
  } else {
    const socket = new SockJS(`${process.env.rootUrl}/ws-registry`);
    clientInstance = Stomp.over(socket);
    return clientInstance;
  }
}

export const connectWebSocketToServer = async (id, callback) => {
  client().connect({ login: id, passcode: await getAuthorizationValue() }, async frame => {
    client().debug('Connected: ' + frame);
    await callback();
  });
}

export const subscribeReceivedEvent = (url, callback) => {
  client().subscribe(url, response => {
    callback(JSON.parse(response.body));
  });
}