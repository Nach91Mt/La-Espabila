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
export const initialImgStore = {
    images: null
}
export function imgStoreReducer(imgStore, action) {
  switch (action.type) {
    case "SET_IMAGES":
      return { ...imgStore, images: action.payload };

    case "ADD_IMAGES":
      return {
        ...imgStore,
        images: imgStore.images
          ? [...imgStore.images, ...action.payload]
          : [...action.payload],
      };
    case "DELETE_ALL_IMAGES":
      return { ...imgStore, images: null };
    

    default:
      return imgStore;
  }
}
