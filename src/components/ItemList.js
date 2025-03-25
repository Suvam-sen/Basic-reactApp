import React from "react";
import { CDN_URL } from "../utils/constant";

const ItemList = ({ items }) => {
  // console.log(items);

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-4 m-2 border-gray-300 border-b-2 text-left
            flex justify-between">
          <div>
            <div className="py-2 font-medium">
              <span>{item.card.info.name}</span>
              <span> - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="relative flex flex-col items-center">
            <img
              src={`${CDN_URL}/${item.card.info.imageId}`}
              className="w-[100px] h-[100px] rounded-[10px] object-cover mb-[5px]"/>
              <button className="absolute bottom-[-5px] bg-white px-4 py-1 border border-gray-300 shadow-lg rounded-lg text-green-600 font-bold text-sm">ADD</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
