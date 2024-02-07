export function usePayments() {
    interface Payment  {
        value: string;
        icon: string;
        alt: string;
        text: string;
    }

    const payment = ref<string[]>([]) //API 回傳值

    const PAYMENTS: Payment[] = [{
        value: 'TAPPAY_CREDITCARD',
        icon: 'icon-creditcard.svg',
        alt: '信用卡',
        text: '信用卡一次付清',
    },
    {
        value: 'TAPPAY_INSTAL',
        icon: 'icon-creditcard.svg',
        alt: '信用卡',
        text: '信用卡分期'
    },
    {
        value: 'TAPPAY_LINEPAY',
        icon: 'icon-linepay.svg',
        alt: 'Line Pay',
        text: 'Line Pay'
    },
    {
        value: 'TAPPAY_JKOPAY',
        icon: 'icon-jko.png',
        alt: '街口支付',
        text: '街口支付'
    }]

    const availablePayments = computed((): Payment[] => {
        return PAYMENTS.filter(p => {
            return payment.value.includes(p.value)
        })
    })

    return {
        payment,
        availablePayments
    }
}