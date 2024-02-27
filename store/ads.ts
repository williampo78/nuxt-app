import { defineStore } from 'pinia';
import { getAdsApi } from '@/api/ads'
import { TextSlot, ImageSlot, ProductSlot, ProdctImageSlot } from '@/types/ads'

export const useAds = defineStore('ads', {
    state: () => ({
        ads: {
            H000: <TextSlot[]>[], //nav
            H010A: <ImageSlot[]>[], //置頂banner
            H020A: <ImageSlot[]>[], //carousel(SP)
            H020B: <ImageSlot[]>[], //carousel(PC)
            H030A: <TextSlot[]>[], //熱門關鍵字(SP)
            H030B: <TextSlot[]>[], //熱門關鍵字(PC)
            H040: <ImageSlot[]>[], //活動 Banner (項鍊)
            H050: <ImageSlot[]>[],//活動 Banner
            H060: <ProductSlot>{}, //今日最熱銷
            H070: <ImageSlot[]>[],//熱銷品牌
            H080A: <ProdctImageSlot>{},//品牌專館/特色專館(SP)
            H080B: <ProdctImageSlot>{},//品牌專館/特色專館(PC)
            H100A: <ProductSlot[]>[], //大類樓層(1)
            H100B: <ProductSlot[]>[], //大類樓層(2)
            H100C: <ProductSlot[]>[], //大類樓層(3)
            H100D: <ProductSlot[]>[], //大類樓層(4)
            H100E: <ProductSlot[]>[], //大類樓層(5)
            H110: <ImageSlot[]>[],//好文開箱
            H120: <ImageSlot[]>[],//量身推薦
            H130: <ProductSlot[]>[], //猜你喜歡

        }
    }),
    actions: {
        async getAds() {
            const data = await getAdsApi()
            console.log(data.result);
            this.ads = data.result
        },
    },
});
