import { type HandlerIntroduction } from 'kozz-types';
import { Socket } from 'socket.io-client';

export const registerIntroductionSocketEvent = (socket: Socket) => {
	const introduction: HandlerIntroduction = {
		methods: ['default', 'toimg', 'help'],
		name: 's',
		role: 'handler',
		timestamp: new Date().getTime(),
	};
	socket.emit('introduction', introduction);
};
