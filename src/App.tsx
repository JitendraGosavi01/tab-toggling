import * as React from 'react';
import CategoryList from './CategoryList';
import './style.css';
const categories = [
  {
    name: 'Category 1',
    items: ['Item 1', 'Item 2', 'Item 3'],
    subcategories: ['Subcategory 1', 'Subcategory 2'],
  },
  {
    name: 'Category 2',
    items: ['Item 4', 'Item 5', 'Item 6'],
  },
  // Add more categories as needed
];
export default function App() {
  return (
    <div>
      <h1>Categories and Subcategories</h1>
      <CategoryList categories={categories} />
    </div>
  );
}
