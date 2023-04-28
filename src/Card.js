import React, { useEffect, useState } from "react";
import { GetData } from "./API";
import { getSearchData } from "./API";
import './Card.css'
function Card({ query}) {
  const [imgList, setImgList] = useState([]);
 
  useEffect(() => {
    GetData().then((data) => {
      setImgList(data.items);
    });
  }, []);
  useEffect(() => {
    getSearchData(query).then((data) => {
      console.log(data.items);
      setImgList(data.items);
    });
  }, [query]);
  return (
    <div className="outer-div">
      {imgList?.map((item) => {
        
        return (
          <div  key={item.id} className="main-container">
          <h1>{item.snippet.title}</h1>
            <img src={item.snippet.thumbnails.medium.url} alt="hello"></img>
            <p>{item.snippet.description}</p>
          </div>
        );
      })}
    </div>
  );
}
export default Card;
