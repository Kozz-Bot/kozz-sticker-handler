import { Socket } from 'socket.io-client';
import { createMessagePayload, createStickerPayload } from '../respond';
import { type Command } from 'kozz-types';

export const registerCommandSocketEvent = (socket: Socket) => {
	socket.on('command', (command: Command) => {
		console.log(`Got command with method ${command.method}`);

		if (command.message.quotedMessage) {
			return socket.emit(
				'reply_with_sticker',
				createStickerPayload(command.message.quotedMessage, command.boundaryId)
			);
		}

		if (command.message.media) {
			return socket.emit(
				'reply_with_sticker',
				createStickerPayload(command.message, command.boundaryId)
			);
		}

		return socket.emit(
			'reply_with_text',
			createMessagePayload(command.message, command.boundaryId)
		);
	});
};
