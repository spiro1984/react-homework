import React from "react";
import "../../components/Section/Section.scss";

import Section from "../Section/Section";


const SectionMod = () => {
    return (

        Section.querySelector(".Section").classList.remove(".Section_secondary")
    );
};

export default SectionMod;