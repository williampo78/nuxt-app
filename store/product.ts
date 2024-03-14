import { defineStore } from 'pinia';

export const useProduct = defineStore('product', {
    state: () => ({
        stock: { limitedQty: 0, specifiedQty: 0, stockQty: 0 },
        specId: <number | null>null,//選取的規格id,
        count: <number>1 //要購買的數量


    }),
    actions: {
        getStock(payload: { limitedQty: number; specifiedQty: number; stockQty: number }) {
            this.stock.limitedQty = payload.limitedQty || 0
            this.stock.specifiedQty = payload.specifiedQty || 0
            this.stock.stockQty = payload.stockQty || 0
        },
        setSpecId(id: number) {
            this.specId = id
        },
        setProductCount(payload: number) {
            this.count = payload
        }

    },
    getters: {

    }
});
