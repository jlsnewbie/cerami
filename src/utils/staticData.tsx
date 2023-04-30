export type ProdHotType = {
  title?: string;
  data?: {
    name: string;
    product_category: string;
    product_type: string;
    description: string;
    image: any[];
    amount: string;
    islike: boolean;
  };
};

export const ProdCategory = [
  {
    categoryname: 'Ceramics',
    image: require('@assets/cerami.jpg'),
  },
  {
    categoryname: 'Kitchenwares',
    image: require('@assets/kitchenwares.jpg'),
  },
  {
    categoryname: 'Vase',
    image: require('@assets/vase.jpg'),
  },
  {
    categoryname: 'Utensils',
    image: require('@assets/utensils.jpg'),
  },
];

export const ProdHot: ProdHotType = {
  title: 'Product of the Week',
  data: {
    image: [require('@assets/hot.jpg')],
    name: 'Test Item #1',
    product_category: 'Ceramics',
    product_type: 'Japanese',
    amount: '11.17',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    islike: false,
  },
};

export const ProductType: string[] = [
  'Japanese',
  'Korean',
  'Floral',
  'Medieval',
  'Antique',
  'Modern',
];

export const Products: Object[] = [
  {
    image: [
      require('@assets/japanese1.jpg'),
      require('@assets/japanese2.jpg'),
      require('@assets/japanese3.png'),
    ],
    name: 'Japanese #1',
    product_category: 'Ceramics',
    product_type: 'Japanese',
    amount: '10.50',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    islike: false,
  },
  {
    image: [require('@assets/japanese2.jpg'), require('@assets/japanese4.jpg')],
    name: 'Japanese #2',
    product_category: 'Ceramics',
    product_type: 'Japanese',
    amount: '13.10',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    islike: false,
  },
  {
    image: [require('@assets/japanese3.png')],
    name: 'Japanese #3',
    product_category: 'Ceramics',
    product_type: 'Japanese',
    amount: '15.35',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    islike: false,
  },
  {
    image: [require('@assets/japanese4.jpg')],
    name: 'Japanese #4',
    product_category: 'Ceramics',
    product_type: 'Japanese',
    amount: '10.00',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    islike: false,
  },
  {
    image: [require('@assets/vase.jpg')],
    name: 'Korean #1',
    product_category: 'Ceramics',
    product_type: 'Korean',
    amount: '10.50',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    islike: false,
  },
  {
    image: [require('@assets/vase.jpg')],
    name: 'Korean #2',
    product_category: 'Ceramics',
    product_type: 'Korean',
    amount: '10.50',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    islike: false,
  },
  {
    image: [require('@assets/vase.jpg')],
    name: 'Korean #3',
    product_category: 'Ceramics',
    product_type: 'Korean',
    amount: '10.50',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    islike: false,
  },
];
