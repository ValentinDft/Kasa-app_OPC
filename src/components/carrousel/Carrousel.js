import { useState } from 'react';
import styles from './carrousel.module.scss';
import arrowLeft from '../../assets/picto/arrow-left.png';
import arrowRight from '../../assets/picto/arrow-right.png';
const Carrousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const clickPreviousSlide = () => {
    const previousSlide =
      currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(previousSlide);
  };

  const clickNextSlide = () => {
    const nextSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(nextSlide);
  };
  return (
    <div className={styles['container']}>
      <div
        style={{
          background: `url(${images[currentSlide]})`,
        }}
        className={styles['carrousel-image']}
      >
        <div className={styles['carrousel-actions']}>
          {images.length > 1 && (
            <img
              src={arrowLeft}
              alt='arrow-left'
              onClick={clickPreviousSlide}
            />
          )}
          {images.length > 1 && (
            <img src={arrowRight} alt='arrow-right' onClick={clickNextSlide} />
          )}
        </div>
        <div className={styles['carrousel-pagination']}>
          <span>
            {images.length > 1 && `${currentSlide + 1}/${images.length}`}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Carrousel;
