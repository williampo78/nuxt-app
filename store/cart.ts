import { defineStore } from 'pinia';
import { getCartCountApi } from '~/api/cart';
import { CartItem } from '~/types/cart'


export const useCart = defineStore('cart', {
    state: () => ({
        count: <number>0,
        quantity: <number>1, //要購買的數量,
        cartInfo: {
            checkout: 0,
            discount: 0,
            feeInfo: {
                free_threshold: 0,
                notice: '',
                noticeDetil: '',
                shopping_fee: 0
            },
            giftAway: [],
            list: <CartItem[]>[],
            paymentMethod: [],
            point: {
                discountMax: <null | number>null,
                discountRate: <null | number>null,
                exchangeRate: <null | number>null,
                point: <null | number>null
            },
            productRow: {
                dradvice: 0,
                supplier: 0,
            },
            shippingFee: 0,
            thresholdAmount: 0,
            thresholdDiscount: [],
            thresholdDiscountDisplay: false,
            thresholdGiftAway: [],
            totalPrice: 0
        }
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
        setCartList(payload: any) {
            this.cartInfo = payload
        }
    },
    getters: {

    }
});
