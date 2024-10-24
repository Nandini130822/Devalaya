import React, { useEffect, useState } from "react";
import "./ShaktiPeeths.css";
import { axiosWithoutToken } from "../../Api/AxiosInstance";

const ShaktiPeeths = () => {
  const [shaktiPeethas, setShaktiPeethas] = useState([]);

  useEffect(() => {
    axiosWithoutToken
      .get("/temple/gettemplesbycat/65eed479dc5644aa58a9aa78")
      .then((response) => {
        console.log("the all ShaktiPeethas", response);
        setShaktiPeethas(response.data.result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const maxitems = 4;

  const itemsPerRow = maxitems * 3;
  
  return (
    <div>
      <div className="shaktipeeth">
        <h2 className="shaktipeeth-heading">
          Shakti Peeth - {shaktiPeethas.length}
        </h2>

        <div className="shaktipeeth_list">
          <div className="shaktipeeth_container">
            {shaktiPeethas.slice(0, itemsPerRow).map((temple, index) => {
              // Split the description into an array of words
              const words = temple.smalldescription.split(" ");
              // Limit the description to 20 words
              const limitedDescription =
                words.length > 20
                  ? words.slice(0, 20).join(" ") + "..."
                  : temple.smalldescription;

              return (
                <div className="shaktipeeth_card" key={temple.id || index}>
                  <img src={temple.pictures[0]} alt={temple.name} />
                  <div className="shaktipeeth_buttons">
                    <button className="body_part">Body Part</button>
                    <button className="shktipeeth_country">
                      {temple.city?.country.title}
                    </button>
                  </div>
                  <h2>{temple.name}</h2>
                  <p>{limitedDescription}</p>
                 
                </div>
                
              );
             
            })}
             
          </div>
        </div>
        <button className="shaktipeeth-more">
              See More
            </button>
      </div>
      
    </div>
  );
};

export default ShaktiPeeths;