export interface CartItem {
    campaignThresholdDiscount: { campaignThresholdStatus: Boolean }
    campaignThresholdGiveaway: { campaignThresholdStatus: Boolean }
    itemList: {
        amount: number
        campaignDiscount: number
        campaignDiscountBrief: string
        campaignDiscountId: null | number
        campaignDiscountName: string
        campaignDiscountStatus: false
        campaignGiftAway: {
            campaignGiftBrief: string
            campaignGiftId: null | number
            campaignGiftName: string
            campaignGiftStatus: false
            campaignProdList: {
                assignedQty: 0
                productId: null | number
                productName: string
                productPhoto: string
                sellingPrice: 0

            }[]
        }
        itemCartDiscount: 0
        itemDiscount: 0
        itemId: null | number
        itemNo: string
        itemPhoto: string
        itemPrice: 0
        itemQty: 1
        itemSpec1: string
        itemSpec2: string
        itemStock: 0
        outOfStock: false
    }[]
    productID: null | number
    productName: string
    productNo: string
    productPhoto: string
    productType: string
    sellingPrice: number
}