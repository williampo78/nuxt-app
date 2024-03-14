import { defineStore } from 'pinia';
type ModalType = 'toast' | 'alert' | 'custom' | ''
type Icon = 'success' | 'error' | 'warning' | 'collect' | 'uncollect' | 'cart-add' | ''
interface CustomConfig {
	type: 'custom' | '';
	icon?: Icon;
	name: string;
	title?: string;
	message?: string;
	hasHeader?: boolean
	data?: any
}
interface ToastConfig {
	type: 'toast';
	icon?: Icon;
	title?: string;
	message: string;
	data?: any
}
interface AlertConfig {
	type: 'alert';
	icon?: Icon;
	title: string;
	message: string;
	data?: any
}

export const useModal = defineStore('modal', {
	state: () => ({
		modalShow: <boolean>false,
		type: <ModalType>'',
		icon: <Icon>'success',
		title: <string>'',
		message: <string>'',
		hasHeader: <boolean>true,
		name: <string>'',
		data: <any>null,
	}),
	actions: {
		openModal(config: CustomConfig | ToastConfig | AlertConfig) {
			this.type = config.type || ''
			this.icon = config.icon || 'success'
			this.title = config.title || ''
			this.message = config.message || ''
			this.modalShow = true
			this.data = config.data
			if (config.type === 'toast') {
				setTimeout(() => {
					this.closeModal()
				}, 1200);
			}
			if (config.type === 'custom') {
				this.hasHeader = config.hasHeader || false
				this.name = config.name
			}
			const body = document.querySelector('body')
			body!.style.overflow = 'hidden'
		},
		closeModal() {
			this.type = ''
			this.icon = ''
			this.message = ''
			this.title = ''
			this.modalShow = false;
			this.hasHeader = true
			this.name = ''
			this.data = null

			const body = document.querySelector('body')
			body!.style.overflow = 'unset'
		}
	},
});
