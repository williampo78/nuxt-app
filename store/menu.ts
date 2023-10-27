import { defineStore } from 'pinia';

export const useMenu = defineStore('menu', {
    state: () => ({
        menuShow: <boolean>false,

    }),
    actions: {
        openMenu() {
            this.menuShow = true
        },
        closeMenu() {
            this.menuShow = false
        }

    },
});
