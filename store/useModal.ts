import { defineStore } from 'pinia';
type ModalType = 'simple' | 'alert' | 'modal' | ''
export const useModal = defineStore('modal', {
	state: () => ({
		modalShow: <boolean>false,
		type: <ModalType>'',
		status: 'suceess',
		title: <string>'',
		message: <string>'',
		hasHeader: <boolean>true,
		data: <any>null,
	}),
	actions: {
		openModal(value: boolean) {
			this.modalShow = value;
		},
		setType(value: ModalType) {
			this.type = value
			this.status = 'error'
			// setTimeout(() => {
			// 	this.closeModal()
			// }, 2000);
		},
		closeModal() {
			this.modalShow = false;
			this.type = ''
			this.status = ''
		}
	},
});
