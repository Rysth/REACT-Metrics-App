import React from 'react';
import { useSelector } from 'react-redux';
import Logo from '../../assets/PNG/logo.png';
import Card from '../../components/Card/Card';
import classImages from '../../redux/Classes/Data/Images';
import './Home.css';
import Separator from '../../components/Separator/Separator';

function Home() {
  const { classArray } = useSelector((store) => store.classes);

  return (
    <div className="home">
      <div className="hero bg-primary-blue ">
        <div className="hero-section grid grid-cols-2  text-white">
          <img className="hero-image" src={Logo} alt="Brand logo" />
          <span className="flex flex-col justify-center">
            <h3 className="uppercase font-bold">Classes</h3>
            <p className="flex gap-1">
              <span>{classArray.length}</span>
              Views
            </p>
          </span>
        </div>
      </div>
      <Separator text="Stats by Class" />
      <div className="grid grid-cols-2">
        {classArray.map((item) => (
          <Card
            key={item.slug}
            slug={item.slug}
            title={item.name}
            count={item.archetypes.length}
            imageSource={classImages[item.slug]}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
