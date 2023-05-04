import { MessageReceived, SendMessagePayload } from 'kozz-types';

export const createMessagePayload = (
	message: MessageReceived,
	boundaryId: string
): SendMessagePayload => {
	return {
		body: 'To be implemented',
		chatId: message.fromHostAccount ? message.to : message.from,
		platform: 'WA',
		timestamp: new Date().getTime(),
		quoteId: message.id,
		boundaryId,
	};
};
