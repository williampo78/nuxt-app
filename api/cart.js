import { service } from '~/composables/api.ts';

export const getCartCountApi = () => {
	return service({
		url: '/shopping/getCartCount',
		method: 'GET',
	});
};

