import { defineStore } from 'pinia';
import { getFooterListApi } from '@/api/footer';
interface FooterList {
    field_id: string
    field_items: {
        content_id: number
        content_name: string
        content_target: string
        content_url: string
    }[]
    field_type: string
    field_value: string
}


export const useFooter = defineStore('footer', {
    state: () => ({
        footerList: ref<FooterList[]>([]),
    }),
    actions: {
        async getFooter() {
            const data = await getFooterListApi();
            this.footerList = data.result;
        },
    },

});
