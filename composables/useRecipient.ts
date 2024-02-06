import { getRecipientsApi } from '@/api/member'
import { RecipientData } from '@/types/recipient'
export function useRecipients() {
    const recipientStore = useRecipient()
    const recipients = ref<RecipientData[]>([])

    //取得收件人列表
    const getRecipients = async () => {
        const data = await getRecipientsApi()
        console.log('recipient data',data);

        recipientStore.setRecipient(data.result)
    }

    const fullAddress = (recipient: RecipientData): string => {
        return `${recipient.zip_code} ${recipient.city_name}${recipient.district_name}${recipient.address}`;
    };


    return {
        recipients,
        getRecipients,
        fullAddress
    }
}