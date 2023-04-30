import {ProdHotType} from '@utils/staticData';

export enum ProductTypes {
  PRODUCTS = 'PRODUCTS',
  PRODUCTUPDATE = 'PRODUCTUPDATE',
  CART = 'CART',
}

export interface ProductState {
  products: Object[];
  productCategory: Object[];
  productType: string[];
  productHot?: ProdHotType;
  cart: Object[];
}
