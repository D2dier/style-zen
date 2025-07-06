// src/data/products.js

import whiteT from '../img/white-tshirt.avif';
import blackT from '../img/black-tshirt.avif';
import oversizedSweater from '../img/oversized-sweater.webp';
import turtleneck from '../img/turtleneck.avif';
import trousers from '../img/trousers.webp';
import widePants from '../img/wide-pants.webp';
import dress from '../img/dress.avif';
import trenchCoat from '../img/trench-coat.jpeg';
import bucketHat from '../img/bucket-hat.avif';

const products = [
  {
    id: 1,
    title: 'Essential T-shirt',
    price: 29.99,
    image: whiteT,
    alt: 'Minimalist white cotton t-shirt with round neck',
    description: 'A timeless white tee made from soft, breathable cotton—perfect for everyday wear.'
  },
  {
    id: 2,
    title: 'Classic T-shirt',
    price: 45.99,
    image: blackT,
    alt: 'Light beige cotton shirt with button-down collar',
    description: 'A classic fit t-shirt designed for versatility and all-day comfort.'
  },
  {
    id: 3,
    title: 'Oversized Sweater',
    price: 49.99,
    image: oversizedSweater,
    alt: 'Oversized blush pink cotton sweater with ribbed cuffs',
    description: 'A cozy oversized sweater that adds effortless style to your outfit.'
  },
  {
    id: 4,
    title: 'Cashmere Turtleneck',
    price: 79.99,
    image: turtleneck,
    alt: 'Soft grey cashmere blend turtleneck sweater',
    description: 'Luxuriously soft turtleneck made from a premium cashmere blend.'
  },
  {
    id: 5,
    title: 'Linen Trousers',
    price: 59.99,
    image: trousers,
    alt: 'Beige linen relaxed-fit trousers with belt loops',
    description: 'Lightweight linen trousers with a relaxed fit for a breezy, tailored look.'
  },
  {
    id: 6,
    title: 'Wide-leg Pants',
    price: 54.99,
    image: widePants,
    alt: 'High-waisted cream-colored wide-leg pants',
    description: 'Elegant wide-leg pants that balance structure and flow for modern minimalism.'
  },
  {
    id: 7,
    title: 'Midi Dress',
    price: 69.99,
    image: dress,
    alt: 'Black midi dress with square neckline and puff sleeves',
    description: 'Our signature linen dress features a relaxed silhouette with subtle gathers at the waist.'
  },
  {
    id: 8,
    title: 'Trench Coat',
    price: 89.99,
    image: trenchCoat,
    alt: 'Lightweight sand-colored trench coat with belt',
    description: 'A lightweight trench coat that layers beautifully for year-round wear.'
  },
  {
    id: 9,
    title: 'Bucket Hat',
    price: 19.99,
    image: bucketHat,
    alt: 'Bucket Hat',
    description: 'A stylish cotton bucket hat to top off your outfit and block the sun.'
  },
];


export default products;
