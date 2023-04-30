import {useSelector, TypedUseSelectorHook} from 'react-redux';
import {State} from '@utils/types';

export const useTypedSelector: TypedUseSelectorHook<State> = useSelector;
