import { service } from '~/composables/api.ts';

export const getUserInfoApi = () => {
	return service({
		url: '/membership',
		method: 'GET',
	});
};
