export function useValidate() {
    const modalStore = useModal();
    const mobile = ref<string>('')
    const password = ref<string>('')

    const validateMobile = (): boolean => {
        mobile.value = mobile.value.trim()
        const regex = /^09[0-9]{8}$/
        const result = regex.test(mobile.value)

        if (!result) {
            modalStore.openModal({
                type: 'alert',
                title: '手機格式錯誤',
                icon: 'error',
                message: '請輸入正確手機格式',
            });
        }
        return result
    }

    const validatePassword = (): boolean => {
        mobile.value = mobile.value.trim()
        const regex = /^(?=.*[a-zA-Z])(?=.*\d).{8,12}$/
        const result = regex.test(mobile.value)

        if (!result) {
            modalStore.openModal({
                type: 'alert',
                title: '密碼格式錯誤',
                icon: 'error',
                message: '請輸入正確密碼格式',
            });
        }
        return result
    }

    return {
        mobile,
        password,
        validateMobile,
        validatePassword
    }
}