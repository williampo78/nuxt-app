import { defineStore } from 'pinia';
import { getCollectionsApi } from '~/api/member';

import { Collection } from '~/types/collection';


export const useCollection = defineStore('collection', {
    state: () => ({
        collections: <Collection[]>[]

    }),
    actions: {
        async getCollections() {
            const data = await getCollectionsApi();
            this.collections = data.result;
        }
    },
});
