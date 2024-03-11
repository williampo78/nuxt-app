export function useFormat() {
    const formattedMobile = (mobile: string): string => {
        let formattedPhoneNumber = mobile.replace(/^(\d{4})(\d{3})(\d{3})$/, "$1-$2-$3");
        return formattedPhoneNumber
    }


    return {
        formattedMobile
    }
}

export function formatNumberWithCommas(number: string | number): string | number {
    if (number) {

        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
        return ''
    }
}

export function checkPasswordValidation(password: string) {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,12}$/
    return regex.test(password)
}