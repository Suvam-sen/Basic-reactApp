import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantInfo = useRestaurantMenu(resId)

  if (restaurantInfo === null) return <Shimmer />;

  const { name, cuisines, avgRatingString } =
    restaurantInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card
      ?.card;
  console.log(itemCards);

  return (
    <div className="restaurant-menu">
      <div className="res-header">
        <h1 className="res-header_title">{name}</h1>
        <p className="res-header_cuisine">{cuisines.join(", ")}</p>
        <p className="res-header_rating">⭐ {avgRatingString}</p>
      </div>

      <ul className="res-menu-list">
        {itemCards.map((item) => (
          <li key={item.card?.info?.id} className="res-menu-item">
            <div className="res-menu-left">
              <h3 className="res-menu-title">{item.card?.info?.name}</h3>
              <p className="res-menu-price">
                ₹{item.card?.info?.price / 100 || item.card?.info?.defaultPrice / 100}
                <span className="res-menu-discount">
                  {item.card?.info?.offerTags?.[0]?.title || ""}
                </span>
              </p>
              <p className="res-menu-rating">
                {item.card?.info?.ratings?.aggregatedRating?.rating
                  ? `⭐ ${item.card?.info?.ratings?.aggregatedRating?.rating} (${item.card?.info?.ratings?.aggregatedRating?.ratingCountV2})`
                  : "Not rated"}
              </p>
              <p className="res-menu-description">
                {item.card?.info?.description}
              </p>
            </div>
            <div className="res-menu-right">
              <img
                src={`${CDN_URL}/${item.card?.info?.imageId}`}
                alt={item.card?.info?.name}
                className="res-menu-image"
              />
              <button className="res-menu-add-btn">ADD</button>
              <p className="res-menu-custom">Customisable</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;