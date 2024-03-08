import { defineStore } from 'pinia';
import { getCartCountApi } from '~/api/cart';


export const useCart = defineStore('cart', {
    state: () => ({
        count: <number>0

    }),
    actions: {
        async getCartCount() {
            const data = await getCartCountApi()
            this.count = data?.result.count || 0
        }
    },
    getters: {

    }
});
