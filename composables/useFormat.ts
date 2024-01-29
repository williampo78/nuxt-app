export function useFormat() {
    const formattedMobile = (mobile: string): string => {
        let formattedPhoneNumber = mobile.replace(/^(\d{4})(\d{3})(\d{3})$/, "$1-$2-$3");
        return formattedPhoneNumber
    }


    return {
        formattedMobile
    }
}