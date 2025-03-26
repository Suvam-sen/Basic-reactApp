import ResturantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RES_API } from "../utils/constant";
import UserContext from "../utils/UserContext";

// not using keys (not acceptable in react)  <<<<<<<< index as key  <<<<<<<<<< unique Id (best practice)
//whenever state variable update, react trigers a reconciliation cycle(re-rendering the component)
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredResList, setFilteredResList] = useState([]);

  // const { loggedInUser, setUserName } = useContext(UserContext);

  // const RestaurantCardWithPromotedLabel = withPromotedLabel(ResturantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const responce = await fetch(RES_API);
    const data = await responce.json();
    setListOfRestaurants(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResList(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log("Res State Data", listOfRestaurants);
  };

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <div className="search-container">
          <input
            className="search-box"
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const finalList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredResList(finalList);
            }}
          >
            Search
          </button>
        </div>
        {/* <div>
          <label>Username: </label>
          <input
            type="text"
            placeholder="Search"
            className="border border-black p-1 m-1"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value)
            }}
          />
        </div> */}
      </div>

      <div className="res-container">
        {filteredResList.map((res) => (
          <Link key={res.info.id} to={`/restaurants/${res.info.id}`}>
            {" "}
            <ResturantCard resData={res} />{" "}
          </Link>
        ))}
      </div>

      {/* Higher order function example */}
      {/* <div className="res-container">
        {filteredResList.map((res) => (
          <Link
            key={res.info.id}
            to={`/restaurants/${res.info.id}`}>
              {res.info.promoted ? (
                <RestaurantCardWithPromotedLabel resData={res} />
              ) : (
                <ResturantCard resData={res} />
              )
              }
          </Link>
        ))}
      </div> */}
    </div>
  );
};

export default Body;
