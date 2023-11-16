import React, { useEffect, useState } from "react";
import axios from "axios";

const Card = () => {
  const [userData, setData] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response, "respone")
      setData(response.data);
      console.log(response.data, "responess")
    });
  }, []);
  return (
  <div>
{
    userData.map((userDatas)=>{
        return (
            <div className="card-container container col-12 ">
                <div className="card col-4 shadow p-4 text-center border-0 mt-2 mb-2">
                {userDatas.name}
                </div>

            </div>
            
        )

    })
}

  </div>
  )
};

export default Card;
