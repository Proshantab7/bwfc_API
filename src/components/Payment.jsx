import React, { useEffect, useState } from "react";
import { Container } from './Container';
import Flex from './Flex';

const Payment = () => {
  const [paymentData, setPaymentData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://bwfc-api.vercel.app/payment")
      .then((response) => response.json())
      .then((json) => {
        setPaymentData(json);
        setLoading(false);
      });
  }, []);
  // console.log(paymentData);

  if (loading) {
    return <h1>Loading Payment.......</h1>;
  }
  return <section>
    <Container className='bg-[#F3F7FA] rounded-[20px]'>
        <Flex>
            <div className="w-[53%]">
                <h3 className="mt-[75px] font-extrabold text-lg text-[#3734A9] uppercase pl-[68px]">{paymentData.subTitle}</h3>
                <h2 className="text-[50px] font-bold mt-[25px] pl-[68px]">{paymentData.title}</h2>
                <p className="text-lg font-normal text-[#757095] pl-[68px] mt-9 mb-[75px]">{paymentData.paragraph}</p>

            </div>
            <div className="relative w-[47%]">
              <img className="absolute -top-5 right-0" src={paymentData.paymentShape} alt="paymentShanpe" />
              <input type="text" name="" id="" />
            </div>
        </Flex>

    </Container>
  </section>;
};

export default Payment;
