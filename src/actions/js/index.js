import { debug } from './../components/func/Func';

debug('action/index.js');
export function showModal(id, category) {
    return {
        type: "SHOWMODAL",
        id: id,
        modalCategory: category,
        category: category
    };
}

export function closeModal() {
    console.log('closeModal');
    return {
        type: "CLOSEMODAL"
    };
}
