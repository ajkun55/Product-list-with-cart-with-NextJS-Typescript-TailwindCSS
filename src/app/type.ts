export type itemData = {
  name: string;
  category: string;
  price: number;
  imageMobile: string;
  imageTab: string;
  imageDesk: string;
  imageThumbnail: string;
  addItem: (name: string, price: number, imageThumbnail: string) => void;
  decreaseItem: (itemIndex: number) => void;
  list: listData;
};
export type cartData = {
  name?: string;
  price?: number;
  imageThumbnail?: string;
  quantity?: number;
};
export type listData = {
  list: cartData[];
  removeItem: (index: number) => void;
  setList: React.Dispatch<React.SetStateAction<cartData[]>>;
};
export type confirmData = {
  list: cartData[];
  startNew: () => void;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};
