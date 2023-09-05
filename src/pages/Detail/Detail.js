import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
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
      <div className="detail">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, type: 'spring' }}
          className="detail-content container"
        >
          <motion.img
            animate={{ scale: [0.8, 1, 0.8] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="detail-image"
            src={classImages[params.slug]}
            alt="Class representative figure"
          />
          <div className="detail-information">
            <h3 className="detail-title">{classSelected.name}</h3>
            <p className="detail-actions">
              <span>{classSelected.archetypes.length}</span>
              archetypes
            </p>
          </div>
        </motion.div>
        <Separator text="List of Archetypes" />
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1, delay: 1 }}
          className="grid"
        >
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
        </motion.div>
      </div>
    )
  );
}

export default Detail;
