import React,{useState,useEffect} from 'react';
import {useHistory} from "react-router-dom"

const Item =() =>{

    const [data, setData] = useState([]);

        useEffect(() => {
          fetch("https://5fa790be9def160016adaf1c.mockapi.io/api/v1/recipes")
            .then((response) => response.json())
            .then((data) => setData(data));
        },[]);

        let history = useHistory()

        const ambilId =(item)=>{
          history.push(`/Detail/${item.id}`, {item:  item})
        }
        
        return (
          <div className="row row-cols-1 row-cols-md-3">
            {data.map((item, index) => {
              return (
                <div key={index}>
                    <div>
                        <div className="card" style={{margin:"10px 70px",width:"70%"}}>
                            <img src={item.imgUrl} className="card-img-top" style={{width:"100%",height:"15vw" }}></img>
                                <div className="card-body">
                                    <h5 align="center">{item.recipeName}</h5>
                                    <p align="center">{item.Category}</p>
                                    <button onClick={() => {
                                      ambilId(item);
                                    }} type="button" className="btn btn-success">Detail</button>
                                      </div>
                        </div>
                    </div>
                </div>
              );
            })}
          </div>
        );
}



export default Item;