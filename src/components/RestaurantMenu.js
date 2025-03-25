import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = () => {
    const [showIndex, setShowIndex] = useState(null);

  const { resId } = useParams();
  const restaurantInfo = useRestaurantMenu(resId)

  if (restaurantInfo === null) return <Shimmer />;

  const { name, cuisines, avgRatingString } =restaurantInfo?.cards[2]?.card?.card?.info;

  const categories = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter( (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

  return (
    <div>
      <div className="text-center">
        <h1 className="font-2xl my-6 text-2xl">{name}</h1>
        <p className="text-base text-[#bbb] mt-1.5">{cuisines.join(", ")}</p>
        <p className="text-base text-[#facc15] mt-1.5">⭐ {avgRatingString}</p>
      </div>

      {categories.map( (category, index) => (
        // Controlled Component
        <RestaurantCategory 
        key={category?.card?.card?.title}
        data={category?.card?.card} 

        showItems={ index === showIndex ? true : false}
        setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;