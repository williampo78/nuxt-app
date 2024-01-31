import { service } from '~/composables/api.ts';

export const getMemberInfoApi = () => {
	return service({
		url: '/membership',
		method: 'GET',
	});
};

export const updateMemberInfoApi = (data) => {
	return service({
		url: '/membership',
		method: 'PUT',
		data,
	});
};

export const getMemberPointsApi = () => {
	return service({
		url: '/membership/point',
		method: 'POST',
	});
};
export const getMemberExpiringPointsApi = () => {
	return service({
		url: '/membership/expiringPoint',
		method: 'POST',
	});
};
