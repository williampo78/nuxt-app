import { getStockApi } from '@/api/product'
import { Spec } from '@/types/product';


const stock = ref({ limitedQty: 0, specifiedQty: 0, stockQty: 0 })

export function useProduct() {
    const orderSpec = ref({} as Spec); //商品規格



    const getStock = async () => {
        let specId = null
        if (orderSpec.value.spec_dimension === 0) {
            specId = orderSpec.value.spec_info[0].item_id
        }
        else if (orderSpec.value.spec_dimension === 1) {
            const firstAvailableSpec = orderSpec.value.spec_info.find(info => info.stock_qty > 0)
            if (firstAvailableSpec) {
                specId = firstAvailableSpec.item_id
            }
        }

        const data = await getStockApi({ item_id: specId })
        if (!data.error_code) {
            stock.value = data.result
        }
    }
    return {
        orderSpec,
        stock,
        getStock
    }
}