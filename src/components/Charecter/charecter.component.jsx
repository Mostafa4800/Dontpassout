import React from "react";
import { CharecterCard} from "./charecter.styles";

function Charecter({imageUrl, altText}){
    return(
        <div>
            <CharecterCard>
                <img src={imageUrl} alt={altText}/>
            </CharecterCard>
        </div>
    );
}

export default Charecter;