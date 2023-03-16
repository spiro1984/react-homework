import React from "react";
import Header from "../../components/Header/Header";
import Landing from "../../components/Landing/Landing";
import Section from "../../components/Section/Section";


const Home = (props) => {
  return (
    <>
      <Header />
      <main>
        <Landing />
        <Section />
      </main>
    </>
  );
};

export default Home;
