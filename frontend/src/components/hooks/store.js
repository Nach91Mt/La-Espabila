export const initialStore = {
    menu: null
}

export default function storeReducer(store, action) {
    switch (action.type) {
        case "SET_MENU":
            return { ...store, menu: action.payload };
        default:
            return store;
    }
}