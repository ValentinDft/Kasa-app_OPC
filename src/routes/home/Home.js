import styles from './home.module.scss';
import imgHeader from '../../assets/cover.png';
import data from '../../api/data.json';

// Components
import BannerImage from '../../components/banner/Banner-image';
import CardLocation from '../../components/card-location/Card-location';

const Home = () => {
  return (
    <>
      <div className={styles['container']}>
        <BannerImage
          image={imgHeader}
          title='Chez vous, partout et ailleurs'
          height={240}
        />

        <div className={styles['container-list']}>
          {data.map((location) => (
            <CardLocation key={location.id} {...location} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Home;
