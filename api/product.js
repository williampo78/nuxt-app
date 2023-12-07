import { service } from '~/composables/api.ts';

//取得產品分類
export const getProductCategoryApi = () => {
	return service({
		method: 'GET',
		url: '/v1/product/category',
	});
};

//取得產品規格
export const getProductSpecApi = (id) => {
	return service({
		url: `/v1/productSpec/${id}`,
		method: 'GET',
	});
};

//取得產品資訊
export const getProductInfoApi = (id) => {
	return service({
		url: `/v1/product/${id}`,
		method: 'GET',
		params: { detail: true },
	});
};
