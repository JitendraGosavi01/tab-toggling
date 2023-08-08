import React, { useState } from 'react';

const CategoryList = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleSubcategories = (categoryIndex) => {
    setActiveCategory(activeCategory === categoryIndex ? null : categoryIndex);
  };

  return (
    <div className="category-list">
      {categories.map((category, index) => (
        <div key={index} className="category">
          <h2 onClick={() => toggleSubcategories(index)}>{category.name}</h2>
          {activeCategory === index && (
            <ul>
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
              {category.subcategories &&
                category.subcategories.map((subcategory, subcategoryIndex) => (
                  <li key={subcategoryIndex} className="subcategory">
                    {subcategory}
                  </li>
                ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};


export default CategoryList