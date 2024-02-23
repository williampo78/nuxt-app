import { defineStore } from 'pinia';
import { getAdsApi } from '@/api/ads'
import { TextSlot,ImageSlot } from '@/types/ads'

export const useAds = defineStore('ads', {
    state: () => ({
        nav: <TextSlot[]>[],
        H040: <ImageSlot[]>[],
        H050:<ImageSlot[]>[],
        H020A:<ImageSlot[]>[], //手機版carousel
        H020B:<ImageSlot[]>[], //電腦版carousel

    }),
    actions: {
        async getAds() {
            const data = await getAdsApi()
            console.log(data.result);
            this.nav = data.result.H000
            this.H040 = data.result.H040
            this.H050 = data.result.H050
            this.H020A = data.result.H020A
            this.H020B = data.result.H020B
        },
    },
});
