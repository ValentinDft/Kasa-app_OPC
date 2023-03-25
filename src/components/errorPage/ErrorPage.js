import { NavLink } from 'react-router-dom';
import styles from './errorPage.module.scss';

const ErrorPage = () => {
  return (
    <div className={styles['errorPage']}>
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <NavLink to='/'>
        <span>Retourner sur la page d’accueil</span>
      </NavLink>
    </div>
  );
};
export default ErrorPage;
