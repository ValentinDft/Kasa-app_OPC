import styles from './topbar.module.scss';
import logo from '../../assets/logo.png';

const Topbar = () => {
  return (
    <div className={styles['container']}>
      <img src={logo} alt='logo' />
      <div className={styles['container-nav']}>
        <h2>Accueil</h2>
        <h2>A Propos</h2>
      </div>
    </div>
  );
};
export default Topbar;
