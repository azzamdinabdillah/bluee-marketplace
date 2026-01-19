export interface ProductType {
  id: number;
  image?: string | string[];
  title: string;
  price: string | number;
  sold?: string | number;
  tag?: string;
  store?: string;
  onAddToCart?: () => void;
  onWishlist?: () => void;
  className?: string;
  category?: string;
  categoryIcon?: string;
  quantity?: number;
  weight?: string;
  createdAt?: string;
  subCategory?: string;
}

export interface ProductDetailType extends ProductType {
  rating: number;
  reviewCount: number;
  condition: string;
  weight: string;
  warranty: string;
  orderStatus: string;
  soldCount: number;
}
