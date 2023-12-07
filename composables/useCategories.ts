import { getProductCategoryApi } from '@/api/product'

export function useCategories() {
    const menuStore = useMenu();
    const subCategories = ref<any>({})
    const chosenCategoryId = ref<number | null>(null)

    const getProductCategories = async () => {
        const data = await getProductCategoryApi()
        menuStore.setCategory(data.result)
    }


    return {
        getProductCategories,
        subCategories,
        chosenCategoryId,
    }
}