import { defineStore } from 'pinia';

export const useMenu = defineStore('menu', {
    state: () => ({
        menuShow: <boolean>false,

    }),
    actions: {
        openMenu() {
            this.menuShow = true
            const body = document.querySelector('body')
            body!.style.height = '100vh'
            body!.style.overflow = 'hidden'
        },
        closeMenu() {
            this.menuShow = false
            const body = document.querySelector('body')
            body!.style.height = 'auto'
            body!.style.overflow = ''
        }

    },
});
