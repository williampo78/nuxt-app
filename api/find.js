import { service } from '~/composables/api.ts';

export const getCaptchaApi = () => {
	return service({
		url: '/captcha',
		method: 'GET',
	});
};

/* 指定分類資料(分類結果 麵包屑用) */
export const getBreadcrumbApi = (data) => {
	return service({
		method: 'POST',
		url: '/v1/BreadcrumbCategory',
		data,
	});
};
