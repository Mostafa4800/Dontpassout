import React from "react";
import { Link } from "react-router-dom";

function ButtonComponent(props){
    return(
        <div>
            <Link to="/agent">{props.buttonText}</Link>
        </div>
    );
};

export default ButtonComponent;