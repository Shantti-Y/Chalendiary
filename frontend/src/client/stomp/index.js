import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';

// TODO: rootUrl should be changed to a url beginning with'socket/v1'
const socket = new SockJS(`${process.env.rootUrl}/ws-registry`);

const client = Stomp.over(socket);

export default client;