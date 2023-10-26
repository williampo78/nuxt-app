import { defineStore } from 'pinia';
type ModalType = 'simple' | 'alert' | 'modal' | ''
interface ModalConfig {
	type: ModalType;
	status: string;
	title: string;
	message: string;
}
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
		openModal(obj: ModalConfig) {
			this.modalShow = true
		},
		setType(value: ModalType) {
			this.type = value
		},
		setStatus(value: string) {
			this.status = value
		},
		setTitle(value: string) {
			this.title = value
		},
		setMessage(value: string) {
			this.message = value
		},
		setHeader(value: boolean) {
			this.hasHeader = value
		},

		closeModal() {
			this.modalShow = false;
			this.type = ''
			this.status = ''
		}
	},
});
