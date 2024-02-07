import { defineStore } from 'pinia';
import { RecipientData } from '@/types/recipient'


export const useRecipient = defineStore('recipient', {
    state: () => ({
        recipients: <RecipientData[]>[]
    }),
    actions: {
        setRecipient(payload: RecipientData[]) {
            const defaultRecipient = payload.find(recipient => {
                return recipient.is_default
            })
            // 如果有預設就把預設移至第一個
            if (defaultRecipient) {
                const index = payload.indexOf(defaultRecipient)
                payload.splice(index, 1)
                payload.unshift(defaultRecipient)
                this.recipients = payload
            }else{
                this.recipients = payload
            }
        }
    },
    getters: {

    }
});
