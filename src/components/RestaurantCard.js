import { CDN_URL } from "../utils/constant";

const ResturantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRatingString, sla } = resData.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={`${CDN_URL}/${cloudinaryImageId}`}
        alt=""
      />
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <div className="res-info">
        <span>⭐ {avgRatingString}</span>
        <span>⏳ {sla.slaString}</span>
      </div>
    </div>
  );
};


// export const withPromotedLabel = (RestaurantCard) => {
//   return (props) => {
//     return (
//       <div className="promoted-label">
//         <label>Promoted</label>
//         <RestaurantCard {...props} />
//       </div>
//     );
//   };
// };

export default ResturantCard;
