import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantInfo = useRestaurantMenu(resId)

  if (restaurantInfo === null) return <Shimmer />;

  const { name, cuisines, avgRatingString } =restaurantInfo?.cards[2]?.card?.card?.info;

  // const { itemCards } = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card;

  const categories = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter( (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

  // console.log(categories);

  return (
    <div>
      <div className="text-center">
        <h1 className="font-2xl my-6 text-2xl">{name}</h1>
        <p className="text-base text-[#bbb] mt-1.5">{cuisines.join(", ")}</p>
        <p className="text-base text-[#facc15] mt-1.5">⭐ {avgRatingString}</p>
      </div>

      {categories.map( (category) => (
        <RestaurantCategory key={category?.card?.card?.title}
         data={category?.card?.card}  />
      ))}
    </div>
  );
};

export default RestaurantMenu;