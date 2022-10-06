import React from "react";
import Header from "../../components/header-component";
import Charecter from "../../components/Charecter/charecter.component";
import Haru from "../../Images/Haru.png"
import Tau from ""
import Veda from "../../Images/Veda.png"
import Zoya from "../../Images/Zoya.png"

function Agent(){
    return(
        <div>
            <Header title="Don't Pass Out" />
            <Charecter imageUrl={Tau} altText="Boy listening to music"/>
            <Charecter imageUrl={Haru} altText="Boy playing video game"/>
            <Charecter imageUrl={Zoya} altText="Girl taking selfie"/>
            <Charecter imageUrl={Veda} altText="Woman looking at facebook"/>
        </div>
    )
}

export default Agent;