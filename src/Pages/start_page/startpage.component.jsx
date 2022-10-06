import React from "react";
import Header from "../../components/header-component";
import ButtonComponent from "../../components/button/button.component";

// The start page for Dont Pass Out
function Startpage(){
    return(
        <div>
            <Header title="Don't Pass Out"/>
            <ButtonComponent buttonText="Start" />
        </div>
       
    )
}

export default Startpage;