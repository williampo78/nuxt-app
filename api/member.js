import { service } from '~/composables/api.ts';

//取得使用者資訊
export const getMemberInfoApi = () => {
	return service({
		url: '/membership',
		method: 'GET',
	});
};

//變更使用者資訊
export const updateMemberInfoApi = (data) => {
	return service({
		url: '/membership',
		method: 'PUT',
		data,
	});
};

//變更密碼
export const updatePasswordApi = (data) => {
	return service({
		url: '/membership/changePassWord',
		method: 'PUT',
		data,
	});
};

//取得點數
export const getMemberPointsApi = () => {
	return service({
		url: '/membership/point',
		method: 'POST',
	});
};

//取得快過期點數
export const getMemberExpiringPointsApi = () => {
	return service({
		url: '/membership/expiringPoint',
		method: 'POST',
	});
};

//取得常用收件人
export const getRecipientsApi = () => {
	return service({
		url: '/membership/notes',
		method: 'GET',
	});
};

//新增常用收件人
export const addRecipientApi = (data) => {
	return service({
		url: '/membership/notes',
		method: 'POST',
		data,
	});
};

//更新常用收件人
export const updateRecipientApi = (id, data) => {
	return service({
		url: `/membership/${id}/notes`,
		method: 'PUT',
		data,
	});
};

//刪除常用收件人
export const deleteRecipientsApi = (id) => {
	return service({
		url: `/membership/${id}/notes`,
		method: 'DELETE',
	});
};

//取得會員收藏
export const getCollectionsApi = () => {
	return service({
		url: '/membership/collections',
		method: 'GET',
	});
};

//加入/移除收藏
export const updateCollectionsApi = (data) => {
	return service({
		url: '/membership/collections',
		method: 'POST',
		data,
	});
};
//加入/移除收藏
export const deleteCollectionsApi = (data) => {
	return service({
		url: '/membership/collections/batchDelete',
		method: 'POST',
		data,
	});
};

//取得訊息列表
export const getMessagesApi = (data) => {
	return service({
		url: '/members/message',
		method: 'GET',
		params: data,
	});
};

//將訊息狀態改為已讀
export const readMessageApi = (id) => {
	return service({
		url: `/members/message/${id}`,
		method: 'PATCH',
	});
};
