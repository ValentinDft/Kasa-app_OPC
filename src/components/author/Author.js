import styles from './author.module.scss';

const Author = ({ author }) => {
  return (
    <div className={styles['container']}>
      <span>{author.name}</span>
      <img src={author.picture} />{' '}
    </div>
  );
};

export default Author;
