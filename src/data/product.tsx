interface productItems {
  uid: string;
  product: string;
  category: string;
  brand: string;
  price: number;
  stock: number;
  rating: number;
  order: number;
  sales: number;
  // action: string;
}

const productItems: productItems[] = [
  {
    uid: "1",
    product: "Apple iPhone 12 Pro Max SHADHH",
    category: "Mobile",
    brand: "Apple",
    price: 1099,
    stock: 10,
    rating: 4.5,
    order: 0,
    sales: 0,
  },
  {
    uid: "2",
    product: "Samsung Galaxy S21 Ultra",
    category: "Mobile",
    brand: "Samsung",
    price: 1199,
    stock: 10,
    rating: 4.5,
    order: 0,
    sales: 0,
  },
  {
    uid: "3",
    product: "OnePlus 9 Pro",
    category: "Mobile",
    brand: "OnePlus",
    price: 1069,
    stock: 10,
    rating: 4.5,
    order: 0,
    sales: 0,
  },
  {
    uid: "4",
    product: "Xiaomi Mi 11 Ultra",
    category: "Mobile",
    brand: "Xiaomi",
    price: 1199,
    stock: 10,
    rating: 4.5,
    order: 0,
    sales: 0,
  },
  {
    uid: "5",
    product: "Sony Xperia 1 III",
    category: "Mobile",
    brand: "Sony",
    price: 1299,
    stock: 10,
    rating: 4.5,
    order: 0,
    sales: 0,
  },
  {
    uid: "6",
    product: "Google Pixel 5",
    category: "Mobile",
    brand: "Google",
    price: 699,
    stock: 10,
    rating: 4.5,
    order: 0,
    sales: 0,
  },
  {
    uid: "7",
    product: "Apple iPhone 12",
    category: "Mobile",
    brand: "Apple",
    price: 799,
    stock: 10,
    rating: 4.5,
    order: 0,
    sales: 0,
  },
];

export default productItems;
