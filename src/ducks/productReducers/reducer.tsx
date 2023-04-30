import {produce} from 'immer';
import {ProductTypes, ProductState} from './types/types';
import {ProductAction} from './types/actiontypes';
import {ProductType, ProdHot, ProdCategory, Products} from '@utils/staticData';

const initialState = {
  products: Products,
  productCategory: ProdCategory,
  productType: ProductType,
  productHot: ProdHot,
  cart: [],
};

const productReducer = produce(
  (state: ProductState = initialState, action: ProductAction): ProductState => {
    switch (action.type) {
      case ProductTypes.PRODUCTUPDATE:
        return {
          ...state,
          products: {...action.payload},
        };
      case ProductTypes.CART:
        return {
          ...state,
          cart: action.payload,
        };
      default:
        return state;
    }
  },
);

export default productReducer;
