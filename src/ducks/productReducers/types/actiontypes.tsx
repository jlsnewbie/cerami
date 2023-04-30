import {ProductTypes} from './types';

export interface ProductUpdate {
  type: ProductTypes.PRODUCTUPDATE;
  payload: Object[];
}

export interface Cart {
  type: ProductTypes.CART;
  payload: Object[];
}

export type ProductAction = ProductUpdate | Cart;
