import React from 'react';

const Filter = ({ filterTitle, setFilterTitle, filterRating, setFilterRating }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="Filter by title"
        value={filterTitle}
        onChange={(e) => setFilterTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Minimum rating"
        value={filterRating}
        onChange={(e) => setFilterRating(Number(e.target.value))}
        style={{ marginLeft: '1rem' }}
      />
    </div>
  );
};

export default Filter;
