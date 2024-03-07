import { defineStore } from 'pinia';
import { getCollectionsApi, updateCollectionsApi } from '~/api/member';


import { Collection } from '~/types/collection';


export const useCollection = defineStore('collection', {
    state: () => ({
        collections: <Collection[]>[]

    }),
    actions: {
        async getCollections() {
            const token = useCookie('token')
            if (token.value) {
                const data = await getCollectionsApi();
                this.collections = data.result;
            }
        },
        async toggleColllection(payload: { id: number | string, isCollected: boolean }) {
            const modalStore = useModal()

            await updateCollectionsApi({
                product_id: payload.id,
                status: payload.isCollected ? -1 : 0,
            });

            await this.getCollections();

            modalStore.openModal({
                type: 'toast',
                message: payload.isCollected ? '已取消收藏' : '已加入收藏',
                icon: payload.isCollected ? 'uncollect' : 'collect'
            });
        }
    },
});
