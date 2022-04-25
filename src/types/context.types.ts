export interface IFavoriteContext {
  favorite: {[key: string]: boolean};
  setFavorite: (favorite: {[key: string]: boolean}) => void;
}
