import ResturantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState} from "react"


// not using keys (not acceptable in react)  <<<<<<<< index as key  <<<<<<<<<< unique Id (best practice)
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList)
    return (
      <div className="body">
        <div className="filter">
          <button 
          className="filter-btn"
          onClick={() => {
            const filteredList = resList.filter((res) => res.info.avgRating > 4);
            setListOfRestaurants(filteredList);
          }}
          >Top Rated Restaurants</button>
        </div>
        <div className="res-container">
          {listOfRestaurants.map((res) => (
            <ResturantCard key={res.info.id} resData={res} />
          ))}
        </div>
      </div>
    );
  };


export default Body