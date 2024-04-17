import  { useEffect, useState } from "react";
import { Container } from "./Container";
import axios from "axios";
import Flex from "./Flex";

const Sponsor = () => {
  const [sponsorData, setSponsorData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSponsorData = () => {
      axios.get("https://bwfc-api.vercel.app/sponsor").then((data) => {
        setSponsorData(data.data);
        setLoading(false);
      });
    };
    getSponsorData();
  }, []);

  if (loading) {
    return <h1>Loading---------</h1>;
  }
  return (
    <section className="mt-[71px]">
      <Container>
        <div>
          <h2 className="text-center text-[22px] font-normal">{sponsorData.title}</h2>
          <Flex className='justify-around mt-9'>
            {sponsorData.logos.map((item, index) => (
              <img src={item.src} alt="item Image" key={index} />
            ))}
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default Sponsor;
