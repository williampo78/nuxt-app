import { defineStore } from 'pinia';
type ModalType = 'simple' | 'alert' | 'modal' | ''
interface ModalConfig {
	type: 'modal' | '';
	icon?: string;
	name: string;
	title: string;
	message?: string;
}
interface SimpleConfig {
	type: 'simple';
	icon: string;
	title?: string;
	message: string;
}
interface AlertConfig {
	type: 'alert';
	icon?: string;
	title: string;
	message: string;
}

export const useModal = defineStore('modal', {
	state: () => ({
		modalShow: <boolean>false,
		type: <ModalType>'',
		icon: <string>'suceess',
		title: <string>'',
		message: <string>'',
		hasHeader: <boolean>true,
		data: <any>null,
	}),
	actions: {
		openModal(config: ModalConfig | SimpleConfig | AlertConfig) {
			this.type = config.type || ''
			this.icon = config.icon || ''
			this.title = config.title || ''
			this.message = config.message || ''
			this.modalShow = true
			if (config.type === 'simple') {
				setTimeout(() => {
					this.closeModal()
				}, 2000);
			}
		},

		closeModal() {
			this.type = ''
			this.icon = ''
			this.message = ''
			this.title = ''
			this.modalShow = false;
			this.hasHeader = true
		}
	},
});
