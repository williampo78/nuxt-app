export function useGeneral() {
    const collectionStore = useCollection()

    const isCollected = (id: number) => {
        return !!collectionStore.collections.find((c) => {
            return c.product_id === +id
        });
    }

    return {
        isCollected
    }
}