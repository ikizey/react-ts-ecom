import { ProductType } from './types/Product.types';

const iPhone14Violet: ProductType = {
  id: '2832806',
  brand: 'Apple',
  name: 'iPhone 14 Plus Purple 128 GB Dual Sim',
  price: 979,
  images: [
    {
      src: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97277861/fee_325_225_png',
      alt: 'Front and back.',
    },
    {
      src: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97277846/fee_325_225_png',
      alt: '',
    },
    {
      src: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97277846/fee_325_225_png',
      alt: 'Camera.',
    },
    {
      src: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97277850/fee_325_225_png',
      alt: 'All iPhone varieties',
    },
  ],
};

const iPhone14Blue: ProductType = {
  id: '2832841',
  brand: 'Apple',
  name: 'iPhone 14 Plus Blue 512 GB Dual Sim',
  price: 1489,
  images: [
    {
      src: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97278134/fee_325_225_png',
      alt: 'Front and back.',
    },
    {
      src: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97278122/fee_325_225_png',
      alt: '',
    },
    {
      src: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97278113/fee_325_225_png',
      alt: 'Camera.',
    },
    {
      src: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97278115/fee_325_225_png ',
      alt: 'All iPhone varieties',
    },
  ],
};

const iPhone14White: ProductType = {
  id: '2832841',
  brand: 'Apple',
  name: 'iPhone 14 Plus Starligth 256 GB Dual Sim',
  price: 1079,
  images: [
    {
      src: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97275757/fee_325_225_png',
      alt: 'Front and back.',
    },
    {
      src: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97275746/fee_325_225_png',
      alt: '',
    },
    {
      src: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97275747/fee_325_225_png',
      alt: 'Camera.',
    },
    {
      src: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97278115/fee_325_225_png ',
      alt: 'All iPhone varieties',
    },
  ],
};

export const products = [iPhone14Violet, iPhone14Blue, iPhone14White];
