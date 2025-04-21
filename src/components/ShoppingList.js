import React, { useState } from 'react';
import Filter from './Filter';
import Item from './Item';
import ItemForm from './ItemForm';

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  // Filter items based on both category and search term
  const filteredItems = items.filter(item => {
    // First check if the item matches the selected category
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    
    // Then check if the item name includes the search term
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Item must match both filters
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="ShoppingList">
      <Filter 
        category={selectedCategory}
        onCategoryChange={handleCategoryChange}
        search={searchTerm}
        onSearchChange={handleSearchChange}
      />
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <ul className="Items">
        {filteredItems.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;