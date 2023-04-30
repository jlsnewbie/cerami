import {createSelector} from 'reselect';
import {RootState} from '../combinedreducers';
import {State} from '@utils/types';

const getProducts = (state: State) => {
  state.productReducer;
};

export const getProductsSelector = createSelector(
  getProducts,
  productReducer => productReducer,
);
