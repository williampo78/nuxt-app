import { service } from '~/composables/api.ts';

export const getMemberInfoApi = () => {
	return service({
		url: '/membership',
		method: 'GET',
	});
};

export const getMemberPointsApi = () => {
	return service({
		url: '/membership/point',
		method: 'POST',
	});
};
