interface IDiscountLinks {
  site: string;
  instagram?: string;
  twitter?: string;
  vk?: string;
  ok?: string;
}

export interface IDiscountData {
  id: string;
  rusTitle: string;
  engTitle: string;
  routeName: string;
  socialLinks: IDiscountLinks;
  img: HTMLImageElement;
  shortDesc: string;
  address: string;
  discount: string;
  promocode: string;
  instructions: string;
}

enum ECities {
  MINSK = 'minsk',
  GOMEL = 'gomel',
  KYIV = 'kyiv',
  BREST = 'brest',
  GRODNO = 'grodno',
  VITEBSK = 'vitebsk',
}

export type IDiscountCities = {
  [key in keyof typeof ECities]: IDiscountData[] | [];
};
