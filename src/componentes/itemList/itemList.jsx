import React from "react";
import Card from "../Card/Card";



const itemList = ({data = []})=>{
    return(
        data.map(productosPet => <Card key={productosPet.id} info={productosPet} />)
    )
}

export default itemList;