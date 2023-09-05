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
        <div className="detail-content container">
          <img className="detail-image" src={classImages[params.slug]} alt="" />
          <div className="detail-information">
            <h3 className="detail-title">{classSelected.name}</h3>
            <p className="detail-actions">
              <span>{classSelected.archetypes.length}</span>
              archetypes
            </p>
          </div>
        </div>
        <Separator text="List of Archetypes" />
        <div className="grid">
          {classSelected.archetypes.map((item, index) => {
            if (index % 2 === 0) {
              return (
                <DetailCard
                  key={`Key: ${item.desc}`}
                  text={item.name}
                  isDark={false}
                  count={index}
                />
              );
            }

            return (
              <DetailCard
                key={`Key: ${item.desc}`}
                text={item.name}
                isDark
                count={index}
              />
            );
          })}
        </div>
      </div>
    )
  );
}

export default Detail;
