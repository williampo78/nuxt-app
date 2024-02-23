import { defineStore } from 'pinia';
import { getAdsApi } from '@/api/ads'
import { TextSlot } from '@/types/ads'

export const useAds = defineStore('ads', {
    state: () => ({
        nav: <TextSlot[]>[]

    }),
    actions: {
        async getAds() {
            const data = await getAdsApi()
            console.log(data.result);
            this.nav = data.result.H000
        },
    },
});
