import { defineStore } from 'pinia';
import { getCartCountApi } from '~/api/cart';


export const useCart = defineStore('cart', {
    state: () => ({
        count: <number>0,
        quantity: <number>1 //要購買的數量

    }),
    actions: {
        async getCartCount() {
            const data = await getCartCountApi()
            this.count = data?.result.count || 0
        },
        setCartCount(payload: number) {
            this.count = payload
        },
        setQuantity(payload: number) {
            this.quantity = payload
        },
    },
    getters: {

    }
});
