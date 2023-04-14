import styles from './tag.module.scss';

const Tag = ({ tag }) => {
  return <span className={styles['tag']}>{tag}</span>;
};

export default Tag;
