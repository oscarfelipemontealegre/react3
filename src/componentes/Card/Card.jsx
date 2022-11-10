import React from "react";
import './estiloscard.css';



function Card(info) {
    return (
        <React.Fragment>
            
                <div class="card ">
                    <div class="img" src={info.image}></div>
                        <h1>{info.titulo}</h1>
                        <p>{info.precio} </p>
                            
                    

                        
                </div>
		    
        </React.Fragment>
    );
}

export default Card;