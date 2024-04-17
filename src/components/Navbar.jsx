import React, { useEffect, useState } from "react";
import axios from "axios";
import Flex from "./Flex";
import { Link } from "react-router-dom";
import { Container } from "./Container";

const Navbar = () => {
  const [navbarData, setNavbarData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getNavbar = () => {
      axios.get("https://bwfc-api.vercel.app/navbar").then((data) => {
        setNavbarData(data.data);
        setLoading(false);
      });
    };
    getNavbar();
  }, []);

  if (loading) {
    return (
      <h1 className="flex justify-center h-screen items-center font-extrabold text-[100px]">
        Loading.......
      </h1>
    );
  }

  return (
    <section className="mt-7">
      <Container>
        <Flex className="items-center justify-between">
          <img src={navbarData.logo} alt="Logo" />
          <Flex className=" gap-[40px] list-none">
            {navbarData.navItems.map((item, i) => (
              <li key={i}>{item.item}</li>
            ))}
          </Flex>
          <Flex className='gap-[50px]'> 
            {navbarData.buttonOne.visibility && (
              <Link to={navbarData.buttonOne.link} className="bg-[#3734A9] py-4 px-9 text-white rounded-lg">{navbarData.buttonOne.text}</Link>
            )}

            {navbarData.buttonTwo.visibility && (
              <Link to={navbarData.buttonTwo.link} className="bg-[#3734A9] py-4 px-9 text-white rounded-lg" >{navbarData.buttonTwo.text}</Link>
            )}

            {navbarData.buttonThree.visibility && (
              <Link to={navbarData.buttonThree.link} className="bg-[#3734A9] py-4 px-9 text-white rounded-lg">{navbarData.buttonThree.text}</Link>
            )}
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default Navbar;
