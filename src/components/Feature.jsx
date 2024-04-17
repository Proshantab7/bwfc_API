import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container } from './Container';
import Flex from './Flex';
import { Link } from 'react-router-dom';

const Feature = () => {

    const [featureData, setFeatureData ] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const getFeatureData =async () => {
            let data = await axios.get('https://bwfc-api.vercel.app/feature')
            setFeatureData(data.data);
            setLoading(false);
        }
        getFeatureData();
    }, [])
    
    if (loading) {
        return (
            <h1>Loading-------</h1>
        )
    }

  return (
    <section className='mt-[113px]' style={{background:`url(${featureData.featureShape})`}}>
        <Container>
            <Flex >
                <div className="w-1/2">
                    <img src={featureData.featureImage} alt="featureImage" />
                </div>
                <div className="w-1/2 ">
                    <h3 className='text-lg font-extrabold text-[#3734A9] uppercase'>{featureData.subTitle}</h3>
                    <h2 className='text-[50px] font-bold mt-6'>{featureData.title}</h2>
                    <p className='text-[#757095] text-lg font-normal'>{featureData.paragraph}</p>
                    <Link className='bg-[#3734A9] py-4 px-9 rounded-lg text-white inline-block font-bold text-base mt-7' to={featureData.button.link}> {featureData.button.text}</Link>
                </div>
            </Flex>

        </Container>
    </section>
  )
}

export default Feature