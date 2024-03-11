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
            const token = useCookie('token')
            const router = useRouter()
            if (!token.value) {
                modalStore.openModal({
                    type: 'toast',
                    message: '請先登入',
                    icon: 'warning'
                });
                router.push('/login')
                return
            }
            try {
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
            } catch (error) { }
        }
    },
});
