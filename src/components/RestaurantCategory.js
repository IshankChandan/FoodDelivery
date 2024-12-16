
import MenuItems from "./MenuItems";
import NestedCategoryList from "./NestedCategoryList";

import { useState } from "react";

const RestaurantCategory = ({ itemData }) => {
  const ItemsData = itemData;
  console.log(itemData);

  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
   if(itemData?.["@type"] ===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"){  setShowItems(!showItems) } 

  }

  // const nestedCategory = ItemsData.filter((nestedCat)=> (nestedCat?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"));
  // console.log(nestedCategory)\

  return (
    <div className="mx-auto my-5 shadow-lg p-4 bg-slate-100 w-6/12 text-left">
      {/** Title based on condition  */}
      {itemData?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" ?
         <div className="flex justify-between text-lg font-bold">
        <span >{itemData.title}</span>
      </div> :
      <div className="flex justify-between text-lg font-bold cursor-pointer" onClick={handleClick}>
        <span >{itemData.title}</span>
        <span>🔽</span>
      </div>
      }

      <div>
        {/**Body */}
        {itemData?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" ? (
          <NestedCategoryList data={itemData} />
        ) : 
          showItems && <MenuItems items={itemData} />
        }
      </div>
    </div>
  );
};

export default RestaurantCategory;
