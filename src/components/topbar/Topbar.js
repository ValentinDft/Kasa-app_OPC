import styles from './topbar.module.scss';
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';

const Topbar = () => {
  return (
    <div className={styles['container']}>
      <img src={logo} alt='logo' />
      <nav className={styles['container-nav']}>
        <NavLink
          to='/'
          style={({ isActive }) =>
            isActive ? { borderBottom: '#ff6060 2px solid' } : {}
          }
        >
          <h2>Accueil</h2>
        </NavLink>
        <NavLink
          to='/about'
          style={({ isActive }) =>
            isActive ? { borderBottom: '#ff6060 2px solid' } : {}
          }
        >
          <h2>A Propos</h2>
        </NavLink>
      </nav>
    </div>
  );
};
export default Topbar;
