import { MessageReceived, SendMessagePayload } from 'kozz-types';

export const createMessagePayload = (
	message: MessageReceived,
	boundaryId: string
): SendMessagePayload => {
	return {
		body: 'Mande o comando na legenda da imagem ou video. Logo menos vc poderá voltar a responder mensagem pra fazer figurinhas',
		chatId: message.fromHostAccount ? message.to : message.from,
		platform: 'WA',
		timestamp: new Date().getTime(),
		quoteId: message.id,
		boundaryId,
	};
};

export const createStickerPayload = (
	message: MessageReceived,
	boundaryId: string
): SendMessagePayload => {
	return {
		body: '',
		media: message.media,
		chatId: message.fromHostAccount ? message.to : message.from,
		platform: 'WA',
		timestamp: new Date().getTime(),
		quoteId: message.id,
		boundaryId,
	};
};
