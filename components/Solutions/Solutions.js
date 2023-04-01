import styles from './Solutions.module.css';
import recycle from '../../public/images/icon-1.png';
import sun from '../../public/images/icon-2.png';
import wind from '../../public/images/icon-3.png';
import elephant from '../../public/images/elephant.jpg';
import Image from 'next/image';

const Solutions = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img__container}>
        <Image src={elephant} />
      </div>
      <div className={styles.content}>
        <div className={styles.item}>
          <div className={styles.icon}>
            <Image src={recycle} />
          </div>
          <div className={styles.description}>
            <h4>Recycling</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              molestias dolorum quas quasi, repudiandae deserunt. Soluta
              laudantium vel excepturi eligendi porro sunt fuga? Ut asperiores
              minima laborum obcaecati laboriosam voluptates sapiente ea illo
              quae?
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.icon}>
            <Image src={sun} />
          </div>
          <div className={styles.description}>
            <h4>Solar Energy</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              molestias dolorum quas quasi, repudiandae deserunt. Soluta
              laudantium vel excepturi eligendi porro sunt fuga? Ut asperiores
              minima laborum obcaecati laboriosam voluptates sapiente ea illo
              quae?
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.icon}>
            <Image src={wind} />
          </div>
          <div className={styles.description}>
            <h4>Wind Energy</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              molestias dolorum quas quasi, repudiandae deserunt. Soluta
              laudantium vel excepturi eligendi porro sunt fuga? Ut asperiores
              minima laborum obcaecati laboriosam voluptates sapiente ea illo
              quae?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Solutions;
