import React, { useState } from "react";
import { useLocation,useHistory } from "react-router-dom";


const Detail = (props) => {
  const location = useLocation();
  //   console.log(location.state);
  const [data, setData] = useState(location.state.item);
  let history = useHistory();

  const goHome=()=>{
      history.push("/item")
  }

  return (
    <div className="container">
      <h1>{data.recipeName}</h1>
      <img src={data.imgUrl} className="img-fluid"></img>
      <h3>{data.desc}</h3>
      <h4>Bahan :</h4>
      <ul>
        {data.ingredients.map(function (bahan, index) {
          return (
            <li className="list" key={index}>
              {bahan}
            </li>
          );
        })}
      </ul>
      <h4>Cara Pembutan :</h4>
      <ol>
        {data.steps.map(function (bahan, index) {
          return (
            <li className="list" key={index}>
              {bahan}
            </li>
          );
        })}
      </ol>
      <button
        onClick={goHome}
        type="button"
        className="btn btn-success"
      >
        Kembali
      </button>
    </div>
  );
};

export default Detail;
