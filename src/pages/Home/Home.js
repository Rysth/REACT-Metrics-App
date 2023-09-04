import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Logo from '../../assets/PNG/logo.png';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import classImages from '../../redux/Classes/Data/Images';
import './Home.css';

function Home() {
  const { classArray } = useSelector((store) => store.classes);

  useEffect(() => {}, [classArray]);

  return (
    <div className="home">
      <Header />
      <div className="bg-primary-blue text-white">
        <div className="md:container py-2 grid grid-cols-2 ">
          <span>
            <img src={Logo} alt="" />
          </span>
          <span className="flex flex-col justify-center">
            <h3 className="text-2xl uppercase font-bold">Games</h3>
            <p className="text-xs">2,438 Views</p>
          </span>
        </div>
      </div>
      <div className="bg-primary-blue-dark">
        <div className="md:container px-4 py-1">
          <h2 className="text-white uppercase text-xs ">Stats by Class</h2>
        </div>
      </div>
      <div className="grid grid-cols-2">
        {classArray.map((item) => (
          <Card
            key={item.slug}
            id={item.slug}
            className={item.name}
            count={item.archetypes.length}
            imageSource={classImages[item.slug]}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
