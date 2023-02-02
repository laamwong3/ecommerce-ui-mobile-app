import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";

export interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  image: string;
  rating: Rating;
}

enum Category {
  Electronics = "electronics",
  Jewelery = "jewelery",
  MenSClothing = "men's clothing",
  WomenSClothing = "women's clothing",
}

interface Rating {
  rate: number;
  count: number;
}

export interface ProductCardProps {
  item: Products;
  index: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
  bottomSheetModalRef: React.RefObject<BottomSheetModalMethods>;
  // setIsSnackbarVisible?: React.Dispatch<React.SetStateAction<boolean>>;
  // handlePresentModalPress: () => void;
  // setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export type DetailsCardProps = Pick<ProductCardProps, "item">;
