export function useClickOutside() {
    const clickOutside = (cb: Function): void => {
        const body = document.querySelector('body')!
        body.addEventListener('click', () => {
            cb()
        })
    }


    return {
        clickOutside
    }
}
