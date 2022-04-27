import {IDiscountData} from './discount.types';

export interface IFavoriteContext {
  favorite: IDiscountData[];
  setFavorite: (favorite: IDiscountData[]) => void;
}
