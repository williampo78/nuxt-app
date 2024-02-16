import { service } from '~/composables/api.ts';

/* 指定分類資料(分類結果 麵包屑用) */
export const getBreadcrumbApi = (data) => {
	return service({
		method: 'POST',
		url: '/v1/BreadcrumbCategory',
		data,
	});
};

//目前選取的分類
export const getAdvanceSearchCategoryApi = (data) => {
	return service({
		method: 'POST',
		url: '/v1/advanceSearchCategory',
		data,
	});
};

//取得商品列表
export const getAdvanceSearchListApi = (data) => {
	return service({
		method: 'POST',
		url: '/v1/advanceSearch',
		data,
	});
};


