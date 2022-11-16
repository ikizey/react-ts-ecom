type Image = {
  src: string;
  alt: string;
};

export type ProductType = {
  id: string;
  brand: string;
  name: string;
  price: number;
  images: Image[];
};
