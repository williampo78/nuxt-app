import { defineStore } from 'pinia';
export const useModal = defineStore('modal', {
	state: () => ({
		modalShow: false,
	}),
	actions: {
		openModal(value) {
			this.modalShow = value;
			setTimeout(() => {
				this.modalShow = false;
			}, 2000);
		},
	},
});
