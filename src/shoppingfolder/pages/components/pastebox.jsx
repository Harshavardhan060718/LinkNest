import React, { useState } from 'react';

const Pastebox = () => {
  const [link, setLink] = useState('');
  const [category, setCategory] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [showNewCategory, setShowNewCategory] = useState(false);

  // handle category select
  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategory(value);
    if (value === 'create-new') {
      setShowNewCategory(true);
    } else {
      setShowNewCategory(false);
    }
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedCategory = showNewCategory ? newCategory : category;
    console.log('Link:', link);
    console.log('Category:', selectedCategory);
    alert(`Link: ${link}\nCategory: ${selectedCategory}`);
  };

  return (
    <div className="pastebox-container">
      <form onSubmit={handleSubmit} className="pastebox-form">
        <h2>Paste your link:</h2>

        <input
          type="text"
          placeholder="Paste link here..."
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
        />

        <select value={category} onChange={handleCategoryChange} required>
          <option value="">Select Category</option>
          <option value="tech">Tech</option>
          <option value="news">News</option>
          <option value="education">Education</option>
          <option value="create-new">+ Create New Category</option>
        </select>

        {showNewCategory && (
          <input
            type="text"
            placeholder="Enter new category name"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            required
          />
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Pastebox;
