import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './Data';

interface MenuItem {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
}

const allCategories: string[] = ['all', ...new Set(items.map((item: MenuItem) => item.category))];

const App: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(items);
  const [categories, setCategories] = useState<string[]>(allCategories);

  const filterItems = (category: string): void => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item: MenuItem) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default App;