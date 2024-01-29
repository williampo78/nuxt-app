import { getProductCategoryApi } from '@/api/product'
import { FurtherCategory } from '~/types/category';


export function useCategories() {
    const menuStore = useMenu();
    const router = useRouter()
    const subCategories = ref<any>({}) //第二層分類
    const chosenCategoryId = ref<number | null>(null)

    //整個分類
    const categories = computed(() => {
        return menuStore.categories;
    });

    //取得分類總覽
    const getProductCategories = async () => {
        const data = await getProductCategoryApi()
        menuStore.setCategory(data.result)
    }

    const selectCategory = (category: any) => {
        subCategories.value = category.cateInfo;
        chosenCategoryId.value = category.id;
    };

    const gotoCate = (item: FurtherCategory) => {
        if (item.type === 'P') {
            router.push({
                path: '/find/category',
                query: { category: item.id },
            });
        } else if (item.type === 'M') {
            router.push({
                path: `/campaign/${item.campaignUrlCode}`,
                query: { eventId: item.campaignID },
            });
        }
    };



    return {
        subCategories,
        chosenCategoryId,
        categories,
        getProductCategories,
        selectCategory,
        gotoCate,
    }
}