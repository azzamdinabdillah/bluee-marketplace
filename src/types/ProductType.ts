export interface ProductCardProps {
  id?: number;
  image?: string;
  title?: string;
  price?: string;
  sold?: string | number;
  tag?: string;
  onAddToCart?: () => void;
  onWishlist?: () => void;
  className?: string;
}
