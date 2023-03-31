import styles from './accommodation.module.scss';
import { useParams } from 'react-router-dom';
import data from '../../api/data.json';
import Carrousel from '../../components/carrousel/Carrousel';

const Accommodation = () => {
  const { id } = useParams();

  const location = data.find((location) => location.id === id);
  return (
    <div>
      <Carrousel images={location.pictures} />
      <h1>{location.title}</h1>
    </div>
  );
};
export default Accommodation;
