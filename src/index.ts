import dotenv from 'dotenv';
dotenv.config();
import { io } from 'socket.io-client';
import { registerSocketEventHandlers } from './socket';

const socket = io(`${process.env.GATEWAY_URL}`);

console.log('aaa');

registerSocketEventHandlers(socket);
