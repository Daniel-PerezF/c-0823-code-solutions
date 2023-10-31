import { useState } from 'react';

type Prop = {
  items: string[];
};

export function SearchableList({ items }: Prop) {
  const [search, setSearch] = useState('');
  return (
    <label>
      <input
        type="text"
        placeholder="Search for items"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}></input>
      <ul>
        {items
          .filter((item) => item.toLowerCase().includes(search))
          .map((filteredItem, index) => (
            <li key={index}>{filteredItem}</li>
          ))}
        {items.filter((item) => item.toLowerCase().includes(search)).length ===
          0 && <li>No items match the filter</li>}
      </ul>
    </label>
  );
}
