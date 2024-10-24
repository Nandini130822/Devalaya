import React, { useEffect, useState } from "react";
import { axiosWithoutToken } from "../../Api/AxiosInstance";
import './Jyotirlingas.css'

const Jyotirlingas = () => {
  const [Jyotirlings, setJyotirlings] = useState([]);

  useEffect(() => {
    axiosWithoutToken
      .get("/temple/gettemplesbycat/65d4a0683b27dcea208a204c")
      .then((response) => {
        setJyotirlings(response.data.result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <div className="jyotirling">

          <h2 className="jyotirling_heading">JYOTIRLINGAS</h2>
      
        <div id="card-area">
          <div className="jyotir_wrapper">
            <div className="jyotir_box_area">
              {Jyotirlings.map(({ pictures, name}) => (
                <div className="jyotir_box" key={name}>
                  <img alt={name} src={pictures[0]} />
                  <div className="jyotir_box_overlay">
                    <h3>{name}</h3>
                    <a href="#Book Now">Book Now</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jyotirlingas;