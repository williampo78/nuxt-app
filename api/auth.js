import { service } from '~/composables/api.ts';

export const getCaptchaApi = () => {
	return service({
		url: '/captcha',
		method: 'GET',
	});
};

/* 會員登入 */
export const loginApi = (data) => {
	return service({
		method: 'POST',
		url: '/members/login',
		data,
	});
};
