import styles from './accommodation.module.scss';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../../api/data.json';
import Carrousel from '../../components/carrousel/Carrousel';
import Tag from '../../components/tag/Tag';
import Author from '../../components/author/Author';
import Rating from '../../components/rating/Rating';
import Collapse from '../../components/Collapse/Collapse';
import { useEffect } from 'react';

const Accommodation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const house = data.find((location) => location.id === id);

  useEffect(() => {
    if (!house) {
      navigate('/error');
    }
  }, []);

  if (house) {
    return (
      <div className={styles['container']}>
        <Carrousel images={house.pictures} />
        <div className={styles['container-info']}>
          <div>
            <h1>{house.title}</h1>
            <h3>{house.location}</h3>
            <div className={styles['list-tag']}>
              {house.tags.map((tag) => (
                <Tag key={tag} tag={tag} />
              ))}
            </div>
          </div>
          <div className={styles['container-info-author-rating']}>
            <Author author={house.host} />
            <Rating stars={house.rating} />
          </div>
        </div>
        <div className={styles['container-collapse']}>
          <Collapse title='Description' content={house.description} />
          <Collapse title='Equipement' content={house.equipments} />
        </div>
      </div>
    );
  }
};
export default Accommodation;
