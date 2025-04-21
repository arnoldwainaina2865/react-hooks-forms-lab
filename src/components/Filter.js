import React from 'react';

function Filter({ category, onCategoryChange, search, onSearchChange }) {
  return (
    <div className="Filter">
      <input 
        type="text"
        placeholder="Search..."
        value={search}
        onChange={onSearchChange}
      />
      <select value={category} onChange={onCategoryChange}>
        <option value="All">Filter by Category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;