import React from "react";
import "../../components/Header/Header.scss";

import Header from "../Header/Header";


const HeaderMod = () => {
    return (

        Header.querySelector(".Header").classList.add(".Header_secondary")
    );
};

export default HeaderMod;

