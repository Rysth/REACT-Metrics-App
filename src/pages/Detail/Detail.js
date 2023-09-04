import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClassBySlug } from '../../redux/Classes/ClassesSlice';
import classImages from '../../redux/Classes/Data/Images';
import Separator from '../../components/Separator/Separator';
import DetailCard from './DetailCard/DetailCard';
import './Detail.css';

function Detail() {
  const { classSelected } = useSelector((store) => store.classes);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchClassBySlug(params.slug));
  }, [dispatch, params.slug]);

  return (
    classSelected && (
      <div className="detail ">
        <div className="md:container mx-auto py-2 grid grid-cols-2">
          <img className="detail-image" src={classImages[params.slug]} alt="" />
          <span className="flex flex-col items-end justify-center px-4 text-white">
            <h3 className="text-2xl uppercase font-bold">
              {classSelected.name}
            </h3>
            <p className="text-xs flex gap-1">
              <span>{classSelected.archetypes.length}</span>
              archetypes
            </p>
          </span>
        </div>
        <Separator text="List of Archetypes" />
        <div className="grid">
          {classSelected.archetypes.map((item) => (
            <DetailCard key={item.document__url} />
          ))}
        </div>
      </div>
    )
  );
}

export default Detail;
