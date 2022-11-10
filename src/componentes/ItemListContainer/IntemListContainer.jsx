import React from "react";  
import {ItemCount} from "../ItemCount/ItemCount"
import { useState } from "react";
import { useEffect } from "react";




    const productosPet=[
            { id:1, image: "https://www.ammascotas.com/wp-content/uploads/2016/11/Dosificadordobleusorojo.jpg",
                producto:"comedero", precio:10000},
            { id:2, image: "https://www.ammascotas.com/wp-content/uploads/2018/08/Luxury-Acolchada.jpg",
                producto:"Camas Acolchadas", precio:70000},
            { id:3, image: "https://www.ammascotas.com/wp-content/uploads/2016/11/pelotanuedomulticolor.jpg",
                producto:"pelota", precio:5000},
    ];


export const ItemListConteiner = (props) =>{
    const [data, setData]= useState([]);


    useEffect(() =>{
        const getData = new Promise(resolve=>{
            setTimeout(() =>{
                resolve(productosPet);
            },3000 );
        });
        getData.then(res=> setData(res))
    }, [])

    const  onAdd = (cantidad) =>{}

    return(
        <>
            
            <ItemCount initial={1} stock={5} onAdd={onAdd}/>
            <itemList  data={data} />
            
        </>
    );
    }
    

export default ItemListConteiner;
