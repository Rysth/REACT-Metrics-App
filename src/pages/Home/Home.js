import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import classImages from '../../redux/Classes/Data/Images';
import Hero from '../../components/Hero/Hero';
import Separator from '../../components/Separator/Separator';
import './Home.css';

function Home() {
  const { classArray } = useSelector((store) => store.classes);

  return (
    <div className="home">
      <Hero count={classArray.length} />
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
