import { defineStore } from 'pinia';
import { getMessagesApi } from '@/api/member'
import { Message } from '@/types/message'

export const useMessage = defineStore('message', {
    state: () => ({
        messages: <Message[]>[],
        totalRows: 0,
        totalPages: 0,
        currentPage: 1,
        totalUnread: 0,
    }),
    actions: {
        async getMessages() {
            const token = useCookie('token')
            if (!token.value) {
                return
            }
            try {
                const data = await getMessagesApi({
                    page: 1,
                    size: 50
                })
                this.messages = data.result.list
                this.totalRows = data.result.totalRows
                this.totalUnread = data.result.totalUnread
            } catch (error) { }
        }

    },
    getters: {

    }
});
