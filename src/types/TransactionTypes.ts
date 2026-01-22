export interface TransactionType {
  id: number;
  storeName: string;
  sellerName: string;
  storeAvatar: string;
  grandTotal: string;
  totalProducts: number;
  status: 'completed' | 'pending' | 'cancelled';
}
