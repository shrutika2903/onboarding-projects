import { useState } from 'react'
import './App.css'
import { MenuType } from './MenuType';
import Menu from './Menu';
import MenuData from './Data';
import Categories from './Categories';
const allCategories = ['all', ...new Set(MenuData.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(MenuData);
  const [categories, setCategories] = useState(allCategories);
  const [items, setItems] = useState<MenuType[]>([]);


  const filterItems = (category: string) => {
    if (category === 'all') {
      setMenuItems(MenuData);
      return;
    }
    const newItems = MenuData.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
   <>
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories items={items} />
        {/* <Menu MenuData={menuItems} /> */}
        {/* <Menu /> */}
      </section>
    </main>   </>
  )
}

export default App
