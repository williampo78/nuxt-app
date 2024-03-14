import { defineStore } from 'pinia';

export const useProduct = defineStore('product', {
    state: () => ({
        stock: { limitedQty: 0, specifiedQty: 0, stockQty: 0 },
        specId: <number | null>null //選取的規格id


    }),
    actions: {
        getStock(payload: { limitedQty: number; specifiedQty: number; stockQty: number }) {
            this.stock.limitedQty = payload.limitedQty || 0
            this.stock.specifiedQty = payload.specifiedQty || 0
            this.stock.stockQty = payload.stockQty || 0
        },
        setSpecId(id: number) {
            this.specId = id
        }

    },
    getters: {

    }
});
