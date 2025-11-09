import React, { useState } from 'react';

const Collections = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className="collections-container">
      <h2>Your Categories</h2>
      <div className="categories-list">
        {Object.keys(categories).length === 0 ? (
          <p>No categories yet — start by adding one!</p>
        ) : (
          Object.keys(categories).map((cat) => (
            <div
              key={cat}
              className={`category-card ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
            >
              <h3>{cat}</h3>
              {activeCategory === cat && (
                <ul>
                  {categories[cat].map((link, i) => (
                    <li key={i}>
                      <a href={link} target="_blank" rel="noreferrer">{link}</a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Collections;
