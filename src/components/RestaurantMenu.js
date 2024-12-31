import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { ResId } = useParams();
  const resInfo = useRestaurantMenu(ResId);

  const [showIndex, setShowIndex] = useState(null);

  

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards[2]?.card?.card?.info;
  const resMenuSearch =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  let resItems = resMenuSearch[2]?.card?.card?.itemCards;
  if (resItems === undefined) {
    resItems = resMenuSearch[1]?.card?.card?.itemCards;
  }

  const categories = resMenuSearch.filter(
    (category) =>
      category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
      category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
  );
  //check if an index is already open 
  const checkIndex = (newIndex) => {
    if(newIndex === showIndex){
        setShowIndex(null);
    }
    else{
        setShowIndex(newIndex);
    }
  }
 
  return (
    <div className="px-4 text-center ">
      <h1 className="font-bold text-2xl">{name}</h1>
      <h3 className="font-medium"> {cuisines.join(", ")}</h3>
      <div>
        <h3 className="font-medium">{costForTwoMessage} </h3>
        <h4 className="font-medium">{avgRating}⭐</h4>
      </div>

      <h2 className="my-4 text-lg font-medium">Menu</h2>

      <div>
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            itemData={category?.card?.card} showItems={index===showIndex ? true: false}
            checkIndex = { ()=> checkIndex(index)}
            
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
