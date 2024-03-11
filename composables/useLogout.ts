export function useLogOut() {
    const modalStore = useModal()
    const router = useRouter()
    const memberStore = useMember()
    const collectStore = useCollection()
    const messageStore = useMessage()
    const recipientStore = useRecipient()
    const token = useCookie('token')

    const logOut = () => {
        memberStore.$reset()
        collectStore.$reset()
        messageStore.$reset()
        recipientStore.$reset()
        token.value = null
        router.push('/')
        modalStore.openModal({
            type: 'toast',
            message: '登出成功',
            icon: 'success'
        })
    }


    return {
        logOut
    }
}