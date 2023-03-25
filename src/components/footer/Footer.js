import styles from './footer.module.scss';
import logo from '../../assets/logo white.png';

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt='logo' />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
