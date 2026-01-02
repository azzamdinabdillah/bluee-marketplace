export interface ProductType {
  id: number;
  image?: string;
  title: string;
  price: string;
  sold?: string | number;
  tag?: string;
  store: string;
  onAddToCart?: () => void;
  onWishlist?: () => void;
  className?: string;
}

export interface ProductDetailType extends ProductType {
  category: string;
  rating: number;
  reviewCount: number;
  condition: string;
  weight: string;
  warranty: string;
  orderStatus: string;
  soldCount: number;
}
