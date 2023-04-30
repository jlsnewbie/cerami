export type ProdItemProps = {
  image: any;
  name: string;
  product_category: string;
  product_type: string;
  amount: string;
  description: string;
  islike: boolean;
  navigation?: any;
  items?: Object;
};

export type ItemProps = {
  [key: string]: any;
};

export type ListItemProps = {
  data: Object[];
  navigation?: [];
};
