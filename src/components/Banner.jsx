import React, { useEffect, useState } from "react";
import { Container } from "./Container";
import Flex from "./Flex";
import axios from "axios";
import { Link } from "react-router-dom";
import { IoIosPlayCircle } from "react-icons/io";

const Banner = () => {
  const [bannerData, setBannerData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBannerData = () => {
      axios.get("https://bwfc-api.vercel.app/banner").then((data) => {
        setBannerData(data.data);
        setLoading(false);
      });
    };
    getBannerData();
  }, []);

  if (loading) {
    return <h1>Loading....</h1>;
  }

  return (
    <section
      style={{ background: `url(${bannerData.bannerbgshape})` }}
    >
      <Container>
        <Flex className="">
          <div className="w-1/2  mt-[178px]">
            <h1 className="text-[60px] font-extrabold">{bannerData.bannerheading}</h1>
            <p className="text-xl font-normal text-[#64607D] w-[465px] mt-[22px]">{bannerData.bannerparagraph}</p>
            <Flex className=" items-center gap-[50px] mt-[26px]">
              <Link
                to={bannerData.bannerButton.link}
                className="bg-[#3734A9] text-white py-[15px] px-[35px] rounded-full font-bold text-base"
              >
                {bannerData.bannerButton.text}
              </Link>
              <Link to={bannerData.video.link}>
                <Flex className="justify-center items-center gap-[11px]">
                  <IoIosPlayCircle className="text-[60px] text-[#22D497]" />
                  <span className="text-[#3734A9] text-lg">{bannerData.video.text}</span>
                </Flex>
              </Link>
            </Flex>
          </div>
          <div className=" w-[50%] mt-[78px]">
            <img src={bannerData.bannerrightimg} alt="bannerImage"/>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;
