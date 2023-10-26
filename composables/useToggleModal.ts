import { ref } from 'vue';
import { useModal } from '@/store/modal';
export function useToggleModal() {
    type ModalType = 'simple' | 'alert' | 'modal' | ''
    interface ModalConfig {
        type: ModalType;
        status: string;
        title: string;
        message: string;
        hasHeader: boolean;
    }

    const modalStore = useModal();

    const modalConfig = ref<ModalConfig>({
        title: <string>'Modal Title',
        status: <string>'',
        message: <string>'Modal Message',
        type: <ModalType>'',
        hasHeader: <boolean>true, // 預設顯示header
    });

    const openModal = (config: ModalConfig) => {
        modalStore.setTitle(config.title)
        modalStore.setType(config.type)
        modalStore.setStatus(config.status)
        modalStore.setMessage(config.message)
        modalStore.setHeader(config.hasHeader)


        modalStore.openModal(config)
    }

    return {
        modalConfig,
        openModal
    };
}
