interface IDiscountLinks {
  site: string;
  instagram?: string;
  twitter?: string;
  vk?: string;
  ok?: string;
}

export interface IDeliveryDiscountData {
  id: number;
  title: string;
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

type TCities = keyof ECities[keyof ECities];

export type IDiscountCities = {
  [key in TCities]: IDeliveryDiscountData[] | [];
};
