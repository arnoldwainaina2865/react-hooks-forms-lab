import React, { useState } from 'react';
import Header from './Header';
import ShoppingList from './ShoppingList';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [items, setItems] = useState([
    { id: 1, name: "Yogurt", category: "Dairy" },
    { id: 2, name: "Pomegranate", category: "Produce" },
    { id: 3, name: "Lettuce", category: "Produce" },
    { id: 4, name: "String Cheese", category: "Dairy" },
    { id: 5, name: "Cookies", category: "Dessert" },
  ]);

  function handleDarkModeClick() {
    setIsDarkMode(!isDarkMode);
  }

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <Header onDarkModeClick={handleDarkModeClick} isDarkMode={isDarkMode} />
      <ShoppingList items={items} onItemFormSubmit={handleAddItem} />
    </div>
  );
}

export default App;