import { defineStore } from 'pinia';
export const useModal = defineStore('modal', {
	state: () => ({
		open: true,
	}),
});
