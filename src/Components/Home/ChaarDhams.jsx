import React, { useEffect, useState } from "react";

import "./ChaarDhams.css";
import { axiosWithoutToken } from "../../Api/AxiosInstance";

const ChaarDhams = () => {
  const [dhams, setDhams] = useState([]);

  useEffect(() => {
    axiosWithoutToken
      .get("/temple/gettemplesbycat/66cc5baa6566092b8748bbc8")
      .then((response) => {
        console.log("the all DHAMS", response);
        setDhams(response.data.result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="chaardhams">
      <div className="dham-4">
        <div className="dham_heading">
          <h2>4-DHAMS</h2>
        </div>
        <div className="dham">
          {dhams.map((dham) => {
            return (
              <div className="dham1">
                <div className="dhaminner">

                <img src={dham.pictures[0]} alt="Badrinath Dham" />
                <video
                  autoPlay
                  loop
                  muted
                  src={dham.video}
                  alt="Badrinath Video"
                  />
                  </div>
                <div className="dham_one_content">
                  <h2>{dham.name}</h2>
                  {/* <p>
                    Badrinath, is located in the Chamoli district of
                    Uttarakhand, at an altitude of 3,133 meters (10,279 feet).
                    The temple of Badrinath is dedicated to Lord Vishnu
                    Uttarakhand.[23] It is in the Garhwal hills, on the
                    Alaknanda River banks. The town lies between the Nar and
                    Narayana mountain ranges and in the shadow of Nilkantha peak
                    (6,560 m).
                  </p> */}

                     <p>Location : Badri to Mata Murti road, Badrinath</p>
                     <p>Coordinates : 30°44'41″N 79°29'28″E / 30.744695°N 79.491175°E</p>
                     <p>Altitude : 3,100 m (10,171 ft)</p>
                     <p>State : Uttarakhand</p>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChaarDhams;
