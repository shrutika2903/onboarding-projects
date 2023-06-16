import React, {useState} from "react";
import { Button } from "@mui/material";
import { MenuType } from "./MenuType";
import MenuData from "./Data";

interface MenuProps {
    menuItems: MenuType[];
    // filterItems: (category: string) => void;
}

function Categories() {
    const [items, setItems] = useState<MenuProps[]>(MenuData);

    
    console.log('MenuItems', menuItems)
    return (
        <div>

        </div>
    )
}

export default Categories;