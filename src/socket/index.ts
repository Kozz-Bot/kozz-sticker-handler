import { Socket } from 'socket.io-client';
import { registerIntroductionSocketEvent } from './introduction';

export const registerSocketEventHandlers = (socket: Socket) => {
	socket.on('connect', () => {
		console.log(`[SERVIDOR] - CONEXÃO ESTABELECIDA COM ID ${socket.id}`);
		registerIntroductionSocketEvent(socket);
	});
};
