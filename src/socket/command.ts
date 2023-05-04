import { Socket } from 'socket.io-client';
import { createMessagePayload } from '../respond';

export const registerCommandSocketEvent = (socket: Socket) => {
	socket.on('command', command => {
		console.log(command);
		socket.emit('reply', createMessagePayload(command.message, command.boundaryId));
	});
};
