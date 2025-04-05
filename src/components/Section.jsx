// src/components/Section.js
import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Vibrant Home Painting', price: 1099, image: '/product1.jpg' },
  { id: 2, name: 'Majestic 7 Horses Art', price: 599, image: '/product2.jpg' },
  { id: 3, name: 'Spider-Man: Heroic Canvas', price: 1499, image: '/product3.jpg' },
  { id: 4, name: 'Shree Ram Ji Divine Portrait', price: 2999, image: '/product4.jpg' },
  { id: 5, name: 'Mystical Mahadev ji Artwork', price: 199, image: '/product5.jpg' },
  { id: 6, name: 'Lord Hanuman Spiritual Masterpiece', price: 999, image: '/product6.jpg' },
  { id: 7, name: 'Iron-Man (Tony Stark) Legacy Painting', price: 1099, image: '/product7.jpg' },
  { id: 8, name: 'Elegant Bird Art', price: 399, image: '/product8.jpg' },
  { id: 9, name: 'Virat Kohli: Cricket Icon Painting', price: 199, image: '/product9.jpg' },
  { id: 10, name: 'Divine Mata Ji Portrait painting', price: 999, image: '/product10.jpg' },
  { id: 11, name: 'Hanuman Ji: Protector of Faith', price: 1099, image: '/product11.jpg' },
  { id: 12, name: 'Family Love: Custom Family Portrait', price: 399, image: '/product12.jpg' },
  { id: 13, name: 'Safety First: Helmet Art', price: 399, image: '/product13.jpg' }
];


const Section = () => {
  return (
    <section id="products" className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;
