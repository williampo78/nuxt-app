import { service } from '~/composables/api.ts';

export const getCartCountApi = () => {
	return service({
		url: '/shopping/getCartCount',
		method: 'GET',
	});
};

//新增/移除購物車商品
export const addCartApi = (data) => {
	return service({
		url: '/shopping/addGoodsQty',
		method: 'POST',
		data
	});
};

//新增/移除購物車商品
export const updateCartApi = (data) => {
	return service({
		url: '/shopping/setMemberCart',
		method: 'POST',
		data
	});
};

//新增/移除購物車商品
export const getCartListApi = (data) => {
	return service({
		url: '/shopping/shoppingCartData',
		method: 'POST',
		data
	});
};

