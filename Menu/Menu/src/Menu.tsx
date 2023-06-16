import React, { useState } from "react";
import MenuData from "./Data";

// interface MenuProps {
//     id: number;
//     title: string;
//     category: string;
//     price: number;
//     img: string;
//     desc: string;
// }
function Menu() {
    const [items, setItems] = useState(MenuData);
    return (
        <div className='section-center'>
            {
                items.map((menuItem) => {
                    const { id, title, category, price, img, desc } = menuItem;
                    return (
                        <article key={id} className='menu-item'>
                            <img src={img} alt={title} />
                            <div className='item-info'>
                                <header>
                                    <h4>{title}</h4>
                                    <h4 className='price'>${price}</h4>
                                </header>
                                <p className='item-text'>{desc}</p>
                            </div>
                        </article>
                    )
                })
            }
        </div>
    )
}

export default Menu;