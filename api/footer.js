import { service } from '~/composables/api.ts';

export const getFooterListApi = () => {
	return service({
		url: '/v1/footer',
		method: 'GET',
	});
};
export const getFooterContentApi = (id) => {
	return service({
		url: `/v1/footer/${id}`,
		method: 'GET',
	});
};

export const getQaListApi = () => {
  return service({
		url: `/v1/qa`,
		method: 'GET',
	});
};

//與我們聯繫表單
export const sendContactFormApi = (data) => {
  return service({
		url: `/v1/footer/contact`,
		method: 'POST',
		data
	});
};


